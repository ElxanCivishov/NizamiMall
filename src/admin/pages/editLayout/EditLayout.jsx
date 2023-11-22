import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { MdCloudUpload } from "react-icons/md";
import {
  RESET,
  getLayout,
  updateLayout,
} from "../../../features/layout/layoutSlice";
import { Button, FormInput } from "../../../components/elements";

const EditLayout = () => {
  const dispatch = useDispatch();

  const { isSuccess, isError, message, layout, isLoading } = useSelector(
    (state) => state.layout
  );

  const [previewLogo, setPreviewLogo] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { isDirty },
  } = useForm({});

  useEffect(() => {
    dispatch(getLayout());
  }, [dispatch]);

  useEffect(() => {
    if (layout) {
      reset(layout);
    }
  }, [layout]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getLayout());
      dispatch(RESET());
      setPreviewLogo();
    }
  }, [isSuccess, dispatch]);

  const onSubmit = handleSubmit(async (values) => {
    const formData = new FormData();

    if (previewLogo) {
      formData.append("logo", values.logo);
    }
    formData.append("title", values.title);
    formData.append("email", values.email);
    formData.append("number_1", values.number_1);
    formData.append("number_2", values.number_2);
    formData.append("address", values.address);
    formData.append("address_url", values.address_url);
    formData.append("facebook", values.facebook);
    formData.append("instagram", values.instagram);

    dispatch(updateLayout({ data: formData }));
  });

  const handleImageChange = useCallback(
    (e) => {
      const selectedImage = e.target.files[0];
      setValue("logo", selectedImage);
      const preview = URL.createObjectURL(selectedImage);
      setPreviewLogo(preview);
    },
    [setValue, setPreviewLogo]
  );

  return (
    <div className="px-3 mb-3 mt-5">
      <form
        className="flex flex-col space-y-3 p-5 bg-white dark:bg-slate-800 shadow-lg rounded-lg w-full "
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <p className="font-semibold text-[14px] md:text-base text-center">
          Layout
        </p>

        <div className=" p-2 rounded-md flex items-center gap-3">
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
            <MdCloudUpload className="me-2 text-xl" /> Logo
          </label>
          <div className="w-10 border rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 relative h-full">
            <img
              className="w-full max-h-10 object-contain rounded-lg"
              src={previewLogo ? previewLogo : layout?.logo}
              alt="logo"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3  md:gap-10">
          <FormInput register={register("title")} label="Başlıq" type="text" />
          <FormInput register={register("email")} label="Email:" />
        </div>
        <div className="grid md:grid-cols-2 gap-3  md:gap-10">
          <FormInput register={register("number_1")} label="Tel1:" />
          <FormInput register={register("number_2")} label="Tel2:" />
        </div>
        <hr className="my-3 border-slate-100" />
        <div className="grid md:grid-cols-2 gap-3  md:gap-10">
          <FormInput register={register("address")} label="Ünvan:" />
          <FormInput
            register={register("address_url")}
            label="Ünvan url:"
            placeholder="Google map..."
          />
        </div>
        <hr className="my-3 border-slate-100" />
        <div className="grid md:grid-cols-2 gap-3  md:gap-10">
          <FormInput register={register("facebook")} label="Facebook url:" />
          <FormInput register={register("instagram")} label="Instagram url:" />
        </div>
        <div className="flex items-center justify-center ">
          <Button
            classBtn="border-0 w-40"
            disabled={previewLogo ? false : !isDirty || isLoading}
            type="submit"
            isLoading={isLoading}
            label="Yenilə"
          />
        </div>
      </form>
    </div>
  );
};

export default EditLayout;
