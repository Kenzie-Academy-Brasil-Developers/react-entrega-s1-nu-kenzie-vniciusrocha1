import './style.css';
const Button = ({handle = () => {},param='',text='Button',classe='btn-grey'}) => (
    <button className={classe} onClick={() => handle(param)}>{text}</button>
);
export default Button;