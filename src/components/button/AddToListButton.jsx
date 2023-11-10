import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddToListButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}`}>
      <FontAwesomeIcon
        icon={faPlus}
        className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-2 scale-100 duration-100"
      />
    </div>
  );
}
