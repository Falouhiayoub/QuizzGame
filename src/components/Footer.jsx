import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} TechEdu Learning Center — All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;