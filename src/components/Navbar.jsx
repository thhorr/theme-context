import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";


const Navbar = () => {


    const {dark, light, toggleTheme} = useContext(ThemeContext);
    const handleClick = () => {
        toggleTheme(dark, light)
    }


    return (
        <div style = {{width: "100%", height: "80px", backgroundColor: "yellow", color : "black", fontWeight: "bolder"}}>
            <div></div>
            <div style = {{ display: "flex", flexWrap : "wrap", marginLeft: "700px", marginRight: "50px" }}>
                <div style = {{marginLeft: "50px", marginRight: "5px", padding: "30px"}}>Home</div>
                <div style = {{marginLeft: "50px", marginRight: "5px", padding: "30px"}}>About</div>
                <div style = {{marginLeft: "50px", marginRight: "5px", padding: "30px"}}>Login</div>
                <div onClick = {handleClick} style = {{marginLeft: "50px", marginRight: "5px", padding: "30px"}}>Change theme</div>
            </div>
        </div>
    )
}

export {Navbar};