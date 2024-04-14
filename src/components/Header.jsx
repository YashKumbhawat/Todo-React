import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="w-full m-1 flex justify-center items-center gap-9">
                <ul className="flex list-none">
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} text-2xl`}>
                            Todos
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to={'/Performance'} className={({ isActive }) => `${isActive ? 'text-orange-700' : 'text-gray-700'} text-2xl`}>
                            Performance
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
