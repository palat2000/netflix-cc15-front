import { useSelector } from "react-redux"
import { CircularProgress } from "@mui/material";

export default function ButtonNetflix({text,fontSize,handleClick}) {
    const {loading} = useSelector((state) => { return state.user })

    return <div>
        {!loading ?
                <button onClick={handleClick} className={`bg-[#e50914] text-white p-[10px] rounded-md h-14 w-full text-${fontSize}`}>
                  <div>{text}</div>
                </button>
                :
                <button className="bg-red-800  text-white p-[10px] rounded-md h-14 w-full text-xl">
                  <CircularProgress sx={{ color: "whitesmoke" }} />
                </button>
              }
    </div>
}