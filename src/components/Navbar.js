// rfc , impt
import React, {useState} from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const [m1, am1] = useState('active');
  const [m2, am2] = useState('');

    const toggleAM1 = () => {
      if(m1 === 'active'){
        am1('');
        am2('active');
      }
      else{
        am1('active');
        am2('');
      }
    }

    const toggleAM2 = () => {
      if(m2 === 'active'){
        am2('');
        am1('active')
      }
      else{
        am2('active');
        am1('')
      }
    }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        {/* <a className="navbar-brand" href="#">
          {props.title}
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className= {`nav-link ${m1}`} onClick= {toggleAM1} aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className= {`nav-link ${m2}`} onClick= {toggleAM2} to="/about">
                {props.aboutText}
              </Link>

              {/* Removing about for deployment purposes
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}

            {/* Some EXTRA Buttons by Harry */}
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick = {()=> {props.toggleMode('primary')}} style= {{height: '30px', width : '30px', cursor: 'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick = {()=> {props.toggleMode('danger')}} style= {{height: '30px', width : '30px', cursor: 'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick = {()=> {props.toggleMode('success')}} style= {{height: '30px', width : '30px', cursor: 'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick = {()=> {props.toggleMode('warning')}} style= {{height: '30px', width : '30px', cursor: 'pointer'}}></div>
            </div> */}

          <div className= {`form-check form- text-${props.mode === 'light'? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick = {()=> {props.toggleMode('null')}}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
