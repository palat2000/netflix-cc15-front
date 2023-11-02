import { HiPencil } from "react-icons/hi";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { changeImage } from "../store/slice/authSlice";
export default function ManageProfileModal({ onClose }) {
const [file , setFile] =useState(null)
const imageProfile = useSelector((state) => state.user.d)

console.log('imageProfile', imageProfile)
  const inputEl = useRef(null)
const dispatch = useDispatch()

//   console.log(first)
  return (
    <div>
      <div>
        <div className="bg-black h-full w-full z-40 flex items-center justify-center absolute top-0 right-0  ">
          <div className="flex flex-col gap-10">
            <div className="text-white text-4xl">Edit Profile</div>
            <hr className="" />
            <div className="flex gap-5 group ">
              <div
                onClick={() => inputEl.current.click()}
                className="bg-yellow-500 h-24 w-24   group-hover:cursor-pointer"
              >
                <HiPencil className="text-xs group absolute translate-y-20   translate-x-1 bg-gray-600 rounded-full text-white " />
              </div>
              <input
            type="file"
            className="hidden"
            accept="png,jpg"
            ref={inputEl}
            onChange={e => {
              if (e.target.files[0])
              changImage(e.target.files[0])
            }}
            ></input>
              <div className="flex flex-col gap-2">
                <input placeholder="Name" className="bg-gray-600 p-1 "></input>
                <div className="flex gap-3">
                  <input type="checkbox" className="w-5" />
                  <div className="text-white">Is Kid</div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex gap-5 ">
              <div className="bg-white p-1 pr-5 pl-5 hover:bg-red-600 hover:text-white cursor-pointer">
                Save
              </div>
              <div
                onClick={() => onClose(false)}
                className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer"
              >
                Cancel
              </div>
              <div className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer">
                Delete Profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
