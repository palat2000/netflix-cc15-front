export default function HomePageInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      className=" h-full rounded-md  border-2 bg-transparent px-3"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
