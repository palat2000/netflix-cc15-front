import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default function SetSoundLowButton({ customizeClass }) {
  return (
    <div className={`${customizeClass}`}>
      <FontAwesomeIcon
        icon={faVolumeLow}
        className="cursor-pointer text-white text-2xl hover:text-3xl hover:border-neutral-300 duration-75"
      />
    </div>
  );
}
