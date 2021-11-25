import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { SwalError, SwalSuccess } from "../../utils/swalConfigs.js"

import logo from '../../assets/letter-logo.png'

//import "./styles.css"
import api from "../../services/api";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async e => {
    e.preventDefault();
    if (!name || !email || !password) {
      Swal.fire(SwalError('Preencha todos os dados para se cadastrar', 'Confirmar'))
    } else {
      try {
        await api.post("/users", { name, email, password });
        Swal.fire(SwalSuccess('Usuário cadastrado com sucesso.'))
        navigate('/signin');
      } catch (err) {
        Swal.fire(SwalError('Ocorreu um erro ao registrar sua conta.', 'Confirmar'))
      }
    }
  };

  return (
    <div className="Container">
      <div id="page-auth">
        <aside>

        </aside>
        <main>
          <div className="main-content">
            <form className="Form" onSubmit={handleSignUp}>
              <img className="letterSignin" src={logo} alt="AnEx" />
              <div className="textSignin">

                <strong>A plataforma de animes certa para você.</strong>
                <p>Junta-se a nós e assista seus animes preferidos em ótima qualidade.</p>

              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  className="form-control"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Endereço de e-mail"
                  className="form-control"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Senha"
                  className="form-control"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" type="submit">Cadastrar grátis</button>
              <hr />
              <Link className="createAccount" to="/signin">Fazer login</Link>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;