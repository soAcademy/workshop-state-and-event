import { useState } from "react";

const State7 = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-100 h-screen flex justify-center pt-36">
      <div className="w-5/12 ">
        <div className=" flex justify-end bg-gray-50 border-2 rounded-lg p-2">
          <button
            type="button"
            className="rounded-lg active:bg-gray-200 p-1"
            onClick={(e) => setShow(!show)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
        {show && (
          <div class="p-4 mt-4 text-sm text-green-800 rounded-lg bg-green-50">
            Hi There!
          </div>
        )}
      </div>
    </div>
  );
};

export default State7;
