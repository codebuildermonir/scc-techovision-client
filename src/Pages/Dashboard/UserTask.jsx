import AddTask from "../../Component/AddTask";
import CompleteTask from "../../Component/CompleteTask";
import OngoingTask from "../../Component/OngoingTask";


const UserTask = () => {
      return (
            <div className="px-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AddTask></AddTask>
                  <OngoingTask></OngoingTask>
                  <CompleteTask></CompleteTask>

                  
                  
                  
            </div>
      );
};

export default UserTask;