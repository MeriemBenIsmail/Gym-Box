import React from 'react';
import classes from './navbar.module.css';
import { Link , useParams } from 'react-router-dom';
import Button from '../../UI/button/Button';

export default function Navbar(props) {

    let activeStyle = {color:"#DB8521",borderBottom:"1px solid #DB8521"}
    let activePage = window.location.pathname;
    let { id } = useParams();

  return (
      <div className={classes.navbar} style={{backgroundColor:props.background}}>
          <div className={classes.logo} style={{color:props.logo_color}} >
              GYM BOX
          </div>
          <ul className={classes.links}>
              <li>{activePage === "/" ?  <Link className={classes.link} style={activeStyle} to='/'>Accueil</Link> :  <Link style={{color:props.link_color}} className={classes.link} to='/'>Accueil</Link>  }</li>
              <li>{activePage === "/courses" ?  <Link className={classes.link} style={activeStyle} to='/courses'>Cours</Link> :  <Link style={{color:props.link_color}} className={classes.link} to='/courses'>Cours</Link>  }</li>
              <li>{activePage === "/planning" ?  <Link className={classes.link} style={activeStyle} to='/planning'>Planning</Link> :  <Link style={{color:props.link_color}} className={classes.link} to='/planning'>Planning</Link>  }</li>
              <li>{activePage === "/blogs" || activePage === "/blogs/"+{id}.id ?  <Link className={classes.link} style={activeStyle} to='/blogs'>Blogs</Link> :  <Link style={{color:props.link_color}} className={classes.link} to='/blogs'>Blogs</Link>  }</li>
              <li>{activePage === "/packs" ?  <Link className={classes.link} style={activeStyle} to='/packs'>Packs</Link> :  <Link style={{color:props.link_color}} className={classes.link} to='/packs'>Packs</Link>  }</li>
          </ul>
          <div className={classes.button}>
              <Button content="Tarifs" link="/tarifs" />

          </div>

      </div>
  );
}
