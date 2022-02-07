import "./style.css";
import { FaTrash } from "react-icons/fa";
import Button from '../Button/index';
import NoCard from '../../img/NoCard.svg';
import { useState } from "react";
const RightSide = ({listTransactions,setListTransactions,filtro,setFiltro}) => {
    const deleteTransaction = (idExclude) => setListTransactions(listTransactions.filter(({id}) => id !== idExclude));
    const [clickTodos  ,setClickTodos]   = useState(true);
    const [clickEntrada,setClickEntrada] = useState(false);
    const [clickDespesa,setClickDespesa] = useState(false);
    const handleFilter = (newFiltro) => {
        setFiltro(newFiltro);
        setClickTodos((newFiltro === "Todos")? true : false);
        setClickEntrada((newFiltro === "Entrada")? true : false);
        setClickDespesa((newFiltro === "Despesa")? true : false);
    }
    return (<>
        <nav>
            <span>Resumo financeiro</span>
            <div>
                <Button handle={handleFilter} param="Todos"   classe={(clickTodos)  ? "btn-primary" : "btn-grey"} text="Todos"   />
                <Button handle={handleFilter} param="Entrada" classe={(clickEntrada)? "btn-primary" : "btn-grey"} text="Entradas"/>
                <Button handle={handleFilter} param="Despesa" classe={(clickDespesa)? "btn-primary" : "btn-grey"} text="Despesas"/>
            </div>
        </nav>
        <section className="box--listTransactions">
            {(listTransactions.length > 0)? listTransactions.filter(({tipo}) => (filtro === "Todos")? tipo !== filtro : tipo === filtro).map(({id,descricao,valor,tipo}) => (
                <section className="listTransactions--card" key={id}>
                    <div className={(tipo === "Entrada")? "card--box-mark-entrada" : "card--box-mark-despesa"}></div>
                    <div className="card--box-desc-type">
                        <div className="box-desc-type--desc">{descricao}</div>
                        <div className="box-desc-type--type">{tipo}</div>
                    </div>
                    <div className="card--box-value-trash">
                        <div className="box-value-trash--value">
                            {Number(valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </div>
                        <Button classe="btn-grey box-value-trash--trash" handle={deleteTransaction} param={id} text={(<FaTrash/>)}/>
                    </div>
                </section>
            )): (<>
                <span className="span--vazio">Você ainda não possui nenhum lançamento</span>
                <img src={NoCard} alt=""></img>
            </>)}
        </section>
    </>);
}
export default RightSide;