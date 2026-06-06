import { NavLink } from "react-router-dom";


type NavbarLinkProps = { open: boolean };

const NavbarLinks = ({ open }: NavbarLinkProps) => {
    return (
        <div className="p-2">
            <ul className={`md:flex font-semibold
                ${open ? "flex" : "hidden"}`}
            >

                <li>
                    <NavLink to="/" className={({ isActive }) => 
                        `flex 
                        p-3 mx-2 rounded-md
                        transition

                        bg-(--color-accent)
                        text-(--color--text-on-accent)
                        hover:bg-(--color-surface)
                        hover:text-(--color-text)
                        ${isActive 
                            ? "text-(--color-text-on-accent) bg-(--color-accent-active)"
                            : ""
                        }`
                    }
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/cart" className={({ isActive }) => 
                        `flex 
                        p-3 mx-2 rounded-md
                        transition
                        bg-(--color-accent)

                        hover:bg-(--color-surface)
                        hover:text-(--color-text)
                        ${isActive 
                            ? "text-(--color-text-on-accent) bg-(--color-accent-active)"
                            : ""
                        }`
                    }
                    >
                        Cart
                    </NavLink>
                </li>

            </ul>
        </div>
    );
};
export default NavbarLinks;