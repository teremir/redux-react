import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import gravatar from "../util/gravatar.js";
import PropTypes from 'prop-types';
import { logoutRequest } from "../actions/";

import classNames from 'classnames';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  
  const hashUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  }
  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
      <header className={headerClass}>
        <Link to="/">
          <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
        <div className="header__menu">
          <div className="header__menu--profile">
          
                <img src={user.email ? gravatar(user.email) : userIcon} alt={user ? user.email : 'userIcon'} />
           
          
            <p>Perfil</p>
          </div>
          <ul>
            
            {hashUser ?
              <li><Link to="/">{user.name}</Link></li> 
              :
              null 
            }

            {
              hashUser ? 
              <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>  
              :
                <li><Link to="/login">Iniciar Sesión</Link></li>  
            }
            
          </ul>
        </div>
      </header>
    );
};

Header.propTypes  = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired
};

//export default Header;

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispacthToProps = {
  logoutRequest
}

export default connect(mapStateToProps, mapDispacthToProps)(Header);