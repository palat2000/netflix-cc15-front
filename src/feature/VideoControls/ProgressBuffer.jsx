import { useSelector } from "react-redux"

export default function ProgressBuffer({ watchPlayer }) {
    const recentBuffer = useSelector(store => store?.watchPage?.videoData?.recentBuffer)
    const videoDuration = useSelector(store => store?.watchPage?.videoData?.videoDuration)

    const progressValue = (recentBuffer / videoDuration) * 100
    console.log("🚀 ~ file: ProgressBuffer.jsx:9 ~ ProgressBuffer ~ progressValue:", progressValue)

    const widthBar = {
        width: `${progressValue}%`
    }

    return (
        <div style={widthBar} className="h-full absolute z-10 bg-neutral-400" value={recentBuffer} max={watchPlayer?.current?.duration}></div>
    )
}
