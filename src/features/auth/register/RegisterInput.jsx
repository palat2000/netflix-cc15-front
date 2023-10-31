export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className={`block w-full rounded-[3px] px-3 py-3 border border-neutral-500 outline-none
        focus:ring ${
          hasError
            ? "focus:ring focus:ring-black ring-offset-4"
            : "focus:ring-[2px]  focus:ring-black ring-offset-2"
        }
        `}
    />
  );
}
