import { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import { useAuth } from "../../Context/useAuth";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openProfilePath, setOpenProfilePath] = useState(null);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isProfileOpen = openProfilePath === location.pathname;

  //for blur effect on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    setOpenProfilePath(null);
    signOut();
    navigate("/signin", { replace: true });
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* logo here */}
        <Link to="/" aria-label="StreamHub home">
          <img className={styles.logo} src={logo} alt="StreamHub" />
        </Link>
        {/* navigation links */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv-shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navLink} to="/languages">
            Browse by Languages
          </Link>
        </nav>
        {/* right-side elements */}
        <div className={styles.rightSide}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notification */}

          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* User Profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() =>
                setOpenProfilePath(isProfileOpen ? null : location.pathname)
              }
              className={styles.profileButton}
              aria-label="Open profile menu"
              aria-expanded={isProfileOpen}
            >
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>

              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu} role="menu">
                {user ? (
                  <>
                    <Link
                      className={styles.profileMenuItem}
                      to="/account"
                      role="menuitem"
                    >
                      Account
                    </Link>
                    <button
                      className={styles.profileMenuItem}
                      onClick={handleSignOut}
                      role="menuitem"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    className={styles.profileMenuItem}
                    to="/signin"
                    role="menuitem"
                  >
                    Sign In
                  </Link>
                )}
                <Link className={styles.profileMenuItem} to="/help center">
                  Help Center
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
