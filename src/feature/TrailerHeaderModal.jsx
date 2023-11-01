export default function TrailerHeaderModal({ trailer }) {
    return (
        <div className="flex flex-col relative">
            Trailer:
            <video autoPlay>
                <source src={trailer}></source>
            </video>
        </div>
    )
}
