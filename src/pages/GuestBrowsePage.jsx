import { useDispatch, useSelector } from "react-redux";

function GuestBrowsePage() {

  const userData = useSelector((state) => 
  {console.log(state)
  return state.user.data});
console.log(userData)
  return <div>GuestBrowsePage</div>;
}

export default GuestBrowsePage;
