import RegisterForm from "../features/auth/register/RegisterForm";
import HeaderAuthPage from "../components/header/HeaderAuthPage";
import Footer from "../layout/Footer";

function SignUpPage() {
  return (
    <div className=" w-full flex flex-col justify-center">
      <HeaderAuthPage isSignUp={true} />
      <div className="flex m-36 justify-center">
        <div className=" flex md:w-96 md:flex md:justify-center">
          <div className="flex justify-center flex-col gap-4   md:w-10/12 md:justify-center md:block">
            <div className="gap-1 flex flex-col">
              <div className="text-xs">STEP 1 OF 2</div>
              <div className="text-3xl font-medium">
                Create a password to start your membership
              </div>
              <div className="text-base text-neutral-700">
                Just a few more steps and you're done!
              </div>
              <div className="text-base text-neutral-700">
                We hate paperwork, too.
              </div>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
