import { useEffect, useState } from "react"

    const tarefas = [
        {id: 1, title: 'Estudar React'},
        {id: 2, title: 'Ler livro de React'},
        {id: 3, title: 'Fazer exercícios'},
        {id: 4, title: 'Fazer desafio'},
    ]
export default function BuscandoDados() {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {

        async function buscarDados() {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
            const dados = await resposta.json();
            return dados;
        }
        buscarDados().then(res => setTarefas(res));

    }, [])
    
    return (
        <div>
            <h1>Buscando Dados</h1>
            <ol>
                { tarefas.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}