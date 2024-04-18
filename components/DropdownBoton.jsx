import { useState } from 'react';
import { Link } from 'react-router-dom';


const DropdownBoton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionClick = () => {
        setIsOpen(false);
    };

    return (
    <div className="relative inline-block text-left">
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-md text-black font-bold-normal inline-flex rounded-md px-4 focus:outline-none"
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
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
            <Link to={"/productos"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleOptionClick}>Todos los Productos</Link>
            <Link to={"/category/men's clothing"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleOptionClick}>Hombre</Link>
            <Link to={"/category/women's clothing"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleOptionClick}>Mujer</Link>
            <Link to={"/category/jewelery"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleOptionClick}>Joyeria</Link>
            <Link to={"/category/electronics"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={handleOptionClick}>Electronica</Link>
        </div>
        </div>
    )}
    </div>
);
};

export default DropdownBoton;