import CloseButton from '../components/button/CloseButton';
import MuteButton from '../components/button/MuteButton';
import SoundOnButton from '../components/button/SoundOnButton';
import { useSelector, useDispatch } from 'react-redux'
import { closeModal, toggleMute } from "../store/slice/contentSlice"

export default function TrailerLayoutRight({ movieId }) {
    const trailerIsMute = useSelector(state => state.content[movieId]?.trailerIsMute)
    const dispatch = useDispatch()


    return (
        <div className='flex flex-col justify-between items-center h-full'>
            <div onClick={() => dispatch(closeModal())}>
                <CloseButton />
            </div>
            {trailerIsMute && (
                <div onClick={() => dispatch(toggleMute(movieId))}>
                    <MuteButton />
                </div>
            )}
            {!trailerIsMute && (
                <div onClick={() => dispatch(toggleMute(movieId))}>
                    <SoundOnButton />
                </div>
            )}
        </div>
    )
}
