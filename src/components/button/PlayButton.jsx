import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function PlayButton() {
    return (
        <div className='flex items-center bg-white text-black w-32 min-w-[77px] py-1 justify-center gap-3 rounded-sm cursor-pointer hover:bg-neutral-300 '>
            <FontAwesomeIcon icon={faPlay} />
            Play
        </div>
    )
}
