import { useState } from 'react';
import useContentModal from './hook/useContentModal';
import CloseButton from '../component/button/CloseButton';
import MuteButton from '../component/button/MuteButton';
import SoundOnButton from '../component/button/SoundOnButton';

export default function TrailerLayoutRight() {
    const [isMute, setIsMute] = useState(true)
    const { trailerPlayer, handleClickClose } = useContentModal()
    const clickSwapMute = () => {
        setIsMute(!isMute)
        trailerPlayer.current.muted = !isMute
    }

    return (
        <div className='flex flex-col justify-between items-center h-full'>
            <div onClick={handleClickClose}>
                <CloseButton />
            </div>
            {isMute && (
                <div onClick={clickSwapMute}>
                    <MuteButton />
                </div>
            )}
            {!isMute && (
                <div onClick={clickSwapMute}>
                    <SoundOnButton />
                </div>
            )}
        </div>
    )
}
