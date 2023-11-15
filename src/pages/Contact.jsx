import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Meta } from "../components/layout";
import { Button, FormInput } from "../components/elements";

import { addValidation } from "../features/dataSlice";
import { RESET, createContact } from "../features/contact/contactSlice";

import contactImg from "/images/contact.png";

const initialValue = {
  name: "",
  surname: "",
  mobile: "",
  subject: "",
};

let schema = yup.object().shape({
  name: yup.string().required(" "),
  surname: yup.string().required(" "),
  mobile: yup
    .string()
    .required(" ")
    .matches(/^\+994\s\d{9}$/, "Format: +994 xxxxxxxxx"),
  subject: yup.string().required(" ").max(200, "Max 200 simvol"),
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
  }, [watch("name"), watch("surname"), watch("mobile"), watch("subject")]);

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
      <Meta title="İcarə üçün müraciət" />
      <section className="container p-4 my-5 ">
        <div className="w-full  mx-auto bg-white p-5 rounded-lg">
          <h3 className="text-xl text-zinc-600 font-semibold md:text-center px-4 mb-3">
            İcarə Üçün Müraciət
          </h3>
          <div className="flex items-center justify-center">
            <img src={contactImg} alt="rent" className="h-[200px]" />
          </div>
          <p className="text-sm text-zinc-500 font-semibold md:text-center tracking-wide px-4 mb-5">
            Müraciətinizə qısa zaman ərzində baxılacaqdır. Sizə geri dönüş
            edəcəyik. Müraciətiniz bizim üçün önəmlidir. Təşəkkürlər!
          </p>
          <form
            action=""
            className="flex flex-col space-y-3 gap-2 md:gap-8 px-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="grid md:grid-cols-2 gap-4">
              <FormInput
                register={register("name")}
                errors={errors.name}
                label="Adınız"
                required={true}
                placeholder="Adınız..."
              />
              <FormInput
                register={register("surname")}
                errors={errors.surname}
                label="Soyadınız"
                required={true}
                placeholder="Soyadınız..."
              />

              <FormInput
                register={register("mobile")}
                errors={errors.mobile}
                label="Nömrəniz"
                required={true}
                placeholder="Nömrəniz..."
                type="tel"
              />
              <FormInput
                register={register("subject")}
                errors={errors.subject}
                required={true}
                placeholder="Xidmət və ya məhsulun növü..."
                label="Xidmət və ya məhsulun növü"
              />
            </div>

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
      </section>
    </div>
  );
};

export default Contact;
