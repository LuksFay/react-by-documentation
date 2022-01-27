import React from 'react';
import ReactDOM from 'react-dom';


class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLo
    
    
  }
}

function UserGreeting(props){
  return <h1>Welcome Back! 🤩</h1>;
} 
function GuestGreeting(props){
  return <h1>Please, sing up 🙏🏼 probando git</h1>;
}

function LoginButton(props){
  return (
    <button onClick={props.onClick}>
    Login
    </button>
    );
}

function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
    Logout
    </button>
    );
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);