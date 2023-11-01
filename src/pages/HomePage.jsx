// import Footer from "../layout/Footer";
// import NetflixBG1 from "../assets/NetflixBG1.png";
import HomePageInput from "../components/HomePage/HomePageInput";
import HeaderHomePage from "../layout/HeaderHomePage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div>
      <div className="bg-[url('/NetflixBG1.png')] bg-cover bg-center h-screen  ">
        <div className="w-full h-full items-centerv bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-black">
          <HeaderHomePage />
          <div className="h-full flex items-center mx-36 pb-10">
            <div className=" text-white text-center">
              <div className="text-3xl font-bold">
                The biggest local and international hits. The best stories. All
                streaming here.
              </div>

              <div className="py-2">Watch anywhere.Cancel anytime.</div>
              <div className="py-2 text-sm">
                Ready to watch? Enter your email to create or restart your
                membership.
              </div>

              <div className="flex justify-center">
                <div className="px-4 text-black ">
                  <HomePageInput
                    placeholder="Email address"
                    value={null}
                    type="text"
                    onChange={null}
                  />
                </div>

                <button className=" font-light bg-red-600 py-1 px-4 rounded-md hover:bg-red-800">
                  Get Started
                  <FontAwesomeIcon icon={faAngleRight} className="ml-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
