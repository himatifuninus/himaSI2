import { useController } from "react-hook-form";

const Input = ({ variant = "lg", ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return (
    <section className="flex flex-col gap-y-1">
      <label htmlFor={props.name} className="text-base text-start">
        {props.label}
        {props.required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...{ ...props, ...field }}
        className={`${
          error
            ? "focus:ring-1 focus:ring-red-500 bg-red-50 ring-1 ring-red-500"
            : "focus:ring-1 focus:ring-blue-500 bg-blue-50 ring-1 ring-blue-400"
        } outline-none focus:outline-none p-3 rounded-lg `}
      />
      {error && <span className="text-red-600">{error.message}</span>}
    </section>
  );
};

export default Input;
