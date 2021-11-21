import styled from "styled-components";
import {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {TextEditor} from "text-editor-react";

const Form = () => {
    const Wrapper = styled.div`
        width: 100%;
        height: 600px;
        border: 1px solid black;
        // text-align : center;
    `
    const {dark, light,  toggleTheme} = useContext(ThemeContext);

   if(light === true && dark === false) {
    return (
        <Wrapper>
            <div>
                <h1 style = {{margin: "auto", marginLeft: "400px", padding: "20px", borderBotton: "5px solid black"}}>Fill all the details </h1>
            </div>
            <form style = {{border: "7px solid orange", display: "grid", gridGap: "5px", width: "430px", padding: "20px", margin: "auto"}}>
                <div style = {{width: "400px", border: "1px solid black", padding: "10px", borderRadius: "10px"}}>
                    <label>First Name</label>
                    <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the first name" />

                </div>
                <div style = {{width: "400px", border: "1px solid black", padding: "10px", borderRadius: "10px"}}>
                    <label>Last Name</label>
                    <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the last name" />

                </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                    <label>Email</label>
                    <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the email" />

                </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                    <label>Password</label>
                    <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the Password" />

                </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                    
                    <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "submit" name = "firstname" value = "Submit" />

                </div>

            </form>
        </Wrapper>
    )
   }

   return (
    <Wrapper style = {{backgroundColor: "black", color: "white"}}>
        <div>
            <h1 style = {{margin: "auto", padding: "20px", borderBotton: "5px solid black"}}>Fill all the details </h1>
        </div>
        <form style = {{border: "7px solid orange", display: "grid", gridGap: "5px", width: "430px", padding: "20px", float: "left"}}>
            <div style = {{width: "400px", border: "1px solid black", padding: "10px", borderRadius: "10px"}}>
                <label>First Name</label>
                <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the first name" />

            </div>
            <div style = {{width: "400px", border: "1px solid black", padding: "10px", borderRadius: "10px"}}>
                <label>Last Name</label>
                <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the last name" />

            </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                <label>Email</label>
                <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the email" />

            </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                <label>Password</label>
                <input style = {{ width: "100%", height: "40px", border: "0px"}} type = "text" name = "firstname" placeholder = "Enter the Password" />

            </div><div style = {{width: "400px", border: "1px solid black",  padding: "10px", borderRadius: "10px"}}>
                
                <input style = {{ width: "100%", height: "40px", border: "0px", backgroundColor: "gray", color: "white"}} type = "submit" name = "firstname" value = "Submit" />

            </div>

        </form>
        <div style= {{backgroundColor: "white", width: "700px", float: "left", height: "500px"}}>
            <TextEditor  id = "someid" />
        </div>
    </Wrapper>
)

    
}

export {Form};