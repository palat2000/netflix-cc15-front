import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayCircleButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}  hover:bg-opacity-90`}>
      <FontAwesomeIcon
        icon={faCirclePlay}
        className=" text-neutral-300 bg-neutral-700 bg-opacity-80 border border-neutral-400 rounded-full  p-2  hover:text-neutral-300 hover:border-neutral-100 hover:bg-neutral-600 duration-100"
      />
    </div>
  );
}
