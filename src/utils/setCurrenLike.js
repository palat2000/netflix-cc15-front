export default function setCurrenLike(movieId, allMovieData, newLikeData) {
    console.log("🚀 ~ file: setCurrenLike.js:2 ~ setCurrenLike ~ newLikeData:", newLikeData)
    console.log("🚀 ~ file: setCurrenLike.js:2 ~ setCurrenLike ~ allMovieData:", allMovieData)
    console.log("🚀 ~ file: setCurrenLike.js:2 ~ setCurrenLike ~ movieId:", movieId)
    let newAllMovieData
    for (const key in allMovieData) {
        console.log(allMovieData[key])
        newAllMovieData = allMovieData[key].map(el => {
            console.log(el)
            if (el.id === movieId) {
                el.likeMovie = newLikeData
            }
            return el
        })
    }
    console.log("🚀 ~ file: setCurrenLike.js:3 ~ setCurrenLike ~ newAllMovieData:", newAllMovieData)
    return newAllMovieData
}
