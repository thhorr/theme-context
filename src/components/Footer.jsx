import styled from "styled-components";


const Footer = () => {
    const Wrapper = styled.div`
        width: 100%;
        border: 1px solid black;
        text-align: center;
        background-color: yellow;
        color: black;
        font-weight: bolder;
        padding: 20px;
    `
    return (
        <Wrapper>
           Dummy Footer
        </Wrapper>
    )
}

export {Footer};