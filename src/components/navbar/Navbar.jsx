import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import github from "/github.png";
import linkedin from "/linkedin.png";
import leetcode from "/leetcode.png";
import facebook from "/facebook.png";
import youtube from "/youtube.png";



const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="content">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            👋Hello there!
          </motion.span>
          <div className="social">
            <a href="https://github.com/rahul-ramesh-chandra">
              <img src={ github } alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/rahul-ramesh-chandra/">
              <img src={ linkedin } alt="LinkedIn" />
            </a>
            <a href="https://leetcode.com/u/rahulrameshchandra/">
              <img src={ leetcode } alt="LeetCode" />
            </a>
            <a href="https://www.facebook.com">
              <img src={ facebook } alt="Facebook" />
            </a>
            <a href="https://www.youtube.com">
              <img src={ youtube } alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
