import { CgProfile } from "react-icons/cg";

import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { HiOutlinePlusCircle } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import { useState } from "react";

export default function Admin() {
  const [isOpenMember, setIsOpenMember] = useState(true);
  const [isOpenMovie, setIsOpenMovie] = useState(false);
  const [isOpenCreateMovie, setIsOpenCreateMovie] = useState(false);
  const [isOpenShowProfile, setIsOpenShowProfile] = useState(false);

  return (
    <div>
      <div className="flex justify-between bg-gray-500 p-5 shadow-2xl opacity-90  ">
        <div className="text-3xl">Admin</div>
        <div className="flex gap-5 items-center ">
          <div className="cursor-pointer hover:text-gray-800 text-3xl">
            Logout
          </div>
          <CgProfile className="cursor-pointer hover:text-gray-800 active:text-2xl text-3xl" />
        </div>
      </div>
      <div className="bg-gray-200 w-full h-full flex flex-1">
        <div className="">
          <div className="flex  gap-5 p-5 cursor-pointer hover:bg-gray-600 group">
            <AiTwotoneHome className="group-hover:text-white" />
            <div className="cursor-pointer group-hover:text-white ">Home</div>
          </div>
          <div
            onClick={() => setIsOpenMember(!isOpenMember)}
            className="flex gap-5 p-5 cursor-pointer hover:bg-gray-600 group "
          >
            <AiOutlineUser className="group-hover:text-white" />
            <div className="group-hover:text-white">User</div>
          </div>
          <div
            onClick={() => setIsOpenMovie(!isOpenMovie)}
            className="flex gap-5 p-5 items-center cursor-pointer hover:bg-gray-600 group"
          >
            <BiSolidRightArrow className="group-hover:text-white" />
            <div className="group-hover:text-white">Movies</div>
          </div>
        </div>

        <div className="bg-gray-400 w-full relative">
          <div>
            <div>User analytics</div>
            <img
              src="https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-flat-graph-rising-icon--vector-png-image_1609016.jpg"
              className="bg-yellow-500 w-auto h-96 m-10 rounded-2xl"
            ></img>
          </div>
          <div className="flex gap-10 p-10 ">
            {isOpenMember && (
              <div>
                Newest members
                {isOpenShowProfile && (
                  <div className="h- w-96 absolute bg-yellow-100 p-2">
                    <div>id</div>
                    <div>firstname</div>
                    <div>lastname</div>
                    <div>email</div>
                    <div>password</div>
                    <div>birthMonth</div>
                    <div>birthDate</div>
                    <div>isActive</div>
                    <div>mobile</div>
                    <div>activeAt</div>
                    <div>expiredDate</div>
                    <div
                      onClick={() => setIsOpenShowProfile(!isOpenShowProfile)}
                      className="bg-red-500 flex items-center justify-center cursor-pointer"
                    >
                      Close
                    </div>
                  </div>
                )}
                <div className="bg-gray-600 p-10 rounded-md h-96 flex flex-col gap-3  w-full">
                  <div className="flex gap-5 group">
                    <div className="group-hover:text-white">profile image</div>
                    <div className="group-hover:text-white">
                      Firstname Lastname
                    </div>
                    <div
                      onClick={() => setIsOpenShowProfile(!isOpenShowProfile)}
                      className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white"
                    >
                      show Profile
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="group-hover:text-white">profile image</div>
                    <div className="group-hover:text-white">
                      Firstname Lastname
                    </div>
                    <div className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white">
                      show Profile
                    </div>
                  </div>
                  <div className="flex gap-5 group">
                    <div className="group-hover:text-white">profile image</div>
                    <div className="group-hover:text-white">
                      Firstname Lastname
                    </div>
                    <div className="bg-red-600 hover:bg-red-500 cursor-pointer p-1 rounded-md text-white">
                      show Profile
                    </div>
                  </div>
                  <div className="flex gap-5"></div>
                </div>
              </div>
            )}
            {isOpenMovie && (
              <div>
                <div className="text-3xl text-white cursor-pointer  ">
                  <div>Lastest Content</div>
                  <div>
                    <HiOutlinePlusCircle
                      onClick={() => setIsOpenCreateMovie(!isOpenCreateMovie)}
                    />
                  </div>
                </div>
                {isOpenCreateMovie && (
                  <div className="bg-gray-500 absolute z-10 h-auto w-96 p-2">
                    <div className="flex flex-col gap-5">
                      <input type="file" />
                      <div className="text-white flex justify-between">
                        Movie name
                        <div className="flex gap-5">
                          <div className="text-white bg-green-700 cursor-pointer">
                            Confirm
                          </div>
                          <div
                            onClick={() =>
                              setIsOpenCreateMovie(!isOpenCreateMovie)
                            }
                            className="text-white bg-red-700 cursor-pointer"
                          >
                            Cancel
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="bg-gray-600 p-5 rounded-md  absolute w-1/2 flex flex-row gap-24 ">
                  <div>
                    movie
                    <div>Jurassic park</div>
                  </div>
                  <div>
                    Genre
                    <div>blablaa</div>
                  </div>
                  <div>
                    Year
                    <div>2023</div>
                  </div>
                  <div className="flex flex-col">
                    Age limit
                    <div>15+</div>
                    <div className="flex ">
                      <div className="cursor-pointer translate-x-20 -translate-y-7 bg-red-700 pl-2 pr-2 p-1 rounded-lg text-white">
                        edit
                      </div>
                      <div className="cursor-pointer translate-x-24 -translate-y-7 bg-red-700 pl-2 pr-2 p-1 rounded-lg text-white">
                        removoe
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
