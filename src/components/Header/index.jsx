import "./style.css";
import Button from "../Button";
import Nukenzie from "../../img/NuKenzie-black.png";
const Header = ({setScreen}) => {
    return (
        <header>
            <img alt='Logo' src={Nukenzie}></img>
            <Button classe="btn-grey" handle={setScreen} param={"LandingPage"} text="Inicio"/>
        </header>
    );
}
export default Header;