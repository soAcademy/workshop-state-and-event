import { FaWindowClose } from "react-icons/fa";

const NewTaskModal = (props) => (
  <div
    className={`h-modal fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50 p-4 md:inset-0 md:h-full ${
      props.isModalOn ? "flex" : "hidden"
    }`}
  >
    <div className="relative h-full w-full max-w-2xl md:h-auto">
      {/* Modal content */}
      <div className="relative rounded-lg bg-white shadow">
        <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-600">
          <h3 className="text-xl font-bold text-slate-900">เพิ่มโน้ต</h3>
          <button
            onClick={() => props.toggleModal(!props.isModalOn)}
            className="h-8 w-8 rounded-full p-2"
          >
            <FaWindowClose className="text-slate-700 hover:text-slate-900" />
          </button>
        </div>
        <form onSubmit={(e) => props.addTask(e)} className="p-0">
          <div className="space-y-6 p-6">
            <input
              className="block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              type="text"
              name="task"
              id="task"
            />
          </div>
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6">
            <button
              type="submit"
              name="submit"
              className="w-full rounded-lg bg-emerald-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default NewTaskModal;
