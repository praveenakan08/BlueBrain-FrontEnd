import { useState } from "react";
import MyJournal from "./MyJournal";
const Dashboard = (): JSX.Element => {

    const [activeComponent, setActiveComponent] = useState(null);

    const handleClick = (component: any) => {
        setActiveComponent(component);
    };

    return <div className="bg-gradient-to-t from-bbPink to-bbSky min-h-screen">
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
            <div>
                <ul className="flex gap-10">
                    <li>
                        <button onClick={() => handleClick('Journal')}>
                            my journal
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleClick('Feat2')}>
                            feat2
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleClick('Feat3')}>
                            feat3
                        </button>
                    </li>

                    <li>
                        <button onClick={() => handleClick('Feat4')}>
                            feat4
                        </button>
                    </li>

                </ul>
            </div>

            {/* profile */}
            <div>
                profile
            </div>
        </nav>

        {/* body */}
        <div className="">
            {activeComponent === 'Journal' &&
                <MyJournal />
            }
        </div>
    </div>;
}

export default Dashboard;