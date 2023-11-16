import CloseButton from '../components/button/CloseButton';
import MuteButton from '../components/button/MuteButton';
import SoundOnButton from '../components/button/SoundOnButton';
import { useSelector, useDispatch } from 'react-redux'
import { changStatusOpenModal, toggleMute } from "../store/slice/contentSlice"
import { setVideoId } from '../store/slice/watchPageSlice';

export default function TrailerLayoutRight({ movieId }) {
  const trailerIsMute = useSelector(state => state.content?.trailerIsMute)
  const dispatch = useDispatch()

  const handleClickClose = () => {
    dispatch(changStatusOpenModal(false))
    dispatch(setVideoId(null))
  }

  return (
    <div className='flex flex-col justify-between items-center h-full'>
      <div onClick={handleClickClose}>
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
