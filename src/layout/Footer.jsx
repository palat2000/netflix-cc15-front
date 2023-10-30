import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LiaCopyrightSolid } from "react-icons/lia";

function Footer() {
  return <div className="flex  justify-between bg-black h-full items-center p-28  gap-5 flex-wrap sm:">
  <div>
    <div className="flex gap-5 p-2">
      <FaFacebookSquare className="cursor-pointer text-white" />
      <FaInstagramSquare className="cursor-pointer text-white" />
      <FaTwitter className="cursor-pointer text-white" />
      <FaYoutube className="cursor-pointer text-white" />
    </div>
    <div>
      
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Audio Descriptons
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Investor Relations
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Legal Notices
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      service code
    </div>
    <div className="flex">
      <LiaCopyrightSolid className="cursor-pointer text-gray-600 text-xs" />
      <div className="cursor-pointer text-gray-600 text-xs">
        1997-2023 Netflix, Inc.
      </div>
    </div>
  </div>
  <div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      {" "}
      Help Center
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Jobs
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      {" "}
      Cookie Preferences
    </div>
  </div>
  <div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Gift Cards
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Terms of Use
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Corporate information
    </div>
  </div>
  <div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Media Center
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Privacy
    </div>
    <div className="cursor-pointer hover:underline text-gray-600 text-xs">
      Contact Us
    </div>
  </div>
</div>
}

export default Footer;
