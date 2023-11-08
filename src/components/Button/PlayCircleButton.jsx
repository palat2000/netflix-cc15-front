import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayCircleButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}  hover:bg-opacity-90`}>
      <FontAwesomeIcon
        icon={faCirclePlay}
        className="text-neutral-300 bg-zinc-900 bg-opacity-80 border border-neutral-400 rounded-full  hover:text-neutral-300 hover:border-neutral-300 hover:bg-neutral-60 p-2 scale-100 duration-100   "
      />
    </div>
  );
}
