

const AddTask = () => {
      return (
            <div className="border-2 h-screen" >
                  <div className="py-4 px-2 text-center text-4xl font-semibold bg-[#50C7FF]">
                        <h1>Create task</h1>
                  </div>



                  {/* add task */}
                   <div>
<div className="join absolute bottom-6  ">
<input className="input  input-bordered join-item" placeholder="Create your task"/>
<button className="btn join-item ">Add task</button>
</div>

                  </div>
                  
            </div>
      );
};

export default AddTask;

