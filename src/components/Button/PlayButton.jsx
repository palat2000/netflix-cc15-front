import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButton({ customizeClass }) {
  return (
    <div
      className={`${customizeClass}  cursor-pointer text-black  py-2 px-8 m-1  rounded-sm text-lg  bg-white hover:bg-opacity-90`}
    >
      <FontAwesomeIcon icon={faPlay} className="mr-2" />
      Play
    </div>
  );
}
