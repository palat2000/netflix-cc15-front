export default function ValueVolume({ volume }) {
    console.log(volume)
    console.log(volume * 70)
    const widthBar = {
        width: `${volume * 97}%`
        // width: "100%"
        // width: `100%`
    }
    return (
        <div style={widthBar} className="bg-red-500 h-full"></div>
    )
}
