import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

export default function MuteButton() {
  return (
    <IconButton className="z-10 w-fit h-fit p-0">
      <FontAwesomeIcon
        icon={faVolumeXmark}
        className="text-sm text-neutral-500 bg-neutral-700 bg-opacity-80 border border-neutral-600 rounded-full px-1.5 py-2 hover:text-neutral-400 hover:border-neutral-500 hover:bg-neutral-600 duration-100"
      />
    </IconButton>
  );
}
