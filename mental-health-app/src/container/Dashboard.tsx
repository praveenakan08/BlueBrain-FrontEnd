import { useState } from "react";
import MyJournal from "./MyJournal";
import MyMoodTracker from "./MyMoodTracker";
import MyMeditation from "./MyMeditation";
import MyMedia from "./MyMedia";

const Dashboard = (): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const handleClick = (component: any) => {
    setActiveComponent(component);
  };

  const handleMenu = () => {
    const navLinks = document.querySelector('.nav-links');

    if(navLinks) {
      navLinks.classList.toggle('top-[5%]');
    }
  }

  const handleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  }

  return (
    <div className="bg-gradient-to-t from-bbPink to-bbSky min-h-screen flex flex-col">
      {/*top navigation */}
      <nav className="bg-gray-200 flex gap-4 justify-between items-center">
        {/* logo */}
        <div className="flex gap-4 items-center">
          <div>
            <img className="w-16" src="/images/logo.png" alt="logo" />
          </div>
          <div className="logo">blue brain</div>
        </div>

        {/* navigation bar items */}
        <div className="nav-links duration-500 bg-gray-200 absolute w-full flex items-center min-h-[35vh] left-0 top-[-100%] md:static md:min-h-fit md:w-auto">
          <ul className="flex flex-col gap-10 md:flex-row">
            <li>
              <button className="btn" onClick={() => handleClick("Journal")}> My Journal </button>
            </li>
            
            <li>
              <button className="btn" onClick={() => handleClick("MoodTracker")}> My Mood Tracker </button>
            </li>

            <li>
            <button className="btn" onClick={() => handleClick("Meditation")}> My Meditation </button>
            </li>

            <li>
            <button className="btn" onClick={() => handleClick("Media")}> My Media </button>
            </li>
          </ul>
        </div>
        
        <div className="flex items-center">
          {/* dashboard menu */}
          <div className="cursor-pointer md:hidden">
            <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          {/* profile */}
          <div className="relative navbar-item">
            <button onClick={handleProfileDropdown} className="px-5 py-2.5 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>

            {/* profile dropdown menu */}
            <div className={`bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full right-0
                  ${
                    isProfileOpen ? "block" : "hidden"
                  }`}>
              <ul className="py-2 text-sm">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">My Profile</a>
                </li>
                
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* body */}
      <div className="pr-[15px] pl-[15px] pt-[15px] flex-1 overflow-y-auto">
        {(activeComponent === "Journal" && <MyJournal />)}
      </div>
    </div>
  );
};

export default Dashboard;
