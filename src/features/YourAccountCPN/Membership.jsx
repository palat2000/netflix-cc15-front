import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  cancelSubscription,
  createSubscription,
} from "../../store/slice/authSlice";
import ConfirmModal from "./ConfirmModal";

export default function Membership() {
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [confirmRestart, setConfirmRestart] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state?.user?.data.user;
  });

  const handleCancelSubscription = () => {
    dispatch(cancelSubscription());
    setConfirmCancel(false);
  };

  const handleRestartSubscription = () => {
    dispatch(createSubscription());
    setConfirmRestart(false);
  };

  return (
    <div className="flex justify-between pt-10 ">
      {confirmCancel && (
        <ConfirmModal
          handleClose={() => setConfirmCancel(false)}
          handleFunction={handleCancelSubscription}
          message="Do you need to cancel subscription?"
        />
      )}
      {confirmRestart && (
        <ConfirmModal
          handleClose={() => setConfirmRestart(false)}
          handleFunction={handleRestartSubscription}
          message="Do you need to restart subscription?"
        />
      )}
      <div className="pr-10 w-2/6">
        <div className="text-[#737373]">MEMBERSHIP & BILLING</div>
        {user.isActive ? (
          <button
            onClick={() => setConfirmCancel(true)}
            className="bg-[#E5E5E5] hover:bg-slate-100 pl-10 pr-10 pt-2 pb-2 rounded-sm drop-shadow-md text-sm"
          >
            Cancel Membership
          </button>
        ) : (
          <button
            onClick={() => setConfirmRestart(true)}
            className="bg-[#E5E5E5] hover:bg-slate-100 pl-10 pr-10 pt-2 pb-2 rounded-sm drop-shadow-md text-sm"
          >
            Restart Membership
          </button>
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div>{user.email}</div>
          {/* <button className="text-blue-600 hover:underline">Your email</button> */}
        </div>
        <div className="flex justify-between">
          <div className="flex text-gray-500">
            <div>password:</div>
            <div>********</div>
          </div>
        </div>
        {/* <div className="flex justify-between">
          <div className="flex  text-gray-500">
            <div>Phone:</div>
            <div>{user.mobile}</div>
          </div>
          <button className="text-blue-600 hover:underline">
            Your Phone number
          </button>
        </div> */}
        <hr className="mt-2 mb-2" />
        <div className="pb-3 pt-3">
          Expired in {new Date(user.expiredDate).toDateString()}
        </div>
      </div>
    </div>
  );
}
