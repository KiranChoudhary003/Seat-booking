import styled from "styled-components"

const Wrapper = styled.section`
margin : 0;
padding : 0;
height : 100vh;
width : 100vw;
max-width : 100%;

.seat-book-form{
    border : 1.5px solid #aaa;
    border-radius : 10px;
    box-shadow : 5px 5px 10px rgba(12, 12, 12, 0.2);
    width : 95%;
    margin : 50% auto;
    h2{
        display : flex;
        justify-content : center;
    }
    .details{
        input{
            width : 97%;
            box-sizing : border-box;
            padding : 5px;
            margin : 5px;
            text-transform : capitalize;
        }
    }
    #submit{
        background :rgb(99, 27, 244);
        color : white;
        font-weight: bold;
        padding-bottum : 5px;

    }

    #submit:active {
        background:rgb(39, 1, 127);
        transform: scale(1); 
    }
    
    .qr-code{
        text-align : center;
        margin : 0;
    }

}
`
export default Wrapper