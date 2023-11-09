import { HiPencil } from "react-icons/hi";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserProfileAction,
  editProfileAction,
  resetState,
} from "../store/slice/authSlice";

export default function ManageProfileModal({ onClose, data }) {
  const [file, setFile] = useState(null);
  const [emptyError, setEmptyError] = useState(null);
  const [name, setName] = useState(data.userProfileName);
  const inputEl = useRef(null);
  const dispatch = useDispatch();

  const { error } = useSelector((state) => {
    console.log(state);
    return state.user;
  });

  const a = useSelector((state) => state.user);
  console.log(a);

  const handleSaveEdit = () => {
    dispatch(resetState());
    if (name.length <= 0) {
      return setEmptyError("This field can't be empty");
    }
    const formData = new FormData();

    formData.append("profileImageUrl", file);
    // formData.append("profileImageUrl", defaultFile);
    formData.append("userProfileName", name);
    formData.append("userProfileId", data.id);
    formData.append("userId", data.userId);

    dispatch(editProfileAction(formData))
      .unwrap()
      .then(() => onClose(false));
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
            <div className="text-white text-4xl md:text-7xl">Edit Profile</div>
            <hr />
            <div className="flex gap-5 group  h-24 w-24 md:h-40 md:w-40">
              {data.isKid && (
                <div className=" bg-gradient-to-br from-red-500 to-purple-700 text-transparent bg-clip-text font-extrabold translate-x-16 ml-1 translate-y-20 text-xs absolute  z-20  md:text-2xl md:translate-y-32 md:translate-x-24">
                  kids
                </div>
              )}
              {data.profileImageUrl ? (
                <img
                  onClick={() => inputEl.current.click()}
                  className="bg-yellow-500  group-hover:cursor-pointer "
                  src={file ? URL.createObjectURL(file) : data.profileImageUrl}
                ></img>
              ) : (
                <img
                  className="group-hover:cursor-pointer rounded-md "
                  onClick={() => inputEl.current.click()}
                  src={file ? URL.createObjectURL(file) : defaultImage}
                ></img>
              )}

              <HiPencil
                onClick={() => inputEl.current.click()}
                className="text-xs group absolute translate-y-20  translate-x-1 bg-gray-900 rounded-full text-white md:text-3xl md:translate-y-32 md:-my-1 group-hover:cursor-pointer "
              />
              <div className="flex flex-col gap-2">
                {emptyError && <div className="text-red-500">{emptyError}</div>}
                {error && <div className="text-red-500">{error}</div>}

                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  className="bg-gray-600 p-1 md:w-96 md:p-2 text-white md:text-3xl"
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
                onClick={handleSaveEdit}
                className="bg-white p-1 pr-5 pl-5 hover:bg-red-600 hover:text-white cursor-pointer md:text-2xl font-medium md:pl-9 md:pr-9 md:p-3"
              >
                Save
              </div>
              <div
                onClick={() => onClose(false)}
                // onClick={()=>console.log(error)}
                className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer md:text-2xl font-medium md:pl-9 md:pr-9 md:p-3"
              >
                Cancel
              </div>
              {userData?.length > 1 && (
                <div
                  onClick={handleDelete}
                  className="text-gray-500 border border-gray-500 p-1 pr-3 pl-3 hover:text-white hover:border-white cursor-pointer md:text-2xl font-medium md:pl-9 md:pr-9 md:p-3"
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
