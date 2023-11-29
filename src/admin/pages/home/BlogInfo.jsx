import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addValidation } from "../../../features/dataSlice";

import { MdCloudUpload } from "react-icons/md";
import { Button, FormInput, FormTextarea } from "../../../components/elements";
import { Meta } from "../../../components/layout";
import {
  RESET,
  getBlogInfo,
  updateBlogInfo,
} from "../../../features/home/blog/blogInfoSlice";
import TruncatedText from "../../../components/TruncatedText";

let schema = yup.object().shape({
  title: yup.string().required(" "),
  content: yup.string().required(" "),
  opacity: yup
    .number()
    .typeError("")
    .max(100, "Max 100")
    .min(0, "Min 0")
    .required(" "),
});

const BlogInfo = () => {
  const dispatch = useDispatch();

  const { isLoading, blogInfo, isSuccess } = useSelector(
    (state) => state.blogInfo
  );

  const [previewImage, setPreviewImage] = useState();

  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: blogInfo,
  });

  useEffect(() => {
    trigger();
  }, [watch("title"), watch("content"), watch("opacity")]);

  useEffect(() => {
    dispatch(getBlogInfo());
  }, []);

  useEffect(() => {
    dispatch(addValidation(false));
    dispatch(RESET());
    setPreviewImage();
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (blogInfo) {
      reset(blogInfo);
    }
  }, [blogInfo]);

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();

    if (previewImage) {
      formData.append("image", values.image);
    }
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("opacity", values.opacity);
    dispatch(updateBlogInfo(formData));
  });

  const handleImageChange = useCallback(
    (e) => {
      const selectedImage = e.target.files[0];
      setValue("image", selectedImage);
      const preview = URL.createObjectURL(selectedImage);
      setPreviewImage(preview);
    },
    [setValue, setPreviewImage]
  );

  const handleClick = useCallback(() => {
    if (Object.keys(errors).length > 0) {
      dispatch(addValidation(true));
    } else {
      dispatch(addValidation(false));
    }
  }, [dispatch, errors]);

  return (
    <>
      <Meta title="Xəbər info" />
      <div className="w-full rounded-lg bg-white p-2">
        <h3 className="text-sm md:text-base text-center text-zinc-600 font-semibold px-4 my-3">
          Ana səhifə - xəbərlər haqqında qısa məlumat
        </h3>
        <hr className="my-2" />
        <form
          action=""
          className="flex flex-col space-y-3 gap-1 px-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className=" p-2 rounded-md flex flex-col  gap-3">
            <input
              className="hidden"
              id="photo"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
            />
            <label
              htmlFor="photo"
              className="flex items-center  mb-2 text-base  cursor-pointer font-medium text-gray-900 dark:text-white"
            >
              <MdCloudUpload className="me-2 text-xl" /> Banner
            </label>

            <div className="rounded-lg shadow-lg w-full md:max-w-xl p-3 overflow-hidden bg-white flex flex-col gap-4 px-5 md:px-10 justify-center min-h-[350px] relative group">
              <img
                src={previewImage ? previewImage : blogInfo?.image}
                alt=""
                className="absolute w-full h-full inset-0  !z-1  rounded-lg object-cover group-hover:scale-105 transition-all duration-300  "
              />
              <div
                style={{ opacity: `${parseFloat(watch("opacity"))}%` }}
                className="absolute inset-0 !z-[3] bg-black text-white"
              ></div>

              <h5 className="text-3xl md:text-5xl  font-bold flex flex-col text-white transition-all duration-150  !z-10">
                <TruncatedText text={blogInfo?.title || ""} />
              </h5>
              <div className="text-white transition-all duration-150 flex items-center text-2xl z-10">
                <TruncatedText text={blogInfo?.content || ""} />
              </div>
            </div>
          </div>
          <FormInput
            register={register("opacity")}
            errors={errors.opacity}
            label="Şəffaflıq"
            min={0}
            max={100}
            type="Number"
            classInput="max-w-max"
          />
          <FormTextarea
            register={register("title")}
            errors={errors.title}
            label="Başlıq"
            rows={5}
            classInput="max-h-[300px] p-2"
            placeholder="Başlıq..."
          />

          <FormTextarea
            register={register("content")}
            errors={errors.content}
            label="Content"
            rows={5}
            classInput="max-h-[300px] p-2"
            placeholder="content daxil edin..."
          />

          <div className="flex items-center justify-center">
            <Button
              onClick={() => handleClick()}
              classBtn="border-0 w-24 !rounded-full "
              type="submit"
              disabled={previewImage ? false : !isDirty || isLoading}
              isLoading={isLoading}
              label="Yenilə"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogInfo;
