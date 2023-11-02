export default function NetflixLogo() {

    return (
        <img
            onClick={() => {
                return navigate("/");
            }}
            className="w-44 cursor-pointer pl-7"
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
        ></img>)
}