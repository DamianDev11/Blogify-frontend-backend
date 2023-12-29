import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearAuth } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/authSlice";
import { Facebook, Linkedin, Twitter, Instagram, ZoomIn } from "lucide-react";
import navbarStyle from "./Navbar.module.css";

const Navbar = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  return (
    <nav className={navbarStyle.topbar}>
      <div className={navbarStyle.topLeft}>
        <i className={navbarStyle.topIcon}>
          <Facebook />
        </i>

        <i className={navbarStyle.topIcon}>
          <Twitter />
        </i>
        <i className={navbarStyle.topIcon}>
          <Linkedin />
        </i>
        <i className={navbarStyle.topIcon}>
          <Instagram />
        </i>
      </div>
      <div className={navbarStyle.topCenter}>
        <ul className={navbarStyle.topList}>
          <li className={navbarStyle.topListItem}>
            <Link className={navbarStyle.link} to="/">
              Home
            </Link>
          </li>
          <li className={navbarStyle.topListItem}>
            <Link className={navbarStyle.link} to="/all">
              All Posts
            </Link>
          </li>
          <li className={navbarStyle.topListItem}>
            <Link to="/create-post" className={navbarStyle.link}>
              Create Post
            </Link>
          </li>
          <li className={navbarStyle.topListItem}>
            <Link to="/about" className={navbarStyle.link}>
              About Us
            </Link>
          </li>
          <li className={navbarStyle.topListItem}>
            <Link to="/contact" className={navbarStyle.link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className={navbarStyle.topRight}>
        {user ? (
          <ul className={navbarStyle.topList}>
            
            <li className={navbarStyle.topListItem}>
              <img
                className={navbarStyle.topImage}
                src={user.profilePic}
                alt={user.name}
              />
              <Link className={navbarStyle.link} to="/logout" onClick={() => dispatch(clearAuth())}>
                  Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className={navbarStyle.topList}>
            <li className={navbarStyle.topListItem}>
              <Link className={navbarStyle.link} to="/login">
                Login
              </Link>
            </li>
            <li className={navbarStyle.topListItem}>
              <Link className={navbarStyle.link} to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className={navbarStyle.topSearchIcon}>
          <ZoomIn />
        </i>
      </div>
    </nav>
  );
};

export default Navbar;
