import {
  MdAssignmentTurnedIn,
  MdGroupWork,
  MdTrendingUp,
} from "react-icons/md";

const Information = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
          Welcome to Taskly
        </h1>
        <p className="max-w-2xl text-gray-600 mt-2">
          Taskly brings your team’s ideas to life with powerful collaborative
          task management!
        </p>

        <div className="p-6 flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-md max-w-xs mx-auto h-60 flex flex-col items-center text-center">
              <MdAssignmentTurnedIn className="text-4xl text-blue-500 mb-3" />
              <h1 className="text-xl font-semibold mb-2">
                Seamless Task Assignment
              </h1>
              <p className="text-gray-600">
                Effortlessly assign tasks to team members, set priorities, and
                track progress in real-time.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-md max-w-xs mx-auto h-60 flex flex-col items-center text-center">
              <MdGroupWork className="text-4xl text-green-500 mb-3" />
              <h1 className="text-xl font-semibold mb-2">
                Collaborative Workspace
              </h1>
              <p className="text-gray-600">
                Foster teamwork with shared project boards, real-time updates,
                and in-app communication.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-md max-w-xs mx-auto h-60 flex flex-col items-center text-center">
              <MdTrendingUp className="text-4xl text-purple-500 mb-3" />
              <h1 className="text-xl font-semibold mb-2">
                Smart Progress Tracking
              </h1>
              <p className="text-gray-600">
                Gain insights with visual dashboards, automated reminders, and
                detailed reports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
