import { useState } from "react";
import useContentModal from "./hook/useContentModal";
import CloseButton from "../components/button/CloseButton";
import MuteButton from "../components/button/new/MuteButton";
import SoundOnButton from "../components/button/SoundOnButton";

export default function TrailerLayoutRight() {
  const [isMute, setIsMute] = useState(true);
  const { trailerPlayer, handleClickClose } = useContentModal();
  const clickSwapMute = () => {
    setIsMute(!isMute);
    trailerPlayer.current.muted = !isMute;
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
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
  );
}
