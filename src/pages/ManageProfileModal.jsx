import { HiPencil } from "react-icons/hi";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileAction } from "../store/slice/authSlice";

export default function ManageProfileModal({ onClose, data }) {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");

  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    const formData = new FormData();

    formData.append("profileImageUrl", file);
    formData.append("userProfileName", name);
    formData.append("userProfileId",data.id)
    
    console.log(formData)

    dispatch(editProfileAction(formData)).unwrap()
  };

  return (
    <div>
      <div>
        <div className="bg-black h-full w-full z-50 flex items-center justify-center absolute top-0 right-0  ">
          <div className="flex flex-col gap-10">
            <div className="text-white text-4xl">Edit Profile</div>
            <hr className="" />
            <div className="flex gap-5 group ">
              <img
                onClick={() => inputEl.current.click()}
                className="bg-yellow-500 h-24 w-24   group-hover:cursor-pointer"
                src={data.profileImageUrl}
              ></img>
              <HiPencil className="text-xs group absolute translate-y-20   translate-x-1 bg-gray-600 rounded-full text-white " />
              <div className="flex flex-col gap-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  placeholder={data.userProfileName}
                  className="bg-gray-600 p-1 "
                ></input>
                <div className="flex gap-3">
                  <input type="checkbox" className="w-5" />
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
                onClick={handleSaveEdit}
                className="bg-white p-1 pr-5 pl-5 hover:bg-red-600 hover:text-white cursor-pointer"
              >
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
