import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect } from "react";
import { addValidation } from "../../../../features/dataSlice";
import { RESET, login } from "../../../../features/auth/authSlice";
import { Meta } from "../../../../components/layout";
import { Button, FormInput } from "../../../../components/elements";

let schema = yup.object().shape({
  email: yup.string().email("Düzgün email daxil edin").required(" "),
  password: yup.string().required(" ").min(6, "Min 6 simvol olmalıdır!"),
});

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, user, isSuccess } = useSelector(
    (state) => state.auth
  );

  const {
    handleSubmit,
    watch,
    register,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    trigger();
  }, [watch("email"), watch("password")]);

  useEffect(() => {
    dispatch(addValidation(false));
    if (user && isLoggedIn) {
      navigate("/admin");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, user, dispatch]);

  const onSubmit = handleSubmit((values) => {
    dispatch(login(values));
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
      <Meta title="Daxil ol" />
      <section className="container flex items-center justify-center h-screen p-4">
        <div className="w-full max-w-lg min-w-80 mx-auto rounded-lg bg-white p-6">
          <h3 className="text-base md:text-xl text-center text-zinc-600 font-semibold px-4 mb-3">
            Daxil ol
          </h3>

          <form
            action=""
            className="flex flex-col space-y-3 gap-2 px-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <FormInput
              register={register("email")}
              errors={errors.email}
              label="Email adresiniz"
              placeholder="email..."
              type="email"
            />
            <FormInput
              type="password"
              register={register("password")}
              errors={errors.password}
              label="Parolunuz"
              placeholder="parol..."
            />

            <div className="flex items-center justify-center">
              <Button
                onClick={() => handleClick()}
                classBtn="border-0 w-32 "
                type="submit"
                isLoading={isLoading}
                label="daxil ol"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
