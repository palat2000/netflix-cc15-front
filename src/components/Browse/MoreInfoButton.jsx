import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function MoreInfoButton() {
  return (
    <div>
      <button className=" text-white text-xs0  my-1 py-1.5 px-2 rounded-sm  bg-white bg-opacity-30 hover:bg-opacity-20 ">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
        More Info
      </button>
    </div>
  );
}
