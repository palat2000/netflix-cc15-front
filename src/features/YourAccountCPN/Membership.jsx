import { useDispatch, useSelector } from "react-redux";
import { cancelSubscription } from "../../store/slice/authSlice";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

export default function Membership() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state?.user?.data.user;
  });

  const handleCancelSubscription = () => {
    dispatch(cancelSubscription());
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between pt-10 ">
      {isOpen && (
        <ConfirmModal
          handleClose={handleClose}
          handleCancelSubscription={handleCancelSubscription}
        />
      )}
      <div className="pr-10 w-2/6">
        <div className="text-[#737373]">MEMBERSHIP & BILLING</div>
        <button
          onClick={handleConfirm}
          className="bg-[#E5E5E5] hover:bg-slate-100 pl-10 pr-10 pt-2 pb-2 rounded-sm drop-shadow-md text-sm"
        >
          Cancel Membership
        </button>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>{user.email}</div>
          <button className="text-blue-600 hover:underline">Your email</button>
        </div>
        <div className="flex justify-between">
          <div className="flex text-gray-500">
            <div>password:</div>
            <div>********</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex  text-gray-500">
            <div>Phone:</div>
            <div>{user.mobile}</div>
          </div>
          <button className="text-blue-600 hover:underline">
            Your Phone number
          </button>
        </div>
        <hr className="mt-2 mb-2" />
        <div className="pb-3 pt-3">
          Expired in {new Date(user.expiredDate).toDateString()}
        </div>
      </div>
    </div>
  );
}
