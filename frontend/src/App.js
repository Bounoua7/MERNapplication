import { BrowserRouter, Route, Switch,Routes } from "react-router-dom";
import{ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';

import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <ToastContainer position="bottom-center" />
      <Switch>
        <Route exact path="/"> <Home />  </Route>
        <Route exact path="/home"> <Home />  </Route>
        <Route path="/add" > <AddEdit /> </Route>
        <Route path="/update/:id"  > <AddEdit/> </Route>
        <Route path="/view/:id" > <View />  </Route>
        <Route path="/about" > <About /> </Route>
      </Switch> 
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
