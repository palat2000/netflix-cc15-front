export default function VideoControls({ videoContainer }) {
    return (
        <div className="absolute z-10 w-full h-full flex flex-col text-white justify-between items-center gap-7">
            <div id="top" className="flex w-full flex-row justify-between h-[10%] items-center">
                <div>Return</div>
            </div>
            <div id="bottom" className="flex flex-col w-full h-[13%]">
                <div className="flex flex-row w-full">
                    <input className="w-full" type="range" />
                    <div>Duration</div>
                </div>
                <div id="bottom-under" className="flex w-full flex-row justify-between h-full items-center">
                    <div id="bottom-left" className="flex gap-3">
                        <div>Play</div>
                        <div>Back</div>
                        <div>Forward</div>
                        <div>Volume</div>
                    </div>
                    <div id="bottom-center" className="flex gap-3">
                        <div>Title</div>
                    </div>
                    <div id="bottom-right" className="flex gap-3">
                        <div>Episode</div>
                        <div>Speed</div>
                        <div className="cursor-pointer" onClick={() => videoContainer.current.requestFullscreen()}>Full</div>
                        <div className="cursor-pointer" onClick={() => document.exitFullscreen()}>ExitFull</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
