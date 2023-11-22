import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BiArrowBack } from "react-icons/bi";
import {
  RESET,
  createBlog,
  getBlog,
  updateBlog,
} from "../../../features/blogs/blogSlice";
import { addValidation } from "../../../features/dataSlice";
import {
  Button,
  FormInput,
  ReactQuillInput,
  SelectWithSearch,
} from "../../../components/elements";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";

let schema = yup.object().shape({
  name: yup.string().required(" "),
  category_id: yup.number().typeError(" ").required(" "),
  subcategory_id: yup.number().typeError(" ").required(" "),
  description: yup.string().required(" "),
});

const initialValue = {
  name: "",
  description: "",
  category_id: null,
  subcategory_id: null,
  logo: "",
  image: "",
};

const Service = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState();
  const [previewBanner, setPreviewBanner] = useState();
  const { isSuccess, isLoading, blog } = useSelector((state) => state.blogs);
  const { maincats } = useSelector((state) => state.mainCats);
  const { subcats } = useSelector((state) => state.subCats);

  const {
    handleSubmit,
    trigger,
    watch,
    setValue,
    register,
    reset: resetForm,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  useEffect(() => {
    trigger();
  }, [watch("title"), watch("content")]);

  useEffect(() => {
    dispatch(addValidation(false));
    dispatch(RESET());
    resetForm(initialValue);
    if (id !== undefined) {
      dispatch(getBlog(id));
    } else {
      resetForm(initialValue);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      resetForm(initialValue);
      dispatch(addValidation(false));
      navigate(-1);
    }
    dispatch(RESET());
  }, [dispatch, isSuccess, navigate]);

  useEffect(() => {
    if (blog && id !== "undefined") {
      resetForm(blog);
    } else {
      resetForm(initialValue);
    }
  }, [blog]);

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();

    if (previewImage) {
      formData.append("logo", values.logo);
    }
    if (previewBanner) {
      formData.append("image", values.image);
    }
    formData.append("title", values.title);
    formData.append("content", values.content);
    if (!previewImage && !blog?.image) {
      toast.warning("Şəkil yükləyin!");
    } else {
      if (id !== undefined) {
        dispatch(updateBlog({ id, data: formData }));
      } else {
        dispatch(createBlog(formData));
      }
    }
  });

  const handleClick = () => {
    if (Object.keys(errors).length > 0) {
      dispatch(addValidation(true));
    } else {
      dispatch(addValidation(false));
    }
  };

  const handleImageChange = useCallback(
    (e, field) => {
      const selectedImage = e.target.files[0];
      setValue(field, selectedImage);
      const preview = URL.createObjectURL(selectedImage);
      if (field === "logo") {
        setPreviewImage(preview);
      } else {
        setPreviewBanner(preview);
      }
    },
    [setValue, setPreviewImage]
  );

  console.log(watch());
  console.log(blog);

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Xəbər
        </h2>
        <Link
          to="/admin/services"
          className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
        >
          <BiArrowBack className="me-2" /> Geri
        </Link>
      </header>

      <div className="px-3 mb-3 my-5">
        <form
          action=""
          className="flex flex-col gap-4 mb-5"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className=" p-2 rounded-md flex items-center gap-3">
            <input
              className="hidden"
              id="photo"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "logo")}
            />
            <label
              htmlFor="photo"
              className="flex items-center  mb-2 text-base  cursor-pointer font-medium text-gray-900 dark:text-white"
            >
              <MdCloudUpload className="me-2 text-xl" /> Logo
            </label>
            {(previewImage || blog?.logo) && (
              <div className="w-40 border rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 relative h-full">
                <img
                  className="w-full max-h-40 object-contain rounded-lg"
                  src={previewImage ? previewImage : blog?.logo}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
            <FormInput
              register={register("title")}
              errors={errors.title}
              value={watch("title")}
              label="Başlıq"
              type="text"
            />
            <SelectWithSearch
              label="Kateqoriya"
              errors={errors.category_id}
              trigger={trigger}
              options={[]}
              register={register("category_id")}
              value={watch("category_id")}
              required={true}
            />
            <SelectWithSearch
              label="Alt kateqoriya"
              errors={errors.subcategory_id}
              trigger={trigger}
              options={[]}
              register={register("subcategory_id")}
              value={watch("subcategory_id")}
              required={true}
            />
          </div>

          <ReactQuillInput
            register={register("content")}
            errors={errors.content}
            label="Content"
            value={watch("content")}
            name="content"
          />

          <div className=" p-2 rounded-md flex items-center gap-3">
            <input
              className="hidden"
              id="banner"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "image")}
            />
            <label
              htmlFor="banner"
              className="flex items-center  mb-2 text-base  cursor-pointer font-medium text-gray-900 dark:text-white"
            >
              <MdCloudUpload className="me-2 text-xl" /> Banner
            </label>
            {(previewBanner || blog?.image) && (
              <div className="w-40 border rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 relative h-full">
                <img
                  className="w-full max-h-40 object-contain rounded-lg"
                  src={previewBanner ? previewBanner : blog?.image}
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mb-5">
            <Button
              onClick={() => handleClick()}
              classBtn="border-0 w-24 !rounded-full "
              type="submit"
              disabled={previewImage ? false : !isDirty || isLoading}
              isLoading={isLoading}
              label="Saxla"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Service;
