import React from "react";
import Mountains1 from "../Mountains/Mountains1/Mountains1";
import Mountains2 from "../Mountains/Mountains2/Mountains2";
import { BrowserRouter , Route , Switch } from "react-router-dom";



const Mountains =()=>{
    return(
        <>
     <BrowserRouter>
     <main>
         <Switch>
             <Route path="/Mountains1" component={Mountains1}>
                <Mountains1/>
             </Route>
             <Route path="/Mountains2" component={Mountains2}>
                 <Mountains2/>
             </Route>
         </Switch>
     </main>
     </BrowserRouter>

        </>
    )
}


export default Mountains;