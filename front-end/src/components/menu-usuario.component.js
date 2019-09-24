
import React, { useState, useEffect } from 'react';
 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./create-todo.component";
import { getUserId} from './services/auth';

  const MenuUser = props => {

  useEffect(() => {
    console.log(match.params.id)
  },[])  
  const url = "/useraccesslist/"+getUserId(); 
  const urlcriaracesso = "/criaracesso/"+getUserId();
  
  return (    
    <div className="container">  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collpase nav-collapse">
    <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to={urlcriaracesso} className="nav-link">Criar accesso</Link>
        </li> 
        <li className="navbar-item">
          <Link to={url} className="nav-link">Listar Acessos</Link>
        </li> 
           
        {/*
        <nav>
        <a href={"http://localhost:3000/useraccesslist/"+this.props.match.params.id}>Listar Acessos do Usuário</a>
        </nav>  
        */} 
      </ul>
    </div>
  </nav>

  <Route path="/" exact component={CreateTodo} />      
  </div>     
    ) 

  }
            
        
export default MenuUser;