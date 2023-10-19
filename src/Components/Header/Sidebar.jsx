import React from 'react';
import './Sidebar.css';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}>X</button>
      <div>Link 1</div>
      <div>Link 2</div>
      <div>Link 3</div>
    </div>
  );
}

export default Sidebar;
