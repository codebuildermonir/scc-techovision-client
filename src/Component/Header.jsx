

const Header = () => {
      return (
            <div className="bg-[#89108B] py-20">
             <div className=" gap-4 md:flex items-center max-w-6xl mx-auto ">
               
                  {/* Content div */}
                 <div className="flex-1 px-2 text-white justify-center   space-y-4 ">
                  <h1 className="md:text-5xl font-semibold " >DO-TO LIST</h1>
                  
                  <h1 className="md:text-3xl font-semibold text-white  ">PROJECT MANAGEMENT</h1>
                  <p className="text-base">{`Project management involves planning, organizing, and overseeing the execution of a project from its initiation to completion. It is a systematic approach to achieve specific goals and meet certain success criteria within a specified timeframe.`}</p>

            <div className="navbar-start ">
            <a className="btn  text-white   bg-[#FF014F] border-none hover:bg-[#FF014F] hover:-translate-y-1.5 uppercase ">{`Let’s Explore`}</a>
            </div>
                 </div>

                 {/* image div */}
                 <div className="flex-1 ">

                  <img src="https://i.ibb.co/Jts5dGd/21299966-1-removebg-preview.png" alt="" />

                 </div>
                  
            </div>
           </div>
      );
};

export default Header;

