import styled from "styled-components";

const Wrapper = styled.section`
width : 100vw;
min-height : 100vh;
margin : 10px;
color : white;
overflow : auto;

.logo{
display : flex;
justify-content : space-between;
}

.logoImage{
width : 50%;
height : auto;
}

.download{
width : 20px;
height : 20px;
margin : 40px 30px 0 0;
}

.seat-confirmation{
    img{
        width : 60px;
        height : 60px;
        padding-top : 30px;
        display : block;
        margin : auto;
    }
    h2{
        display : flex;
        justify-content : center;
    }
}
.details{
    margin-top : 50px;
    display : flex;
    align-text : center;
    justify-content : center;
    img{
        width : 200px;
        height : auto;
        border-radius : 10px;
    }
}

.guest-details{
line-height : 1px;
margin : 15px 10px 0;
p{
    font-size : 13px;
    color : #999
}
}

.user-detail{
    background-color : #333;
    border-radius : 15px;
    padding : 3px;
    margin-top : 25px;
    padding-left : 20px;
    margin-right : 10px;
    p{
        font-size : 13px;
        color : #999
    }
    .separator{
        border :none;
        border-top: 1px solid #444;
        margin: 20px auto;
        margin-right : 20px;
    }
}
.qr-code-canva{
background-color : white;
display : block;
padding : 20px;
margin : auto;
border-radius : 30px;
margin-bottom : 40px;
}

`

export default Wrapper