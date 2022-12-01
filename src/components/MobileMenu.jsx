import React from "react";

function MobileMenu() {
  return (
    <footer className="mobile__bottom__menu">
      <ul className="mobile__menu t__trans__upper">
        <li className="list__item active">
          <i className="fa-solid fa-house mr__half"></i>
          Hame
        </li>

        <li className="list__item ">
          <i className="fa-regular fa-folder-open mr__half"></i>
          RESOURCES
        </li>

        <li className="list__item ">
          <i className="fa-sharp fa-solid fa-id-card mr__half"></i>
          About me
        </li>
      </ul>
    </footer>
  );
}

export default MobileMenu;
