
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Nav1 from './Components/nav1';




function App() {
  return (
    <div className="App ">
      <Nav1/>
    
         <h1>Welcome to Admin Portal</h1>
      
      
       <div className="container w-75 border border-5 border-dark mt-5"> 
  <BrowserRouter>
  
  <Routes>
   
  
          <Route exact path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read/>}> </Route>
          <Route path="/update" element={<Update />}> </Route>
  
  </Routes>
  </BrowserRouter>
  </div>
  </div> 

  );
}

export default App;