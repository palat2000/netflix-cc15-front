import Footer from "../layout/Footer";
import Header from "../layout/Header";

function HomePage() {
  return (
    <div>
      <div className="bg-[url('/NetflixBG1.png')] bg-cover bg-center py-40   ">
        <Header />
        <div className=" text-white text-center ">
          <div className="text-xl font-bold ">Welcome back</div>
          <div className="px-5 text-xl font-bold">
            Enjoy big movie,hit series and more from THB419.
          </div>
          <div className="py-5">Join today.Cancel anytime.</div>
          <button className="font-light bg-red-600 py-2 px-5 rounded-md ">
            Finish Sign Up
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
