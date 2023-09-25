import * as React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import './navbar.scss';
import { Link } from "react-router-dom";


const Navbar = () => {
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.1 },
        tap: { scale: 0.9 },
    };

    const constraintsRef = useRef(null);

    return (
        <nav className="navbar">
            <motion.ul className="navbar-list" ref={constraintsRef}>
                <motion.li

                    className="navbar-item"
                    variants={buttonVariants}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    drag
                    dragConstraints={constraintsRef}
                >
                    <Link to="/">Accueil</Link>
                </motion.li>
                <motion.li
                    className="navbar-item"
                    variants={buttonVariants}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    drag
                    dragConstraints={constraintsRef}
                >
                    <Link to="/">Accueil</Link>
                </motion.li>
                <motion.li
                    className="navbar-item"
                    variants={buttonVariants}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    drag
                    dragConstraints={constraintsRef}
                >
                    <Link to="/">Accueil</Link>
                </motion.li>
            </motion.ul>
        </nav>
    );
};

export default Navbar;
