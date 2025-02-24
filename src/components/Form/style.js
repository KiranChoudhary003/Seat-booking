import styled from "styled-components"

const Wrapper = styled.section`
margin : 0;
padding : 0;
height : 100vh;
width : 100vw;
max-width : 100%;
color : white;

.seat-book-form{
    border : 1.5px solid #aaa;
    border-radius : 20px;
    box-shadow : 5px 5px 10px rgba(12, 12, 12, 0.2);
    width : 90%;
    margin : 50% auto;
    h2{
        display : flex;
        justify-content : center;
    }
    .details{
        span{
            margin : 0 0 10px 20px;
        }
        input{
            width : 90%;
            box-sizing : border-box;
            padding : 5px;
            margin : 5px 0 20px 20px;
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
.user-info{ 
    display : flex;
    img{
        width : 8px;
        height : 8px;
        margin-left: 5px;
    }
}
    .dropdown {
      list-style: none;
      padding: 0;
      margin: 5px 20px;
      max-height: 200px;
      overflow-y: auto;
    }

    .dropdown li {
      background: rgb(180, 155, 228);
      color: white;
      padding: 8px 12px;
      margin: 5px 0;
      border-radius: 5px;
      cursor: pointer;
      text-align: center;
      transition: 0.3s;
    }

    .dropdown li:active {
      transform: scale(0.98);
    }
}
`
export default Wrapper