
import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';

export default function Navbar() {

    let activeStyle = {color:"#DB8521",borderBottom:"1px solid #DB8521"}
    let activePage = window.location.pathname;

    

  return (
      <div className={classes.navbar}>
          <div className={classes.logo} >
              GYM BOX
          </div>
          <ul className={classes.links}>
              <li>{activePage === "/" ?  <Link className={classes.link} style={activeStyle} to='/'>Accueil</Link> :  <Link className={classes.link} to='/'>Accueil</Link>  }</li>
              <li>{activePage === "/courses" ?  <Link className={classes.link} style={activeStyle} to='/courses'>Cours</Link> :  <Link className={classes.link} to='/courses'>Cours</Link>  }</li>
              <li>{activePage === "/planning" ?  <Link className={classes.link} style={activeStyle} to='/planning'>Planning</Link> :  <Link className={classes.link} to='/planning'>Planning</Link>  }</li>
              <li>{activePage === "/blogs" ?  <Link className={classes.link} style={activeStyle} to='/blogs'>Blogs</Link> :  <Link className={classes.link} to='/blogs'>Blogs</Link>  }</li>
              <li>{activePage === "/packs" ?  <Link className={classes.link} style={activeStyle} to='/packs'>Packs</Link> :  <Link className={classes.link} to='/packs'>Packs</Link>  }</li>
          </ul>
          <div className={classes.button}>
              <Button content="Tarifs" link="/tarifs" />

          </div>

      </div>
  );
}
