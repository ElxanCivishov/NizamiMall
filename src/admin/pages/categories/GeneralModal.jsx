import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addValidation } from "../../../features/dataSlice";
import { Button, FormInput } from "../../../components/elements";

import { closeModal } from "../../../utils/closeModal";

let schema = yup.object().shape({
  name: yup.string().required(" "),
});

const GeneralModal = ({
  handleClose,
  data,
  handleCreate,
  handleUpdate,
  title,
}) => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    watch,
    register,
    reset,
    trigger,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: data?.name || "",
    },
  });

  useEffect(() => {
    trigger();
  }, [watch("name")]);

  useEffect(() => {
    closeModal(handleClose);
  }, [handleClose]);

  useEffect(() => {
    dispatch(addValidation(false));
  }, [dispatch]);

  const onSubmit = handleSubmit(async (values) => {
    if (data?.id) {
      handleUpdate({ id: data?.id, data: values });
    } else {
      reset();
      handleCreate(values);
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
      <div className="modal fixed top-0 left-0 right-0  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(255,255,255,0.4)]">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => handleClose()}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                {data ? "Yenilə" : "Yenisini yarat"}
              </h3>
              <form
                className="space-y-6"
                action=""
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <FormInput
                  register={register("name")}
                  errors={errors.name}
                  label={title}
                  required={true}
                  placeholder={title + "..."}
                />
                <div className="flex items-center justify-center">
                  <Button
                    onClick={() => handleClick()}
                    classBtn="border-0 w-40"
                    disabled={!isDirty}
                    type="submit"
                    label="Saxla"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralModal;
