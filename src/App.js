import { useState } from "react"

function App() {
  const [numTelefono, setNumTelefono] = useState("");
  const [estaLlamando, setEstaLlamando] = useState(false);

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
      setNumTelefono(numTelefono + num + "")
    }
  }
  const borrarNumero = () => {
    setNumTelefono(numTelefono.slice(0, -1))
  }

  const llamarColgar = (e) => {
    e.preventDefault();
    setEstaLlamando(!estaLlamando);
  }

  return (
    <div class="contenedor">
      {estaLlamando ? <span class="mensaje">Llamando...</span> : ""}
      <main class="telefono">
        <div class="botones">
          <ol class="teclado">
            {numerosBotones().map(nBoton => <li key={nBoton}><button disabled={estaLlamando} onClick={() => marcarNumero(nBoton)} >{nBoton}</button></li>)}
            <li><button disabled={estaLlamando} onClick={borrarNumero} class="big">borrar</button></li>
          </ol>
        </div>
        <div class="acciones">
          <span class="numero">{numTelefono}</span>
          {estaLlamando ?
            <a onClick={llamarColgar} href="colgar" class="colgar activo">Colgar</a> :
            <a onClick={llamarColgar} href="llamar" class={`llamar ${numTelefono.length === 9 ? "activo" : ""}`}>Llamar</a>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
