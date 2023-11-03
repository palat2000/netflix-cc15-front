import useContentModal from "./hook/useContentModal"

export default function InfoBody() {
    const { movieData } = useContentModal()
    return (
        <div className="flex flex-col w-11/12   ">
            <div className="flex">Detail:{movieData?.detail}</div>
            <div >Genre:{movieData?.genres}</div>
            <div>Actors:{movieData?.actors}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">Video:{movieData?.video}</div>
            <div className="w-full break-words">moreLikeThis:{movieData?.moreLikeThis}</div>
        </div>
    )
}
