import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function HoverPlayButton() {
    return (
        <IconButton className='z-10 w-fit h-fit p-0'>
            <FontAwesomeIcon icon={faPlay} className=" text-2xl text-neutral-300 bg-neutral-700 bg-opacity-80 border border-neutral-400 rounded-full px-3 py-2  hover:text-neutral-300 hover:border-neutral-100 hover:bg-neutral-600 duration-300" />
        </IconButton>
    )
}
