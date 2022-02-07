import { useState } from "react";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";
import "./style.css";
const Main = () => {
        const [listTransactions ,setListTransactions] = useState([]);
        const [filtro,setFiltro] = useState("Todos");
        return (
            <main>
                <section className="left-side">
                    <LeftSide listTransactions={listTransactions} setListTransactions={setListTransactions} filtro={filtro}/>
                </section>
                <section className="right-side">
                    <RightSide listTransactions={listTransactions} setListTransactions={setListTransactions} filtro={filtro} setFiltro={setFiltro}/>
                </section>
            </main>
        );
}
export default Main;