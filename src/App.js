import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import icon from "./imagenes/icon.png";
import {useState} from "react";

function App() {
  const [numClics, setNumClics] = useState(0);
  //agregar interactividad
  const manejarClic= () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = ()=> {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-contendedor'>
      <p>CONTADOR DE CLICKS</p>
      <img
        className='logo'
        src={icon}
        alt="icon"
      /></div>
      <div className='contenedor-principal'>
      <Contador numClics={numClics} />
        <Boton
          texto="Click"
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
