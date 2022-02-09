import "./style.css";
import Button from "../Button";
import { useState } from "react";
const LeftSide = ({listTransactions,setListTransactions,filtro}) => {
    const [id, newId] = useState(1);
    const submit = form =>{
        form.preventDefault();
        let dados = {id};
        for (const [name,value] of new FormData(form.target)) dados[name.split('--')[1]] = value;
        dados.valor = (dados.tipo === "Despesa") ? Number(dados.valor) * -1 : Number(dados.valor);
        setListTransactions([...listTransactions,dados]);
        newId(id + 1);
        form.target.reset();
    }
    return (<>
        <form className="leftside--form" onSubmit={event => submit(event)}>
            <div className="form--descricao">
                <label className="descricao--label">Descrição</label>
                <input className="input descricao--input" type="text" placeholder="Digite aqui sua descrição" name="txt--descricao"></input>
                <label className="descricao--ex">Ex: Compra de roupas</label>
            </div>
            <div className="form--valorFields">
                <div className="field valorFields--valor">
                    <label className="valor--label">Valor</label>
                    <input className="input valor--input" type="number" suffix="R$" placeholder="1                   R$" name="nbx--valor"></input>
                </div>
                <div className="field valorFields--tipo">
                    <label className="tipo--label">Tipo de Valor</label>
                    <select className="input tipo--select" name="cbx--tipo">
                        <option>Entrada</option>
                        <option>Despesa</option>
                    </select>
                </div>
            </div>
            <Button classe="btn-primary" text="Inserir valor"/>
        </form>
        {(listTransactions.length > 0)? (
            <div className="leftside--total">
                <span className="total--desc">Valor total:</span>
                <span className="total--value">{
                    listTransactions.filter(({tipo}) => (filtro === "Todos")? tipo !== filtro : tipo === filtro).reduce((acc,{valor}) => acc + Number(valor),0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
        ):(
            <div></div>
        )}
    </>)
}
export default LeftSide;