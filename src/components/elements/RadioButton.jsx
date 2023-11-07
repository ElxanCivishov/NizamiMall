import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function RadioButton({
  label,
  options,
  register,
  value,
  defaultValue,
  disabled = false,
  description,
  onChange,
  errors,
  classRadio,
  trigger,
}) {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  useEffect(() => {
    if (defaultValue) {
      setSelected(defaultValue);
    }
  }, [defaultValue]);

  const handleErrors = async () => {
    if (trigger) trigger();
  };

  return (
    <div className="w-full max-w-md select-none">
      <RadioGroup
        value={selected || null}
        onChange={(value) => {
          setSelected(value);
          handleErrors();
          register &&
            register.onChange(
              {
                target: {
                  name: register.name,
                  value: value,
                },
              },
              onChange
            );
        }}
        disabled={disabled}
      >
        {label && <RadioGroup.Label>{label}</RadioGroup.Label>}
        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          {options.map((option, idx) => (
            <RadioGroup.Option
              key={idx}
              value={option}
              className={({ active, checked }) =>
                `
                  ${
                    checked
                      ? "bg-colorBlack bg-opacity-90 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-3 py-2 md:px-5 md:py-3 shadow-md focus:outline-none`
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium  ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {option}
                        </RadioGroup.Label>
                        {description && (
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>{description}</span>
                          </RadioGroup.Description>
                        )}
                      </div>
                    </div>
                    {checked && (
                      <div className="shrink-0 text-white ms-2">
                        <CheckIcon className="h-4 w-4 md:h-5 md:w-5" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#131921"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
