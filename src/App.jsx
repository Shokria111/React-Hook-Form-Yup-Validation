import { useState } from 'react'
import './App.css'
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm";

function App() {
  const [count, setCount] = useState(0);
  const [tab, setTab]= useState("login");

  const header = tab === 'login' ?
    {
      title: 'Welcome back',
      subtitle: 'Use your email & password to login'
    } :
    {
      title: "Create your account",
      subtitle: "Register and unlock the world of opportunites",
    };
  


  return (
      <div className='container'>
        <div className="card">
          <div className="header">
            <h1 className="title">{header.title}</h1>
            <p className="subtitle">{header.subtitle}</p>
          </div>
          
          <div className="tabs">
            <button className="tabBtn"
              role="tab"
              aria-selected ={tab === 'login'} 
              onClick= {() =>setTab('login')}
              type="button"
            >
              Login
            </button>

            <button
              className='tabBtn'
              aria-selected = {tab === "register"}
              onClick= {() =>setTab("register")}
              type="button"
            >
              Register
            </button>
          </div>

          <div className="content">
            {tab === "login" ? 
              (<LoginForm onSwitchToRegister={()=>setTab('register')}></LoginForm>)
               :
              (<RegisterForm onSwitchToLogin={() => setTab("login")}></RegisterForm>) }
          </div>
        </div>
      </div>  
  );
}

export default App
