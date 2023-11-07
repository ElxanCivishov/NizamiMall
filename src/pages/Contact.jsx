import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BreadCrumb, Meta } from "../components/layout";
import { Button, FormInput, FormTextarea } from "../components/elements";

import { addValidation } from "../features/dataSlice";
import { RESET, createContact } from "../features/contact/contactSlice";
import scrollToTop from "../helper/scrollToTop";

const initialValue = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
};

let schema = yup.object().shape({
  name: yup.string().required(" "),
  email: yup.string().email().required(" "),
  mobile: yup
    .string()
    .required(" ")
    .matches(/^\+994\s\d{9}$/, "Format: +994 xxxxxxxxx"),
  subject: yup.string().required(" ").max(100, "Max 100 simvol"),
  message: yup.string().required(" ").max(500, "Max 500 simvol"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.contacts
  );

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
  }, [
    watch("name"),
    watch("mobile"),
    watch("email"),
    watch("subject"),
    watch("message"),
  ]);

  useEffect(() => {
    dispatch(addValidation(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(addValidation(false));
    if (isError || isSuccess) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        dispatch(RESET());
        scrollToTop(5000);
      }, 5000);
    }
    if (isSuccess) {
      reset(initialValue);
    }
  }, [isSuccess, isError, dispatch]);

  const onSubmit = handleSubmit(async (values) => {
    dispatch(createContact(values));
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
      <Meta title="Bizimlə əlaqə" />
      <BreadCrumb title="Bizimlə əlaqə" />
      <section className="container p-4">
        <div className="bg-white p-5">
          <div className="w-100">
            <h3 className="text-xl text-zinc-600 font-semibold md:text-center px-4 mb-3">
              Müraciət göndər
            </h3>
            <p className="text-sm text-zinc-500 font-semibold md:text-center px-4 mb-5">
              Müraciətinizə qısa zaman ərzində baxılacaqdır. Lazım gəldiyi
              təqdirdə sizə geri dönüş edəcəyik. Müraciətiniz bizim üçün
              önəmlidir. Təşəkkürlər!
            </p>
            <form
              action=""
              className="flex flex-col space-y-3 gap-2 px-4"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-3">
                <FormInput
                  register={register("name")}
                  errors={errors.name}
                  label="Adınız"
                  placeholder="adınız..."
                />
                <FormInput
                  register={register("email")}
                  errors={errors.email}
                  label="Email adresiniz"
                  placeholder="email..."
                  type="email"
                />
                <FormInput
                  register={register("mobile")}
                  errors={errors.mobile}
                  label="Nömrəniz"
                  placeholder="nömrəniz..."
                  type="tel"
                />
                <FormInput
                  register={register("subject")}
                  errors={errors.subject}
                  placeholder="başlıq..."
                  label="Başlıq"
                />
              </div>
              <FormTextarea
                register={register("message")}
                errors={errors.message}
                label="Mesajınız?"
                placeholder="mesajınız..."
                value={watch("message")}
                rows={5}
              />

              {isError && message && showMessage && (
                <div className="w-full text-center px-3 py-2 rounded-lg font-semibold my-3 text-sm border border-red-500 text-red-500">
                  {message}
                </div>
              )}

              {isSuccess && message && showMessage && (
                <div className="w-full text-center px-3 py-2 rounded-lg font-semibold my-3 text-sm border border-emerald-500 text-emerald-500">
                  {message}
                </div>
              )}

              <div className="flex items-center justify-center">
                <Button
                  onClick={() => handleClick()}
                  classBtn="border-0 w-40"
                  disabled={!isDirty || isLoading}
                  type="submit"
                  isLoading={isLoading}
                  label="Göndər"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
