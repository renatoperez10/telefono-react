import {  useState } from "react"

function App() {
  const [numTelefono, setNumTelefono] = useState("");
  const [estaLlamando, setEstaLlamando] = useState(false);

  const numerosBotones = () => {
    let botones = [];
    for(let i = 1; i < 10; i++){
      botones.push(i)
    }
    return botones
  }

  const marcarNumero = (e) => {
    setNumTelefono(numTelefono + e.target.innerHTML)
  }
  const borrarNumero = () => {
    setNumTelefono(numTelefono.slice(0, -1))
  }


  return (
    <div class="contenedor">
      <span class="mensaje">Llamando...</span>
      <main class="telefono">
        <div class="botones">
          <ol class="teclado">
            {numerosBotones().map(nBoton => <li key={nBoton}><button onClick={marcarNumero} >{nBoton}</button></li>)}
            <li><button onClick={marcarNumero}>0</button></li>
            <li><button onClick={borrarNumero} class="big">borrar</button></li>
          </ol>
        </div>
        <div class="acciones">
          <span class="numero">{numTelefono}</span>
            {estaLlamando ? 
              <a href="colgar" class="colgar activo">Colgar</a>: 
              <a href="llamar" class="llamar">Llamar</a>
            }
        </div>
      </main>
    </div>
  );
}

export default App;
