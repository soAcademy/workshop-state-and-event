const ConfirmPopUp = ({
  setToggle,
  toggle,
  setMainToggle,
  mainToggle,
  setQuestionToggle,
  questionToggle,
}) => {
  return (
    <>
      <div className="h-screen w-screen backdrop-blur-sm fixed top-0">
        <div className="h-screen w-screen fixed top-[20%]  backdrop-blur-sm ">
          <div className="flex flex-col mx-auto flex-justify center bg-gradient-to-t from-blue-400 to-blue-200 w-2/3 rounded-lg ">
            <div className=" text-center py-2">เริ่มเกมส์</div>
            <div className="mx-auto   flex px-6 py-2">
              <div className="px-2">
                <button
                  className="px-2 bg-teal-200 rounded-lg"
                  onClick={() => {
                    setMainToggle(false);
                    setQuestionToggle(true);
                  }}
                >
                  ยืนยัน
                </button>
              </div>
              <div className="px-2">
                <button
                  className="px-2 bg-red-200 rounded-lg"
                  onClick={() => setToggle(false)}
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmPopUp;
