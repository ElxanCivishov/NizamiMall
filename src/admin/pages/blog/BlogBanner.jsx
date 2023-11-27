import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addValidation } from "../../../features/dataSlice";

import { Button, FormInput, FormTextarea } from "../../../components/elements";
import { Meta } from "../../../components/layout";
import {
  RESET,
  getBlogInfo,
  updateBlogInfo,
} from "../../../features/blogs/blogInfoSlice";

let schema = yup.object().shape({
  title: yup.string().required(" "),
  content: yup.string().required(" "),
});

const BlogBanner = () => {
  const dispatch = useDispatch();

  const { isLoading, blogText, isSuccess } = useSelector(
    (state) => state.blogText
  );

  const {
    handleSubmit,
    register,
    watch,
    reset,
    trigger,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: blogText,
  });

  useEffect(() => {
    trigger();
  }, [watch("title"), watch("content")]);

  useEffect(() => {
    dispatch(getBlogInfo());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addValidation(false));
    dispatch(RESET());
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (blogText) {
      reset(blogText);
    }
  }, [blogText]);

  const onSubmit = handleSubmit((values) => {
    dispatch(updateBlogInfo(values));
  });

  const handleClick = () => {
    if (Object.keys(errors).length > 0) {
      dispatch(addValidation(true));
    } else {
      dispatch(addValidation(false));
    }
  };

  return (
    <>
      <Meta title="Blog info" />
      <div className="w-full rounded-lg bg-white p-2">
        <h3 className="text-sm md:text-base text-center text-zinc-600 font-semibold px-4 my-3">
          Xəbərlər və Yeniliklər başlığı
        </h3>
        <hr className="my-2" />

        <form
          action=""
          className="flex flex-col space-y-3 gap-1 px-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <FormInput
            register={register("title")}
            errors={errors.title}
            label="Başlıq"
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
              disabled={!isDirty || isLoading}
              isLoading={isLoading}
              label="Yenilə"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogBanner;
