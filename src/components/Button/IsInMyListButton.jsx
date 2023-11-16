import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function IsInMyListButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}`}>
      <FontAwesomeIcon
        icon={faCheck}
        className="cursor-pointer text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60  p-2 scale-100 duration-100"
      />
    </div>
  );
}
