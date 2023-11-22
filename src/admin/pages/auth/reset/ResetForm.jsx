import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { RESET, resetPassword } from "../../../features/auth/authSlice";

import { addValidation } from "../../../features/dataSlice";

import { Button, FormInput, LinkBtn } from "../../../components/elements";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter new password.")
    .min(6, "Password must be at least 6 chars."),
  password2: yup
    .string()
    .required("Confirm password!")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ResetForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();
  const { isSuccess, isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      // navigate("/login");
    }
    dispatch(addValidation(false));
    dispatch(RESET());
  }, [isSuccess, navigate, dispatch]);

  useEffect(() => {
    trigger();
  }, [watch("password"), watch("password2")]);

  const onSubmit = handleSubmit((values) => {
    dispatch(resetPassword({ values, token }));
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
        className="mt-8 space-y-6"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormInput
          label="Your password"
          placeholder="write..."
          register={register("password")}
          errors={errors.password}
        />

        <FormInput
          label="Password confirm"
          placeholder="confirm password"
          register={register("password2")}
          errors={errors.password2}
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
          label="Reset password"
        />
      </form>
    </>
  );
};

export default ResetForm;
