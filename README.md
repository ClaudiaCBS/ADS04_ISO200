<div align="center">

# ADS04_ISO200

Repositório para apresentar o projeto desenvolvido para a disciplina Sistemas Operacionais II.

## <a href="https://www.linkedin.com/in/fabiano-sabha-8661b4/" target="Sabha"> Professor Fabiano Sabha Walczak </a>



</div>

## :rocket: Tecnologias Utilizadas

As seguintes ferramentas, linguagens, bibliotecas e tecnologias foram usadas na construção desse projeto:

<table>
  <thead>
    <th><img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" /></th>
    <th><img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    alt="Alt text"
    title="React"
    style="display: inline-block; margin: 0 auto; width: 60px"></th>
    <th><img
    src="https://github.com/apiFatec/API-3-Semestre-Ionic/assets/112169639/8f7699b6-4ee3-4bfb-a761-f79faa45049d"
    alt="Alt text"
    title="Tailwind"
    style="display: inline-block; margin: 0 auto; width: 60px"></th>
     <th><img
    src="https://user-images.githubusercontent.com/89823203/190717820-53e9f06b-1aec-4e46-91e1-94ea2cf07100.svg"
    alt="Alt text"
    title="JavaScript"
    style="display: inline-block; margin: 0 auto; width: 60px"></th>
    <th><img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" /></th>
     <th><img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    alt="Alt text"
    title="TypeScript"
    style="display: inline-block; margin: 0 auto; width: 60px"></th>
     <th><img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
    alt="Alt text"
    title="Node.Js"
    style="display: inline-block; margin: 0 auto; width: 60px"></th>
  </thead>

  <tbody>
    <td>MySQL</td>
    <td>React</td>
    <td>Tailwind</td>
    <td>JavaScript</td>
    <td>NestJS</td>
    <td>Typescript</td>
    <td>Node.Js</td>
  </tbody>

</table>
    
<br>

## :rocket: Relatório do Projeto de Sistemas Operacionais II

### 1. Introdução

Neste relatório, explicarei como desenvolvi o Projeto Sistemas Operacionais II, atendendo aos requisitos obrigatórios e utilizando diversas tecnologias para implementar uma aplicação web funcional. A aplicação foi hospedada em uma máquina virtual na AWS, com acesso via SSH e HTTP, e utiliza o sistema operacional Linux (Debian).

### 2. Configuração da Máquina Virtual na AWS

Para começar, criei uma instância elegível para o nível gratuito da AWS utilizando o sistema operacional Debian. A configuração inicial envolveu os seguintes passos:

**1. Criação da Instância:**
   - Através do console da AWS, criei uma nova instância EC2 selecionando o sistema operacional Debian.

**2. Configuração de Acesso:**
   - Configurei a segurança da instância para permitir acessos SSH e HTTP.
   - Gereci as chaves SSH para garantir a segurança do acesso remoto.

### 3. Instalação de Serviços Essenciais

Com a instância configurada e acessível, instalei os seguintes serviços necessários:

**1. Servidor WWW – Apache:**
   ```bash
   sudo apt update
   sudo apt install apache2
   ```
   - Verifiquei o funcionamento acessando o endereço IP público da instância.

**2. Servidor de Banco de Dados – MySQL/MariaDB:**
   ```bash
   sudo apt install mysql-server
   ```
   - Configurei o banco de dados com um usuário e uma base de dados específicos para a aplicação.

**3. Outros Serviços:**
   - **HTOP:** Para monitoramento de recursos.
     ```bash
     sudo apt install htop
     ```
   - **Net Tools:** Para ferramentas de rede essenciais.
     ```bash
     sudo apt install net-tools
     ```
   - **Git:** Para controle de versão e deploy da aplicação.
     ```bash
     sudo apt install git
     ```

### 4. Desenvolvimento da Aplicação WEB

Dividi o projeto em backend e frontend utilizando as seguintes tecnologias:

- **Backend:** NestJS
- **Frontend:** React, DaisyUI, TailwindCSS
- **Banco de Dados:** MySQL


### 5. Funcionalidades da Aplicação

A aplicação web desenvolvida possui as seguintes funcionalidades principais:

**1. Tela de Login:**
   - Atributos: Email do Usuário e Senha.

**2. Tela de Cadastro de Usuário:**
   - Atributos: Nome do Usuário, Email do Usuário e Senha.

**3. Tela de Cadastro e Reserva de Salas:**
   - Atributos: ID da Reserva, Responsável pelo uso da Sala, Nome da Sala, Local da Sala, Data de uso, Hora Início do uso, Hora Final do uso, , Motivo do uso, Informações em geral, Convidados e Foto Ilustrativa da Sala.

**4. Tela Home e Barra de Navegação:**
   - Tela home contém 3 cards, cada um direcionando para uma página específica:
   - Card de Cadastrar Usuário.
   - Card de Cadastrar e Reservar Sala.
   - Card de Visualizar Salas Reservadas.
   - Barra de navegação tem 2 botões:
   - Botão Home: Direciona para a tela home com os três cards mencionados.
   - Botão Logout: Envia o usuário para a tela de login.

<br>


## :rocket: Abrindo o Projeto

**1° Passo -** para rodar o backend do projeto, você deve usar os comandos: 

```cmd
cd backend
npm install
```

**2° Passo -** você deve criar o arquivo .env e configurá-lo: 

```cmd
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
TOKEN_JWT=
```

**3° Passo -** digite o comando abaixo: 

```cmd
nest start
```

**4° Passo -** para rodar o frontend do projeto, você deve usar os comandos: 

```cmd
cd frontend
npm install
npm run dev
```

