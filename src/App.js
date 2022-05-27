import './App.css';
// import Crud from './components/Crud';
import Router from './components/Router';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Mounting from './components/Mounting';
import Updating from './components/Updating';
import Unmounting from './components/Unmounting';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Router />}>
        <Route path="Mounting" element={<Mounting />} />
        <Route path="Updating" element={<Updating />} />
        <Route path="Unmounting" element={<Unmounting />} />
      </Route>
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;
