import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { BiArrowBack } from "react-icons/bi";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { addValidation } from "../../../features/dataSlice";
import { Button, FormTextarea } from "../../../components/elements";
import {
  RESET,
  createSlider,
  getSlider,
  updateSlider,
} from "../../../features/home/slider/sliderSlice";
import { Meta } from "../../../components/layout";

const initialValue = {
  title: null,
  image: "",
};

const Slider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState();
  const { isSuccess, isLoading, slider } = useSelector(
    (state) => state.homeSlider
  );

  const {
    handleSubmit,
    trigger,
    watch,
    setValue,
    register,
    reset: resetForm,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: initialValue,
  });

  useEffect(() => {
    trigger();
  }, [watch("title")]);

  useEffect(() => {
    dispatch(addValidation(false));
    dispatch(RESET());
    resetForm(initialValue);
    if (id !== undefined) {
      dispatch(getSlider(id));
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
    if (slider && id !== "undefined") {
      resetForm(slider);
    } else {
      resetForm(initialValue);
    }
  }, [slider]);

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();

    if (previewImage) {
      formData.append("image", values.image);
    }
    formData.append("title", values.title);
    if (!previewImage && !slider?.image) {
      toast.warning("Şəkil yükləyin!");
    } else {
      if (id !== undefined) {
        dispatch(updateSlider({ id, data: formData }));
      } else {
        dispatch(createSlider(formData));
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
    (e) => {
      const selectedImage = e.target.files[0];
      setValue("image", selectedImage);
      const preview = URL.createObjectURL(selectedImage);
      setPreviewImage(preview);
    },
    [setValue, setPreviewImage]
  );

  return (
    <>
      <Meta title="Slider" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Slider
          </h2>
          <Link
            to="/admin/home/sliders"
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50  font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
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
                onChange={(e) => handleImageChange(e)}
              />
              <label
                htmlFor="photo"
                className="flex items-center  mb-2 text-base  cursor-pointer font-medium text-gray-900 dark:text-white"
              >
                <MdCloudUpload className="me-2 text-xl" /> Şəkil
              </label>
              {(previewImage || slider?.image) && (
                <div className="w-40 border rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 relative h-full">
                  <img
                    className="w-full max-h-40 object-contain rounded-lg"
                    src={previewImage ? previewImage : slider?.image}
                    alt=""
                  />
                </div>
              )}
            </div>

            <FormTextarea
              register={register("title")}
              label="Content"
              value={watch("title")}
              name="title"
              rows={4}
              classInput="max-h-[200px]"
            />

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
    </>
  );
};

export default Slider;
