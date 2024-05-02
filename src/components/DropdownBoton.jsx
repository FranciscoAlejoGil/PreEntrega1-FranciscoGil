import { useState } from 'react';
import { Link } from 'react-router-dom';


const DropdownBoton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = () => {
        setIsOpen(false);
    };

    return (
    <div className="relative inline-block text-left z-50">
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" text-white font-bold-normal inline-flex rounded-md focus:outline-none hover:scale-110 transition md:text-sm lg:text-lg"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
        >
        Productos
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        >
        <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.28z"
        />
        </svg>
    </button>

    {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-200 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
            <Link to={"/productos"} className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-300 hover:text-zinc-700" role="menuitem" onClick={handleOptionClick}>Todos los Productos</Link>
            <Link to={"/categoria/buzos"} className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-300 hover:text-zinc-700" role="menuitem" onClick={handleOptionClick}>Buzos</Link>
            <Link to={"/categoria/remeras"} className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-300 hover:text-zinc-700" role="menuitem" onClick={handleOptionClick}>Remeras</Link>
            <Link to={"/categoria/pantalones"} className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-300 hover:text-zinc-700" role="menuitem" onClick={handleOptionClick}>Pantalones</Link>
            <Link to={"/categoria/bermudas"} className="block px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-300 hover:text-zinc-700" role="menuitem" onClick={handleOptionClick}>Bermudas</Link>
        </div>
        </div>
    )}
    </div>
);
};

export default DropdownBoton;