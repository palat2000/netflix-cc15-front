function ConfirmModal({ handleClose, handleFunction, message }) {
  return (
    <div
      onClick={handleClose}
      className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-black bg-opacity-10 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-10 py-5 flex flex-col rounded-md shadow"
      >
        <h2 className="text-3xl py-4">{message}</h2>
        <div className="flex justify-center gap-2 pt-10 pb-5">
          <button
            onClick={handleFunction}
            className="text-white bg-primary px-4 py-2 rounded-md hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-white px-4 py-2 rounded-md hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
            onClick={handleClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
