import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Mountains from './Components/Mountains/Mountains.jsx';
import Forests from './Components/Forests/Forests';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { useState } from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Login from './Auth/Login/Login.jsx';
import Signup from './Auth/Signup/Signup'

const App =()=>{
        

  const [sidebar, toggleSidebar] = useState(false)

        const handleToggleSidebar = () => toggleSidebar( value => ! value )
 
       return (
        <>
  
     <BrowserRouter>
    
      <Navbar handleToggleSidebar={ handleToggleSidebar } />

      <Sidebar sidebar={ sidebar } handleToggleSidebar={ handleToggleSidebar }/>
         <Switch>

             <Route  exact path="/" component={Home}/>
             <Route path="/Mountains"  component={Mountains}/>
             <Route path="/Forest"  component={Forests}/>
             <Route path="/Login" component={Login}/>
             <Route path="/Signup" component={Signup}/>
                 
             
         </Switch>
     
     </BrowserRouter>
        </>
       )
}

export default App;
