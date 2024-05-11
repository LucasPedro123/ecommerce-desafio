import * as S from './Header.style'; // Importando os estilos com o alias 'S'

const Header = () => {
    return (
        <S.HeaderWrapper> 
            <S.LogoWrapper>
                <h1 className='header-title'>MKS</h1>
                <p className='header-text'>Sistemas</p>
            </S.LogoWrapper>
            <S.CartWrapper>
                <i className="fa-regular fa-cart-shopping"></i>
                <p className='cart-text'>0</p>
            </S.CartWrapper>
        </S.HeaderWrapper>
    )
}

export default Header;
