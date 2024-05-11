import styled from 'styled-components';

// Definindo os componentes estilizados
export const HeaderWrapper = styled.header`
    display: flex;
    background-color: #0F52BA;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    height: 101px;
    justify-content: space-between;
    align-items: center;
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

    i {
        color: black;
    }

    .cart-text {
        color: black;
    }
`;
