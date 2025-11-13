import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} TechEdu Learning Center — React Quiz App | Made with 💙 by
        Students
      </p>
    </footer>
  );
};

export default Footer;