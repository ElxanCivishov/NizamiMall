import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { PiCaretUpDownFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";

import { closeDropdown } from "../../utils/closeDropdown";

export default function SelectMult({
  label,
  options,
  register,
  value,
  placeholder = "seçin...",
  mainKey = "title",
  disabled = false,
  onChange,
  errors,
  required,
  trigger,
}) {
  const validData = useSelector((state) => state.data.validation);

  const [selected, setSelected] = useState(value || []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const removeClickListener = closeDropdown({
      handleClose: handleCloseClickOutside,
    });

    return () => {
      removeClickListener();
    };
  }, []);

  useEffect(() => {
    setSelected(value || []);
  }, [value]);

  const handleCloseClickOutside = () => {
    setIsOpen(false);
  };

  const handleErrors = async () => {
    if (trigger) trigger();
  };

  const RegisterValue = (values) => {
    handleErrors();
    register &&
      register.onChange(
        {
          target: {
            name: register.name,
            value: values,
          },
        },
        onChange
      );
  };

  const isSelected = (value) => {
    return selected?.includes(value) || false;
  };

  const handleSelect = (value) => {
    if (!isSelected(value)) {
      const selectedValuesUpdated = [...selected, value];
      setSelected(selectedValuesUpdated);
      RegisterValue(selectedValuesUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  };

  const handleDeselect = (value) => {
    const selectedValuesUpdated = selected.filter((el) => el !== value);
    setSelected(selectedValuesUpdated);
    RegisterValue(selectedValuesUpdated);
    setIsOpen(true);
  };

  return (
    <div className="w-full max-w-[600px]">
      <Listbox
        as="div"
        value={selected || []}
        className="dropdown flex flex-col  w-full"
        onChange={(value) => handleSelect(value)}
        disabled={disabled}
        open={isOpen}
      >
        {label && (
          <Listbox.Label className="text-xs md:text-sm">
            {label}
            {required && <span className="text-red-500">*</span>}
          </Listbox.Label>
        )}
        <div className="relative">
          <Listbox.Button
            className={`${
              errors && validData && "border-3 border-red-300"
            } relative w-full cursor-default rounded-lg bg-white py-2.5 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm md:text-base`}
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
          >
            <span className="block truncate">
              {selected?.length < 1 ? (
                <span className="text-gray-400">{placeholder}</span>
              ) : (
                `Seçilmiş ${label ? label.toLowerCase() : " "} ${
                  selected?.length
                }`
              )}
            </span>
            {value?.length > 0 && (
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <PiCaretUpDownFill
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            )}
          </Listbox.Button>
          <Transition
            show={isOpen}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
            >
              {options?.length === 0 || !options ? (
                <div className="relative cursor-default select-none py-2 pl-10 pr-4 text-xs md:text-sm text-gray-700">
                  Heçbirşey tapılmadı.
                </div>
              ) : (
                options?.map((item, idx) => {
                  const selected = isSelected(item?.[mainKey]);
                  return (
                    <Listbox.Option
                      key={idx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 text-[14px] md:text-base hover:bg-amber-200 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={item?.[mainKey] || item}
                    >
                      {() => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {item?.[mainKey] || item}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600">
                              <FaCircleCheck
                                className="w-4 h-4 "
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  );
                })
              )}
            </Listbox.Options>
          </Transition>
        </div>
        {errors && validData && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </Listbox>
    </div>
  );
}
