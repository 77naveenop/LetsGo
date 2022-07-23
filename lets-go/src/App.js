import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Mountains from './Components/Mountains/Mountains.jsx';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import { useState } from 'react';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar.jsx';

const App =()=>{
        

  const [sidebar, toggleSidebar] = useState(false)

        const handleToggleSidebar = () => toggleSidebar( value => ! value )
 
       return (
        <>
  
     <BrowserRouter>
     <main>
      <Navbar handleToggleSidebar={ handleToggleSidebar } />

      <Sidebar sidebar={ sidebar } handleToggleSidebar={ handleToggleSidebar }/>
         <Switch>

             <Route path="/" component={Home}/>
                
             
             <Route path="/Mountains"  component={Mountains}/>
                 
             
         </Switch>
     </main>
     </BrowserRouter>

       
     

      


    
        </>
       )
}

export default App;
