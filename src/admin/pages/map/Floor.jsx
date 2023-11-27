import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import {
  RESET,
  createMap,
  getMap,
  updateMap,
} from "../../../features/map/mapSlice";
import { addValidation } from "../../../features/dataSlice";
import {
  Button,
  FormInput,
  SelectWithSearch,
} from "../../../components/elements";

import { Meta } from "../../../components/layout";

import {
  getServices,
  RESET as RESETSERVICES,
} from "../../../features/service/serviceSlice";
import { Loader } from "../../../components";

let schema = yup.object().shape({
  uid: yup.number().typeError(" ").required(" "),
});

const initialValue = {
  floor: 3,
};

const Floor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { isSuccess, isLoading, map } = useSelector((state) => state.maps);
  const { services } = useSelector((state) => state.services);

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
    dispatch(addValidation(false));
    dispatch(RESET());
    dispatch(getServices());
    dispatch(RESETSERVICES());
    resetForm(initialValue);
    if (id !== undefined) {
      dispatch(getMap(id));
    } else {
      resetForm(initialValue);
    }
  }, [id]);

  useEffect(() => {
    if (isSuccess) {
      resetForm(initialValue);
      dispatch(addValidation(false));
      navigate(-1);
    }
    dispatch(RESET());
  }, [dispatch, isSuccess, navigate]);

  useEffect(() => {
    if (map && id !== "undefined") {
      resetForm(map);
    } else {
      resetForm(initialValue);
    }
  }, [map]);

  const onSubmit = handleSubmit((values) => {
    if (id !== undefined) {
      dispatch(updateMap({ id, data: values }));
    } else {
      dispatch(createMap(values));
    }
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
      <Meta title="Map" />
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg ">
        <header className="px-5 py-2  flex justify-between items-center gap-2">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Xəritə
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-emerald-500  shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 flex max-w-max items-center"
          >
            <BiArrowBack className="me-2" /> Geri
          </button>
        </header>
        <p className="font-semibold text-slate-400 text-xs py-2 px-5 dark:text-slate-100">
          X,Y kordinantlarından istifadə etməklə xəritədə servis adını hərəkət
          etdirə bilərsiz. Tövsiyyə edilən aralıq (-20 ; 20)
        </p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="px-3 mb-3 my-5">
            <form
              action=""
              className="flex flex-col gap-6 mb-5"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex items-center gap-4 w-full md:w-72">
                <SelectWithSearch
                  label="Servis"
                  trigger={trigger}
                  options={services}
                  register={register("company_id")}
                  value={watch("company_id")}
                  required={true}
                />
                <AiFillCloseCircle
                  onClick={() => setValue("company_id", null)}
                  className=" text-2xl text-red-500 mt-6 cursor-pointer"
                />
              </div>

              <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
                <FormInput
                  register={register("x1")}
                  value={watch("x1")}
                  label="x1"
                  type="number"
                />
                <FormInput
                  register={register("x2")}
                  value={watch("x2")}
                  label="x2"
                  type="number"
                />
                <FormInput
                  register={register("y1")}
                  value={watch("y1")}
                  label="y1"
                  type="number"
                />
                <FormInput
                  register={register("y2")}
                  value={watch("y2")}
                  label="y2"
                  type="number"
                />
              </div>
              <div className="flex items-center justify-center mb-5">
                <Button
                  onClick={() => handleClick()}
                  classBtn="border-0 w-24 !rounded-full "
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                  label="Yenilə"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Floor;
