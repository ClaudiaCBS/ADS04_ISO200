
import React, { useState } from 'react';
import { TextField } from '../components/text-field';
import { PasswordField } from '../components/password-field';


const LoginForm: React.FC = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <>
        <h2>Página de Login</h2>
        <TextField nome='Nome do Usuário: ' setValor={setNomeUsuario} valor={nomeUsuario}></TextField>
        <PasswordField nome='Senha: ' setValor={setSenha} valor={senha}></PasswordField>
        <button>Entrar</button>
        </>
    );
};

export default LoginForm;
