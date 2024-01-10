import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { BiArrowBack } from "react-icons/bi";
import {
  RESET,
  createService,
  getService,
  updateService,
} from "../../../features/service/serviceSlice";
import { addValidation } from "../../../features/dataSlice";
import {
  Button,
  FormInput,
  FormTextarea,
  SelectWithSearch,
} from "../../../components/elements";

import {
  getSubCats,
  RESET as RESETSUBCATS,
} from "../../../features/subCategory/subCategorySlice";
import {
  getMainCats,
  RESET as RESETMAINCATS,
} from "../../../features/mainCategory/mainCategorySlice";
import { Meta } from "../../../components/layout";
let schema = yup.object().shape({
  name: yup.string().required(" "),
  category_id: yup.number().typeError(" ").required(" "),
  subcategory_id: yup.number().typeError(" ").required(" "),
  floor: yup.number().typeError(" ").required(" "),
});

const floorOptions = [
  {
    id: 1,
    name: "Bir",
  },
  {
    id: 2,
    name: "Iki",
  },
  {
    id: 3,
    name: "Üç",
  },
];

const Service = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [previewImage, setPreviewImage] = useState();
  const { isSuccess, isLoading, service } = useSelector(
    (state) => state.services
  );
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
  });

  useEffect(() => {
    trigger();
  }, [
    watch("name"),
    watch("description"),
    watch("floor"),
    watch("category_id"),
    watch("subcategory_id"),
  ]);

  useEffect(() => {
    dispatch(addValidation(false));
    dispatch(RESET());
    getDatasFromDB();
    resetDataAfterGet();
    resetForm();
    setPreviewImage();
    if (id !== undefined) {
      dispatch(getService(id));
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      dispatch(addValidation(false));
      navigate("/admin/services");
    }
    dispatch(RESET());
    setPreviewImage();
  }, [dispatch, isSuccess, navigate]);

  useEffect(() => {
    if (service && id !== "undefined") {
      resetForm(service);
    } else {
      resetForm();
    }
  }, [service]);

  const getDatasFromDB = () => {
    dispatch(getMainCats());
    dispatch(getSubCats());
  };

  const resetDataAfterGet = () => {
    dispatch(RESETMAINCATS());
    dispatch(RESETSUBCATS());
  };

  const onSubmit = handleSubmit((values) => {
    const formData = new FormData();

    if (previewImage) {
      formData.append("logo", values.logo);
    }
    formData.append("name", values.name);
    formData.append("floor", values.floor);
    formData.append("description", values.description);
    formData.append("category_id", values.category_id);
    formData.append("subcategory_id", values.subcategory_id);
    if (!previewImage && !service?.logo) {
      toast.warning("Logo məcburidir!");
    } else {
      if (id !== undefined) {
        dispatch(updateService({ id, data: formData }));
      } else {
        dispatch(createService(formData));
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

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setValue("logo", selectedImage);
    const preview = URL.createObjectURL(selectedImage);
    setPreviewImage(preview);
  };

  return (
    <>
      <Meta title="Servis" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Servis
          </h2>
          <Link
            to="/admin/services"
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
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
                <MdCloudUpload className="me-2 text-xl" /> Logo
              </label>
              {(previewImage || service?.logo) && (
                <div className="w-40 border rounded-lg  overflow-hidden dark:bg-gray-800 dark:border-gray-700 relative h-full">
                  <img
                    className="w-full max-h-40 object-contain rounded-lg"
                    src={previewImage ? previewImage : service?.logo}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
              <FormInput
                register={register("name")}
                errors={errors.name}
                value={watch("name")}
                label="Başlıq"
              />
              <SelectWithSearch
                label="Kateqoriya"
                errors={errors.category_id}
                trigger={trigger}
                options={maincats}
                register={register("category_id")}
                value={watch("category_id")}
                required={true}
              />
              <SelectWithSearch
                label="Alt kateqoriya"
                errors={errors.subcategory_id}
                trigger={trigger}
                options={subcats}
                register={register("subcategory_id")}
                value={watch("subcategory_id")}
                required={true}
              />
              <SelectWithSearch
                label="Mərtəbə"
                errors={errors.floor}
                trigger={trigger}
                options={floorOptions}
                register={register("floor")}
                value={watch("floor")}
                required={true}
              />
            </div>

            <FormTextarea
              register={register("description")}
              errors={errors.description}
              label="Açıqlama"
              value={watch("description")}
              name="description"
              rows={4}
              classInput="max-h-[300px]"
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

export default Service;
