import { useState } from "react"
import ContentModalDetail from "./ContentModalDetail"

export default function ContentModal({ movieId }) {

    // alert(movieId)
    const [isOpen, setIsOpen] = useState(false)

    const handleClickClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div onClick={handleClickClose}>Open</div>
            {isOpen && (
                <ContentModalDetail movieId={movieId} />
            )
            }
        </>
    )
}
