import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";

export default function SpeedButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}`}>
      <FontAwesomeIcon
        icon={faGaugeSimpleHigh}
        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
      />
    </div>
  );
}
