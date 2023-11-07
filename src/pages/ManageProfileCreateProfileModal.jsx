import { HiPencil } from "react-icons/hi";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfileAction, resetState } from "../store/slice/authSlice";

export default function ManageProfileModal({ onClose, data }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);
  const [kid, setKid] = useState(false);
  const [emptyError, setEmptyError] = useState(null);
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => {
    return state.user;
  });
  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";

  const handleSaveEdit = () => {
    dispatch(resetState());
    if (name === null) {
      return setEmptyError("This field can't be empty");
    }
    const formData = new FormData();
    formData.append("profileImageUrl", file);
    formData.append("userProfileName", name);
    formData.append("isKid", kid);
    formData.append("userId", data[0].userId);

    const res = dispatch(createProfileAction(formData))
      .unwrap()
      .then(() => onClose(false));
  };
  return (
    <div>
      <div>
        <div className="bg-black h-full w-full z-50 flex items-center justify-center absolute top-0 right-0  ">
          <div className="flex flex-col gap-10">
            <div className="text-white text-4xl">Add Profile</div>
            <hr className="" />
            <div className="flex gap-5 group ">
              <img
                onClick={() => inputEl.current.click()}
                className="bg-yellow-500 h-24 w-24   group-hover:cursor-pointer"
                src={file ? URL.createObjectURL(file) : defaultImage}
              ></img>
              <HiPencil className="text-xs group absolute translate-y-20   translate-x-1 bg-gray-600 rounded-full text-white " />
              <div className="flex flex-col gap-2">
                {error && <div className="text-red-500">{error}</div>}
                {emptyError && <div className="text-red-500">{emptyError}</div>}
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-600 p-1 text-white"
                  value={name}
                ></input>
                <div className="flex gap-3">
                  <input
                    value={kid}
                    onChange={() => setKid(!kid)}
                    type="checkbox"
                    className="w-5"
                  />
                  <div className="text-white">Is Kid</div>
                </div>
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              accept="png,jpg"
              ref={inputEl}
              onChange={(e) => {
                if (e.target.files[0]) setFile(e.target.files[0]);
              }}
            ></input>

            <hr />
            <div className="flex gap-5 ">
              <div
                onClick={() => {
                  return handleSaveEdit();
                }}
                // onClick={()=>console.log(data.message)}
                className="bg-white p-1 pr-5 pl-5 hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Continue
              </div>
              <div
                onClick={() => {
                  dispatch(resetState());
                  return onClose(false);
                }}
                // onClick={() => console.log(file)}
                className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
