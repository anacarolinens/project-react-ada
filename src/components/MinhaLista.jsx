import { useEffect, useState } from 'react'

const minhaLista = [
    { id: '1', value: 'Item 1' },
    { id: '2', value: 'Item 2' },
    { id: '3', value: 'Item 3' },
    { id: '4', value: 'Item 4' },
    { id: '5', value: 'Item 5' },   
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        if (pesquisa) {
            const resultados = minhaLista.filter((item) => {
                return item.value.toLowerCase().includes(pesquisa.toLowerCase());
            });
            setProdutos(resultados);  // Corrigido para setar o estado com os resultados
        } else {
            setProdutos(minhaLista);
        }
    }, [pesquisa]);

    return (    
    
    <div>
        <h1>Efeitos Colaterais</h1>
        <input 
        value={pesquisa} onChange={(e) => {setPesquisa(e.target.value)}}
        placeholder='Pesquise aqui...' />
        {produtos.map( (item) => {
            return (
                <div key={item.id}>
                    <h4 >{item.value}</h4>
                </div>
                )
            })}
    </div>
    )

}