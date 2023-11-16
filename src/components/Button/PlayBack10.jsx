import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function PlayBack10({ customizeClass }) {
  return (
    <div className={`${customizeClass} flex flex-row justify-center items-center`}>
      <div className="text-white text-[8px] hover:text-[10px] duration-75 ">10</div>
      <FontAwesomeIcon
        icon={faArrowRotateLeft}
        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
      />

    </div>
  );
}