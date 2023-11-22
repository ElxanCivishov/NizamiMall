import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RESET, changePassword } from "../../../features/auth/authSlice";
import { addValidation } from "../../../features/dataSlice";
import { Button, FormInput } from "../../../components/elements";
import { Meta } from "../../../components/layout";

let schema = yup.object().shape({
  oldPassword: yup.string().required(" ").min(6, "Min 6 simvol olmalıdır!"),
  password: yup.string().required(" ").min(6, "Min 6 simvol olmalıdır!"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifrələr üst-üstə düşməlidir")
    .required(" "),
});

const initialValue = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError } = useSelector((state) => state.auth);

  const {
    handleSubmit,
    watch,
    register,
    reset,
    trigger,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  useEffect(() => {
    trigger();
  }, [watch("oldPassword"), watch("password"), watch("password2")]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
    dispatch(RESET());
    reset(initialValue);
  }, [isSuccess, isError, dispatch, navigate]);

  const onSubmit = handleSubmit((values) => {
    dispatch(changePassword(values));
  });

  const handleClick = () => {
    if (Object.keys(errors).length > 0) {
      dispatch(addValidation(true));
    } else {
      dispatch(addValidation(false));
    }
  };

  return (
    <div>
      <Meta title="Şifrə yeniləmə" />
      <section className=" p-4">
        <div className="p-4 md:max-w-md bg-white rounded-lg my-5 w-full">
          <form
            action=""
            className="flex flex-col space-y-3 gap-2"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h3 className="text-sm md:text-base text-center text-zinc-600 font-semibold px-4 mb-3">
              Şifrə dəyişdirmə
            </h3>
            <hr className="my-2" />
            <div className="grid gap-3">
              <FormInput
                register={register("oldPassword")}
                errors={errors.oldPassword}
                label="Cari şifrə"
                placeholder="şifrə..."
                type="password"
              />
              <FormInput
                register={register("password")}
                errors={errors.password}
                label="Yeni şifrə"
                type="password"
                placeholder="şifrə..."
              />
              <FormInput
                onPaste={(e) => e.preventDefault()}
                register={register("password2")}
                errors={errors.password2}
                label="Şifrə təkrar"
                placeholder="şifrə..."
                type="password"
              />
            </div>
            <div className="flex items-center justify-center">
              <Button
                onClick={() => handleClick()}
                classBtn="border-0 w-40 !rounded-full"
                disabled={!isDirty || isLoading}
                type="submit"
                isLoading={isLoading}
                label="Yenilə"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ChangePassword;
