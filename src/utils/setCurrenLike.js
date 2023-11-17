export default function setCurrenLike(movieId, allMovieData, newLikeData) {
    let newAllMovieData
    for (const key in allMovieData) {
        newAllMovieData = allMovieData[key].map(el => {
            if (el.id === movieId) {
                el.likeMovie = newLikeData
            }
            return el
        })
    }

    return newAllMovieData
}
