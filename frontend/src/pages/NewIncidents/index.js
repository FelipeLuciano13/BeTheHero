import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import logo from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function NewIncidents(){
  const [title, setTitle] =useState('');
  const [description, setDescription] =useState('');
  const [value, setValue] =useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId')

  async function handleNewIncidents(e){
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try{
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');
      
    }catch(err){
      alert("Erro ao inserir novo caso, tente novamente")
    }
  }

  return(
    <div className="newincident-container">
      <div className="content">
        <section className="section-container">
          <img src={logo} alt="Be The Hero"/>

          <h1>Cadastrar novo casa</h1>
          <p>Descrever o caso detalhadamente para encontrar um herói para resolver isso</p>

          <Link className="backlink" to="/profile" >
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncidents}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <div className="button-container">
            <Link className="cancel-button" to="/profile">Cancelar</Link>
            <button className="button" type="submit">Cadastrar</button>
          </div>

        </form>
      </div>
    </div>
  );
}