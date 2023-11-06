import { useEffect, useRef, useState } from "react";

export default function MoreLikeThisBox({ movie }) {
    const videoEpisode = useRef(null);
    const [videoDuration, setVideoDuration] = useState(null);

    useEffect(() => {
        if (videoEpisode.current) {
            videoEpisode.current.addEventListener("loadedmetadata", () => {
                const duration = Math.floor(videoEpisode.current.duration / 60);
                setVideoDuration(isNaN(duration) ? null : duration);
            });
        }
    }, []);

    return (
        <div className="border-b-[1px] border-neutral-600">
            <div className="w-full flex items-center p-4 rounded-md">
                <div className="text-neutral-400 text-2xl">{movie?.videoEpisodeNo}</div>
                <div className="h-full w-[20%]">
                    <video ref={videoEpisode}>
                        <source src={movie?.videoUrl}></source>
                    </video>
                </div>
                <div className="flex flex-col justify-between w-[70%] gap-2 pl-4">
                    <div className="flex justify-between">
                        <div className="text-sm font-medium">{movie?.videoEpisodeName}</div>
                        <div className="text-sm font-medium">{videoDuration !== null ? videoDuration + 'm' : null}</div>
                    </div>
                    <div className="text-xs text-neutral-400">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores amet commodi aspernatur doloremque at itaque quis eos earum sunt error autem voluptate, quo sequi ipsam ullam et rem nobis repudiandae?
                    </div>
                </div>
            </div>
        </div>
    );
}
