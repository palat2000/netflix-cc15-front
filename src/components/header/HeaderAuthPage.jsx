import { useNavigate } from "react-router-dom";
import { removeAccessToken } from "../../utils/local-storage";
import NetflixLogo from "../../features/logo&button/NetflixLogo";
import { useDispatch } from "react-redux";
import { resetState } from "../../store/slice/authSlice";

function HeaderAuthPage({ isSignUp }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between items-center">
        <NetflixLogo />
        {isSignUp ? (
          <button
            onClick={() => navigate("/login")}
            className="pr-7 text-2xl font-bold"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => {
              removeAccessToken();
              dispatch(resetState());
              return navigate("/");
            }}
            className="pr-7 text-2xl font-bold"
          >
            Sign out
          </button>
        )}
      </div>
      <hr />
    </>
  );
}

export default HeaderAuthPage;
