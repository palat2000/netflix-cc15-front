import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function MoreInfoButton({ customizeClass }) {
  return (
    <div>
      <button
        className={`${customizeClass} text-white text-lg  py-2 px-8 my-1 ml-1  rounded-sm  bg-white bg-opacity-30 hover:bg-opacity-20`}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2 " />
        More Info
      </button>
    </div>
  );
}
