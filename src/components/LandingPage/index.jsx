import "./style.css";
import landing from '../../img/landing.svg';
import NuKenzie from '../../img/NuKenzie-white.png';
import Button from "../Button";
const Home = ({setScreen}) => {
    return (
        <main className="landingPage">
            <section className="landingPage--left">
                <img className="left--NuKenzie" src={NuKenzie} alt=""/>
                <span className="left--text1">Centralize o controle das suas finanças</span>
                <span className="left--text2">de forma rápida e segura</span>
                <Button classe="left--button btn-primary" handle={setScreen} param="sistema" text="Iniciar"/>
            </section>
            <section className="landingPage--right">
                <img className="right--landing" src={landing} alt=""/>
            </section>
        </main>
    );
}
export default Home;