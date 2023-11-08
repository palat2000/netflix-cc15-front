import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddToListButton({ customizeClass }) {
  return (
    <IconButton className={`${customizeClass} w-fit h-fit `}>
      <FontAwesomeIcon
        icon={faPlus}
        className="text-neutral-300 bg-neutral-700 bg-opacity-80 border border-neutral-400 rounded-full  p-1  hover:text-neutral-300 hover:border-neutral-100 hover:bg-neutral-600 duration-100"
      />
    </IconButton>
  );
}
