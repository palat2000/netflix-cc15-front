import { IoIosSearch } from "react-icons/io";
import {
  FaRegBell,
  FaPencilAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbMoodKid } from "react-icons/tb";
import {
  BsPersonSquare,
  BsPerson,
  BsQuestionCircle,
  BsPlusCircle,
} from "react-icons/bs";
import { LiaCopyrightSolid } from "react-icons/lia";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function Header() {
  const [isSearhOen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex  items-center p-1 ">
        <div className="flex items-center">
          <BiMenu className="ml-"/>
          <img
            className="h-8 p-1  "
            src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          ></img>
        </div>
       

        <input
        placeholder="Search"
        className="bg-black w-40 h-6 p-1 border border-white opacity-70 ml-52"
        ></input>
       
      </div>
      <div>
        <div>
          <div>
            icon
          </div>
          <div>Kridtue01</div>
        </div>
        <div>Account</div>
        <div>Help Center</div>
        <div>Sign Out of Netflix</div>
      </div>
      <div>Home</div>
      <div>My List</div>
      <div>Kids</div>
      <div>Action</div>
      <div>Romantic</div>
      <div>Horror</div>
      <div>Comedy</div>
      <div>Sport</div>
      <div>series</div>
      
    </div>
  );
}

export default Header;
