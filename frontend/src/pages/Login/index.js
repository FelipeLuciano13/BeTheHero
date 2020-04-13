import React, {useState} from "react";
import  {FiLogIn} from "react-icons/fi"
import {Link, useHistory} from "react-router-dom"

import HeroesImg from "../../assets/heroes.png"
import logo from "../../assets/logo.svg"

import api from "../../services/api"

import "./styles.css"

export default function Login(){

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const res = await api.post('session', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', res.data.name)

      history.push('profile')
    }catch(err){
      alert('Falha no login, tente novamente')
    }
  }

  return(
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input 
            placeholder="Sua ID"
            value= {id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="backlink" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={HeroesImg} alt="Heroes"/>
    </div>
  );
}