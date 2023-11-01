import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

export default function TrailerHeaderModal({ trailer }) {
    const [isMute, setIsMute] = useState(true)

    const clickSwapMute = () => { setIsMute(!isMute) }


    return (
        <div className="flex flex-col relative w-full">
            {/* Trailer: */}

            <div className='bg-red-300 bg-opacity-20 absolute flex h-full w-full'>
                <div className='flex flex-col justify-between'>
                    <IconButton className='z-10 w-fit h-fit p-0'>
                        <FontAwesomeIcon icon={faCircleXmark} className="text-neutral-900" />
                    </IconButton>
                    {isMute && (<IconButton onClick={clickSwapMute} className='z-10 w-fit h-fit p-0'>
                        <FontAwesomeIcon icon={faVolumeXmark} className="text-sm text-neutral-500 bg-neutral-700 bg-opacity-80 border border-neutral-600 rounded-full px-1 py-1.5 hover:text-neutral-400 hover:border-neutral-500 hover:bg-neutral-600 duration-100" />
                    </IconButton>)}
                    {!isMute && (
                        <IconButton onClick={clickSwapMute} className='z-10 w-fit h-fit p-0'>
                            <FontAwesomeIcon icon={faVolumeHigh} className="text-sm text-neutral-500 bg-neutral-700 bg-opacity-80 border border-neutral-600 rounded-full px-1 py-1.5 hover:text-neutral-400 hover:border-neutral-500 hover:bg-neutral-600 duration-100" />
                        </IconButton>
                    )}
                </div>
            </div>
            <video width="100%" height="100%" muted autoPlay>
                <source src={trailer}></source>
            </video>
        </div>
    )
}
