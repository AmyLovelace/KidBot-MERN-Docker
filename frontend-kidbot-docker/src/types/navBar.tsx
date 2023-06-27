import React from 'react';

interface NavbarProps {
  appName: string;
}

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand fs-2" href="/">
            {appName}
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                Sobre nosotros
              </a>
            </li>
          </ul>
          <button className="btn btn-success opacity-50" type="button">
            Perfil
          </button>
        </div>
      </nav>
    );
  };
  

export default Navbar;
