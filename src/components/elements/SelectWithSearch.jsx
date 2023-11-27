import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { PiCaretUpDownFill } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function SelectWithSearch({
  label,
  options,
  value,
  placeholder = "seçin...",
  defaultValue,
  register,
  trigger,
  required,
  errors,
  searchKeys = ["name"],
  mainKey = "name",
  classSelect,
  disabled = false,
  onChange,
}) {
  const validData = useSelector((state) => state.data.validation);
  const [selected, setSelected] = useState(
    options.find((option) => option.id === value)
  );

  const [q, setQ] = useState("");

  // serach by searchKeys = ["title"], and etc...
  function search(params) {
    return params?.filter((item) =>
      searchKeys.some((key) => item[key]?.toLowerCase()?.includes(q))
    );
  }

  useEffect(() => {
    if (value === undefined) {
      setSelected(null);
    } else {
      setSelected(options.find((option) => option.id === value));
    }
    handleTrigger();
  }, [value]);

  const handleTrigger = () => {
    if (trigger) trigger();
  };

  const handlechange = (e) => {
    setQ(e.target.value);
  };

  const handleClick = () => {
    setQ("");
  };

  return (
    <div className={`w-full ${classSelect}`}>
      <Listbox
        value={selected || null}
        onChange={(value) => {
          setSelected(value);
          handleTrigger();
          register &&
            register.onChange(
              {
                target: {
                  name: register.name,
                  value: value?.id,
                },
              },
              onChange
            );
        }}
        disabled={disabled}
        as="div"
        className="flex flex-col w-full"
      >
        <Listbox.Label className="text-xs md:text-sm">
          {label}
          {required && <span className="text-red-500">*</span>}
        </Listbox.Label>

        <div className="relative">
          <Listbox.Button
            className={`${
              errors && validData && "border-3 border-red-300"
            } relative w-full cursor-default rounded-lg bg-white py-2.5 pl-3 pr-10 text-left shadow-md focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-sm md:text-base`}
          >
            {({ value }) => (
              <>
                <span className="block truncate text-xs md:text-sm">
                  {value ? value?.[mainKey] : placeholder}
                </span>
                {value && (
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <PiCaretUpDownFill
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                )}
              </>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                  e.target.value += " ";
                }
              }}
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-[14px] md:text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10"
            >
              {options?.length > 5 && (
                <div className="flex items-center pl-2">
                  <FaSearch
                    style={{ color: "#7D7D7D" }}
                    className="text-xs md:text-sm"
                  />
                  <input
                    className="w-full relative focus:outline-none rounded-lg border-none text-xs md:text-sm px-3 py-2 "
                    onChange={handlechange}
                    placeholder="Axtar..."
                  />
                </div>
              )}

              {search(options)?.length === 0 || !options ? (
                <div className="relative cursor-default select-none py-2 pl-10 pr-4 text-xs md:text-sm text-gray-700">
                  Heçbirşey tapılmadı.
                </div>
              ) : (
                search(options)?.map((item, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none text-xs md:text-sm py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={item}
                    onClick={handleClick}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item?.[mainKey]}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-600">
                            <FaCircleCheck
                              className="w-4 h-4 "
                              aria-hidden="true"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {errors && validData && (
        <span className="text-xs text-red-500">{errors.message}</span>
      )}
    </div>
  );
}
