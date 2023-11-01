import RegisterForm from "./RegisterForm";

export default function RegisterBody() {
  return (
    <div className="w-full md:flex md:justify-center">
      <div className=" flex justify-center md:w-96 md:flex md:justify-center">
        <div className="flex justify-center flex-col gap-4  w-10/12 md:w-10/12 md:justify-center md:block">
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
  );
}
