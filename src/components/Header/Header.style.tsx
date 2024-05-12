import styled from 'styled-components';

// Definindo os componentes estilizados
export const Header = styled.header`
    width: 100vw;
  

`

export const HeaderWrapper = styled.div`
    display: flex;
    background-color: #0F52BA;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    height: 101px;
    
    justify-content: space-between;
    align-items: center;

    
    
    .active{
        transform: translateX(0%)
    }
`;

export const LogoWrapper = styled.div`
    padding-inline: 61px;
    display: flex;
    gap: 10px;
    color: #FFFFFF;
`;

export const CartWrapper = styled.div`
    width: 90px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 8px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-inline-end: 61px;
    cursor: pointer;
    i {
        color: black;
    }

    .cart-text {
        color: black;
    }

`;

export const Sidebar = styled.div`
    background-color: #0F52BA;
    width:486px;
    height: 100%;
    

    position: absolute;
    width: 486px;
    top: 0px;
    right:0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transform: translateX(120%);
    transition: 1.3s;

    z-index: 99;
    background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

`

export const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
   
`

export const SidebarText = styled.div`
    display: flex;
    justify-content: space-between;

    margin-block: 36px;
    margin-inline: 47px;

    i{
        font-size: 1.6em;
        color: #FFF;
        transition: 0.3s;
        cursor: pointer;
    }

    i:hover{
        color: #cccccc;

    }

    h1{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 27px;
        line-height: 33px;

        color: #FFFFFF;


    }
`

export const CartName = styled.p`
    font-size: 2px;
    background-color: #FFF;
`

export const CartItem = styled.div`
    display: flex;
    
    gap: 20px;
    align-items: center;

    width: 379px;
    height: 95px;
    background-color: #FFF;
    border-radius: 8px;
    margin-inline: auto;
    padding-inline: 24px;
    p{
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        color: #2C2C2C;
    }

    img{
        width: 60px;
        height:60px;
    }


    i{
        cursor: pointer;
        position: relative;

        height: 100%;
        right: -5px;
        top: -5px;
        font-size: 1.2em;
        transition: 0.5s;
    }

    i:hover{
        color: #232222;
    }

    


`

export const CartQtd = styled.div`
    display: grid;
    gap: 5px;

    p{
            font-weight: 400;
            font-size: 10px;
            line-height: 6px;
        }

    div{
        display: flex;
        align-items: center;
        justify-content: space-around;

        height: 19px;
        border-radius: 4px;
        border: #BFBFBF 2px solid;
    
       
    span{
        display: flex;
        font-size: 8px;
        padding-inline: 8px;
        align-items: center;
            height:11px;
            border-left: 2px solid #BFBFBF;
            border-right: 2px solid #BFBFBF;
        }

        button{
            padding-inline: 8px;
            cursor: pointer;
            border: none;
            transition: 0.5s;
        }

        button:hover{
            background-color: #e7e7e7
        }

    }
`
export const CartItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`

export const CartBuy = styled.div`
    button:is(:hover, :focus){
        background-color: #232222;
    }

`
export const CartBuyText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-inline: 50px;

    h1{
        font-style: normal;
        font-weight: 900;
        font-size: 28px;
        line-height: 15px;
        color: #FFFFFF;
    }

`
export const CartBuyBtn = styled.button`
margin-block-start: 42px;
    height: 90px;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: black;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    /* identical to box height, or 54% */

    color: #FFFFFF;
    transition: 0.5s


`