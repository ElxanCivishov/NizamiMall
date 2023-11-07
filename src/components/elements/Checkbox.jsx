import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useSelector } from "react-redux";

export default function Checkbox({
  label,
  register,
  value = false,
  defaultValue,
  disabled = false,
  classCheckBox,
  onChange,
  errors,
  trigger,
}) {
  const [enabled, setEnabled] = useState(value);

  const selectValid = useSelector((state) => state.data.validation);

  const handleErrors = async () => {
    if (trigger) trigger();
  };

  useEffect(() => {
    setEnabled(value);

    handleErrors();
  }, [value]);

  return (
    <Switch.Group>
      <div className={`flex items-center w-full${classCheckBox}`}>
        <Switch.Label className="mr-4 text-xs md:text-sm">{label}</Switch.Label>
        <Switch
          checked={enabled}
          value={value}
          onBlur={handleErrors}
          onChange={(value) => {
            handleErrors();
            setEnabled(!enabled);
            register &&
              register.onChange({
                target: {
                  name: register.name,
                  value,
                },
              });
          }}
          className={`${
            value ? "bg-emerald-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              value ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        {errors && selectValid && (
          <span className="text-xs text-red-500">{errors.message}</span>
        )}
      </div>
    </Switch.Group>
  );
}
