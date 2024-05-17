import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    margin-inline: 100px;
    margin-block: 30px;
    flex-wrap: wrap;
    gap: 22px;
    height: 100vh;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 217px;
    height: 285px;
`;

export const CardDescription = styled.p`
    margin-inline: 10px;
    margin-block-end: 12px;
    font-size: 10px;
    line-height: 12px;
    color: #2C2C2C;
`;

export const CardText = styled.div`
    margin-inline: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const CardName = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #2C2C2C;
    cursor: pointer;
`;

export const CardPrice = styled.p`
    background: #373737;
    border-radius: 5px;
    padding: 7px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    color: #FFFFFF;
`;

export const MainCard = styled.div`
    width: 217px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CartImage = styled.img`
    width: 111px;
    padding-block-start: 18px;
    padding-block-end: 14px;
`;

export const CardButton = styled.button`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 14px;
    border: none;
    background: #0F52BA;
    border-radius: 0px 0px 8px 8px;
    padding-block: 10px;
    color: white;
    cursor: pointer;
    z-index: 0;
    position: relative;
    bottom: 0;
    transition: 0.3s;
    i{
        font-size: 1.8em;

    }

    &:hover, &:focus {
        background: #0a3980;
    }
`;