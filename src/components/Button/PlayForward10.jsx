import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

export default function PlayForward10({ customizeClass }) {
  return (
    <div className={`${customizeClass} flex flex-row justify-center items-center`}>
      <FontAwesomeIcon
        icon={faArrowRotateRight}
        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
      />
      <div className="text-white text-[8px] hover:text-[10px] duration-75 ">10</div>
    </div>
  );
}
