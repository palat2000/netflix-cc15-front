import HeaderAuthPage from "../components/header/HeaderAuthPage";

function SuccessPage() {
  return (
    <div className="h-full">
      <HeaderAuthPage />
      <div className="flex flex-col justify-center items-center">
        <h2>Payment successful</h2>
        <h3>Subscription success</h3>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default SuccessPage;
