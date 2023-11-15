import { useSelector } from "react-redux"

export default function ProgressWatching({ watchPlayer }) {
    const recentWatching = useSelector(store => store?.watchPage?.videoData?.recentWatching)
    const videoDuration = useSelector(store => store?.watchPage?.videoData?.videoDuration)

    const progressValue = (recentWatching / videoDuration) * 100
    console.log("🚀 ~ file: ProgressBuffer.jsx:9 ~ ProgressBuffer ~ progressValue:", progressValue)

    const widthBar = {
        width: `${progressValue}%`
    }
    return (
        <div style={widthBar} className="bg-red-500 w-full h-full absolute z-20" value={recentWatching} max={watchPlayer?.current?.duration}></div>
    )
}
