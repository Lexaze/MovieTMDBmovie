import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  // Footer navigation links
  const footerColumns = [
    ["Audio Description", "Investor Relations", "Legal Notices"],
    ["Help Centre", "Jobs", "Cookie Preferences"],
    ["Gift Cards", "Terms of Use", "Corporate Information"],
    ["Media Centre", "Privacy", "Contact Us"],
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      url: "#",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      url: "#",
      icon: <FaTwitter />,
    },
    {
      name: "YouTube",
      url: "#",
      icon: <FaYoutube />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Social Media Icons*/}
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className={styles.socialLink}
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/*Footer Navigation*/}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerColumns.map((column, columnIndex) => (
            <ul key={columnIndex} className={styles.footerColumn}>
              {column.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        {/*Copyright */}
        <p className={styles.copyright}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
