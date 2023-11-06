import { HiPencil } from "react-icons/hi";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserProfileAction,
  editProfileAction,
  getMeAction,
} from "../store/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchAllContent } from "../store/slice/allContentSlice";

export default function ManageProfileModal({ onClose, data }) {
  const [file, setFile] = useState(data.profileImageUrl);
  const [name, setName] = useState(data.userProfileName);
  const [userProfileId, setUserProfileId] = useState(null);
  const navigate = useNavigate();
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const handleSaveEdit = () => {
    const formData = new FormData();

    formData.append("profileImageUrl", file);
    // formData.append("profileImageUrl", defaultFile);
    formData.append("userProfileName", name);
    formData.append("userProfileId", data.id);

    dispatch(editProfileAction(formData))
      .unwrap()
      .then(() => {
        return onClose(false);
      });
  };

  const handleDelete = () => {
    dispatch(deleteUserProfileAction(data.id))
      .unwrap()
      .then(() => onClose(false));
  };
  const defaultImage =
    "https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png";
  const userData = useSelector((state) => {
    return state?.user?.data?.allUserProfile;
  });

  return (
    <div>
      <div>
        <div className="bg-black h-full w-full z-50 flex items-center justify-center absolute top-0 right-0  ">
          <div className="flex flex-col gap-10">
            <div className="text-white text-4xl">Edit Profile</div>
            <hr className="" />
            <div className="flex gap-5 group  h-24 w-24 ">
              {data.profileImageUrl ? (
                <img
                  onClick={() => inputEl.current.click()}
                  className="bg-yellow-500 h-24 w-24   group-hover:cursor-pointer "
                  src={file ? URL.createObjectURL(file) : data.profileImageUrl}
                ></img>
              ) : (
                <img src={defaultImage}></img>
              )}
              <HiPencil className="text-xs group absolute translate-y-20  translate-x-1 bg-gray-600 rounded-full text-white " />
              <div className="flex flex-col gap-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={data.userProfileName}
                  name="userProfileName"
                  className="bg-gray-600 p-1 text-white"
                ></input>
              </div>
            </div>
            <input
              type="file"
              className="hidden"
              accept="png,jpg"
              ref={inputEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            ></input>

            <hr />
            <div className="flex gap-5 ">
              <div
                // onClick={handleSaveEdit}
                onClick={() => console.log(name)}
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
              {userData?.length > 1 && (
                <div
                  onClick={handleDelete}
                  // onClick={()=> console.log(file)}
                  className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer"
                >
                  Delete
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
