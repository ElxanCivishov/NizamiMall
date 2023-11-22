import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { RESET, forgotPassword } from "../../../features/auth/authSlice";
import { addValidation } from "../../../features/dataSlice";

import { Button, FormInput, LinkBtn } from "../../../components/elements";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
});

const ForgotForm = () => {
  const dispatch = useDispatch();

  const { isSuccess, isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    dispatch(RESET());
    dispatch(addValidation(false));
  }, [dispatch, isSuccess]);

  useEffect(() => {
    trigger();
  }, [watch("email")]);

  const onSubmit = handleSubmit((values) => {
    dispatch(forgotPassword(values));
    reset();
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
      <form
        className="mt-8 space-y-6 w-full"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormInput
          register={register("email")}
          errors={errors.email}
          label="Your email"
          type="email"
          placeholder="admin@admin.com"
        />
        <div className="flex items-start">
          <LinkBtn
            path="/login"
            label="login"
            classBtn="ml-auto text-sm font-medium text-yellow-500  dark:text-yellow-500"
          />
        </div>
        <Button
          onClick={() => handleClick()}
          classBtn={`hover:bg-yellow-600 bg-yellow-400 focus:ring-4 focus:ring-yellow-300 sm:w-auto dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 ${
            isLoading
              ? "text-gray-600  bg-gray-300 cursor-not-allowed"
              : "text-white  bg-yellow-500"
          }`}
          type="submit"
          isLoading={isLoading}
          label=" Send reset link"
        />
      </form>
    </>
  );
};

export default ForgotForm;
