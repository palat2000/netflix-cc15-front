import { useDispatch, useSelector } from "react-redux";

function GuestBrowsePage() {
  const userData = useSelector((state) => {
    return state.user.data;
  });
  return <div>GuestBrowsePage</div>;
}

export default GuestBrowsePage;
