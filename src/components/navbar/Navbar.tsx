import ninjaWhite from "../../assets/ninjaWhite.svg";
import ninjaBlack from "../../assets/ninjaBlack.svg";
import { Sling as HamburgerSling } from 'hamburger-react';
import { useState } from "react";
import useTheme from "../../hooks/useTheme";
import Search from "./Search";
import NavbarLinks from "./NavbarLinks";


const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <nav className="flex p-1 items-center bg-emerald-950 sticky top-0 z-50">
            <LogoToggle />
            <Hamburger open={isOpen} setIsOpen={setIsOpen} />
            <NavbarLinks open={isOpen} />
            <Search />
        </nav>
    );
};
export default Navbar;



type HamburgerProps = {
    open: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ open, setIsOpen }: HamburgerProps) => {
    
    return (
        <div className="md:hidden name:hamburger">
            <HamburgerSling toggled={open} toggle={setIsOpen} />
        </div>
    );
};

const LogoToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "dark" 
            ?   <img 
                    src={ninjaBlack} alt="Logo" 
                    className="w-16 hover:scale-125 transition"
                />
            :   <img 
                    src={ninjaWhite} alt="Logo" 
                    className="w-13 ml-2 hover:scale-125 transition"
                />
            }
        </button>
    );
};
