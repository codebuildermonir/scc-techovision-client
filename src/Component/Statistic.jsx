

const Statistic = () => {
      
      return (
            <div className="   bg-[#89108B]  pb-20 ">
                  <h1 className="text-center text-white text-6xl font-semibold py-8 " >Our Users</h1>
                  <div className=" flex flex-col md:flex-row justify-center gap-4 text-[#17222B] " >

                  <div className="border-2 border-white p-8 rounded-lg mx-auto md:mx-0 " >
                              <h1 className="flex items-center  gap-2 text-4xl text-[#50C7FF] font-bold">5K</h1>
                              <h1 className="font-semibold text-2xl text-white text-center">Student</h1>
                        </div>

                        <div className="border-2 border-white mx-auto md:mx-0 p-8 rounded-lg " >
                              <h1 className="flex items-center text-4xl text-[#50C7FF]  font-bold">8K</h1>
                              <h1 className="font-semibold text-center text-2xl text-white">Business Man</h1>
                        </div> 
                        <div className="border-2 mx-auto border-white md:mx-0 p-8 rounded-lg " >
                              <h1 className="flex items-center text-4xl text-[#50C7FF] font-bold">10K</h1>
                              <h1 className="font-semibold text-center text-2xl text-white ">Developer</h1>
                        </div>
                        <div className="border-2 mx-auto border-white md:mx-0 p-8 rounded-lg " >
                              <h1 className="flex items-center text-4xl text-[#50C7FF] font-bold">12K</h1>
                              <h1 className="font-semibold text-center text-2xl text-white ">Banker</h1>
                        </div>
                  </div>

            </div>
      );
};

export default Statistic;


