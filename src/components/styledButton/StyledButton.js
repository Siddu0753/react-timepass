import "./StyledButton.css";
function StyledButton(props) {
    const {text,onClick}=props
    return ( 
        <button className="StyledButton"onClick={onClick}>{text}</button>
     );
}

export default StyledButton;