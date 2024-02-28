import React, { Component } from 'react';
import './Style.css';
import { MenuData } from './MenuData';
import { HiMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

class Navbar extends Component {
  state = { clicked: false };

  handleClick =() =>{
    this.setState({clicked: !this.setState({clicked: !this.state.clicked})})
  }


  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='logo'>
          Exemplary AI
        </h1>
        <div className='menu-icons' onClick={this.handleClick}>
        
          <i className={this.state.clicked ? 'fas fa-times' : "fas fa-bars" }>
            {this.state.clicked ? <FaTimes /> : <HiMenuAlt3 />}
          </i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active ": "nav-menu"}>
          {MenuData.map((_item, _index)=>{
            return(
              <li key={_index}>
                <a href={_item.url} className={_item.cName}>
                  {_item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
