import { useState } from "react";
import styles from '../button.module.css'

export default function MeuContador() {

    console.log('Renderizando o componente MeuContador')

    const [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    }

    function diminuir  () {
        setContador(contador - 1);
    }

    if (contador > 5) {
        return (
            <div>
                <h1>Valor muito alto!</h1>
                <button className={styles.myButton} onClick={() => aumentar()}>aumentar</button>
                <button  className={styles.myButton} onClick={() => diminuir()}>diminuir</button>
            </div>
        )
    }

    return(
        // <div>
        //     <h1>Meu contador: {contador}</h1>
        //     { contador > 2 ? <h2>Valor muito pequeno</h2> : null}
        //     <button  onClick={() => aumentar()}>aumentar</button>
        // </div>
        <div className="container">
            <h1>Meu contador: {contador}</h1>
            <button className={styles.myButton} onClick={() => aumentar()}>aumentar</button>
            <button className={styles.myButton} onClick={() => diminuir()}>diminuir</button>
        </div>
    )
}