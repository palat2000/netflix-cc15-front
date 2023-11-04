import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function CloseButton() {
    return (
        <IconButton className='z-10 w-fit h-fit p-0'>
            <FontAwesomeIcon icon={faXmark} className="text-base text-neutral-400 bg-black border-neutral-400 rounded-full px-2 py-1.5 hover:bg-neutral-800 duration-100 " />
        </IconButton>
    )
}
