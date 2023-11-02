import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function MoreInfoButton() {
  return (
    <div>
      <button className=" text-white text-xs bg-slate-300  my-1 py-1.5 px-2 rounded-md hover:bg-transparent">
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
        More Info
      </button>
    </div>
  );
}
