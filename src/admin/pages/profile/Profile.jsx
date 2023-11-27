import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addValidation } from "../../../features/dataSlice";
import { RESET, updateUser } from "../../../features/auth/authSlice";

import { Button, FormInput } from "../../../components/elements";
import { Meta } from "../../../components/layout";

let schema = yup.object().shape({
  name: yup.string().required(" "),
  email: yup
    .string()
    .email("Düzgün email daxil edin.")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Düzgün email daxil edin."
    )
    .required(" "),
});

const Profile = () => {
  const dispatch = useDispatch();

  const { isLoading, user, isSuccess, isError } = useSelector(
    (state) => state.auth
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
    defaultValues: user,
  });

  useEffect(() => {
    trigger();
  }, [watch("name"), watch("email")]);

  useEffect(() => {
    dispatch(addValidation(false));

    if (user || isSuccess) {
      reset(user);
    }
    dispatch(RESET());
  }, [isSuccess, isError, user, dispatch]);

  const onSubmit = handleSubmit((values) => {
    dispatch(updateUser(values));
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
      <Meta title="Profil" />
      <div className="w-full md:max-w-md    rounded-lg bg-white p-2">
        <h3 className="text-sm md:text-base text-center text-zinc-600 font-semibold px-4 mb-3">
          Giriş məlumatları
        </h3>
        <hr className="my-2" />

        <form
          action=""
          className="flex flex-col space-y-3 gap-1 px-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <FormInput
            register={register("name")}
            errors={errors.name}
            label="İstifadəçi adı"
            placeholder="ad..."
          />

          <FormInput
            register={register("email")}
            errors={errors.email}
            label="Email adresiniz"
            placeholder="email..."
            type="email"
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

export default Profile;
