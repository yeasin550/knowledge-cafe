import React from 'react';
const Header = () => {
    return (
      <div className="flex justify-between items-center mt-8">
        <div>
          <h3 className="text-3xl font-bold">Knowledge Cafe</h3>
        </div>
        <div className="decoration-none">
          <a className="ml-10" href="/Home">
            Home
          </a>
          <a className="ml-10" href="/Blog">
            Blog
          </a>
          <a  className="ml-10" href="/Login">Login</a>
        </div>
      </div>
    );
};

export default Header;