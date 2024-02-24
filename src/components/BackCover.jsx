function BackCover({ togglePopup }) {
  return (
    <>
      <div className="back-cover">
        <div>
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <div className="w-4/5 h-10 bg-[#eee] mb-2 rounded"></div>
            </div>
          ))}
        </div>
        <button
          className="absolute rounded-lg border outline-none cursor-pointer px-4 py-2 bottom-6"
          onClick={togglePopup}
        >
          Submit
        </button>
      </div>
    </>
  );
}
export default BackCover;
