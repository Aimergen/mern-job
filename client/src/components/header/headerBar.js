import React,  { useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";     
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
    const navigate = useNavigate();
    const { getMe } = AuthContext();
    const [ me, setMe ] = useState({});

    useEffect(() => {
        initState();
    }, []);

    const initState = async () => {
        var res = await getMe();
        setMe(res);
    }



    return  (
        <div className="w-full rounded-xl py-6 px-6 bg-white">
                    <div className="flex justify-between items-center">
                        <div onClick={()=> navigate("/")} className="cursor-pointer">
                            <img src="https://papa.mn/wp-content/uploads/2023/05/vertical-001-4-2.png"  alt="Papa Logistic" className="h-10"/>
                        </div>
                        <div>
                            <div onClick={()=> navigate("/profile")} className="flex flex-row items-center cursor-pointer">
                                <div className="mr-2">
                                    <div id="tooltip-jese" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        <div className="tooltip-arrow" data-popper-arrow></div>
                                    </div>
                                    <img data-tooltip-target="tooltip-jese" className="w-10 h-10 rounded border" src="https://t3.ftcdn.net/jpg/03/39/45/96/360_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg" alt="Medium avatar" />
                                </div>
                                <div className="mr-10 grid grid-cols-1 content-center">
                                    <p className="text-secondary-700 font-semibold">{me.phone || "*******"}</p>
                                    <p className="text-sm text-gray-400">тээвэрлүүлэгч</p>
                                </div>
                                <span className="bg-gray-10text-sm font-semibold inline-flex items-center p-2 rounded-full bg-gray-100">
                                    <svg className="w-5 h-5 fill-secondary-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default HeaderBar;
