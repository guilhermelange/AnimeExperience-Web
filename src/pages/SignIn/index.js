import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import api from "../../services/api";
import { login, GOOGLE_CLIENT_ID } from "../../services/auth";
import { SwalError } from "../../utils/swalConfigs.js"
import GoogleLogin from 'react-google-login';
import "../../styles/pages/signIn.css"

import logo from '../../assets/letter-logo.png'
//import spanRight from '../../assets/spanright.png'

const SignIn = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire(SwalError('Preencha e-mail e senha para continuar!', 'Confirmar'));
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        navigate('/');
      } catch (err) {
        Swal.fire(SwalError('Usuário ou senha incorretos.', 'Confirmar'));
      }
    }
  };
  
  const handleFailureGoogle = result => {
    console.log(GOOGLE_CLIENT_ID)
    console.log(result)
    Swal.fire(SwalError('Erro ao autenticar!', 'Confirmar'));
  }

  const handleLoginGoogle = async googleData => {
    const {profileObj:{email, givenName, familyName, googleId:password, imageUrl:avatar}} = googleData;
    const name = `${givenName} ${familyName}`.trim();
    try {
      await api.post("/users", { name, email, password, avatar });
    } catch {
      console.log('SignUp already registered');
    }
    
    try {
      const response = await api.post("/sessions", { email, password, google: true});
      login(response.data.token);
      navigate('/');
    } catch (error) {
      Swal.fire(SwalError('Erro ao logar!.', 'Confirmar'));
    }


  }

  return (
    <div className="Container">
      <div id="page-auth">
        <aside>

        </aside>
        <main>
          <div className="main-content">
            <form className="Form" onSubmit={handleSignIn}>
              <img className="letterSignin" src={logo} alt="AnEx" />
              <div className="textSignin">

                <strong>A plataforma de animes certa para você.</strong>
                <p>Junta-se a nós e assista seus animes preferidos em ótima qualidade.</p>

              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="informe seu endereço de e-mail"
                  className="form-control"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="insira sua senha"
                  className="form-control"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button className="btn btn-primary" type="submit">Entrar</button>

              <div className="separator">
                ou
              </div>
              <GoogleLogin
                className="googleButton"
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login com Google"
                onSuccess={handleLoginGoogle}
                onFailure={handleFailureGoogle}
                cookiePolicy={'single_host_origin'}
              />
              

              <hr />
              <Link className="createAccount" to="/signup">Criar conta grátis</Link>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignIn;