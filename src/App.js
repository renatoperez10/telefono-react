import { useState } from "react"

function App() {
  const [numTelefono, setNumTelefono] = useState("");
  const [estaLlamando, setEstaLlamando] = useState(false);
  const [timer, setTimer] = useState(null);

  const numerosBotones = () => {
    let botones = [];
    for (let i = 1; i < 10; i++) {
      botones.push(i)
    }
    botones.push(0);
    return botones
  }

  const marcarNumero = (num) => {
    if (numTelefono.length < 9) {
      setNumTelefono(numTelefono + num)
    }
  }
  const borrarNumero = () => {
    setNumTelefono(numTelefono.slice(0, -1))
  }

  const llamar = (e) => {
    e.preventDefault();
    setEstaLlamando(true)
    setTimer(setTimeout(() => {
      setEstaLlamando(false);
    }, 5000))
  }

  const colgar = (e) => {
    e.preventDefault();
    setEstaLlamando(false)
    clearInterval(timer);
  }

  return (
    <div className="contenedor">
      {estaLlamando ? <span className="mensaje">Llamando...</span> : ""}
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {numerosBotones().map(nBoton => <li key={nBoton}><button disabled={estaLlamando} onClick={() => marcarNumero(nBoton)} >{nBoton}</button></li>)}
            <li><button disabled={estaLlamando} onClick={borrarNumero} className="big">borrar</button></li>
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numTelefono}</span>
          {estaLlamando ?
            <a onClick={colgar} href="colgar" className="colgar activo">Colgar</a> :
            <a onClick={llamar} href="llamar" className={`llamar ${numTelefono.length === 9 ? "activo" : ""}`}>Llamar</a>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
