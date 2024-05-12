import * as S from './Header.style'; // Importando os estilos com o alias 'S'
import { useCartContext } from '../Context/CartContext'; // Importando o contexto do carrinho
import { useEffect, useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    photo: string;
}

const Header = () => {
    const { cartItems, removeFromCart } = useCartContext();
    const [active, setActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    function handleClickOpen() {
        setActive(true);
    }

    function handleClickClose() {
        setActive(false);
    }

    useEffect(() => {
        // Calcula o preço total ao carregar os itens ou sempre que o carrinho for alterado
        const calculateTotalPrice = () => {
            let total = 0;
            cartItems.forEach(item => {
                total += parseFloat(item.price); // Converte o preço para um número e adiciona ao total
            });
            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [cartItems]);

    

    return (
        <S.Header>
            <S.HeaderWrapper className='header'>
                <S.LogoWrapper>
                    <h1 className='header-title'>MKS</h1>
                    <p className='header-text'>Sistemas</p>
                </S.LogoWrapper>
                <S.CartWrapper onClick={() => handleClickOpen()}>
                    <i className="fa-regular fa-cart-shopping"></i>
                    <p className='cart-text'>{cartItems.length}</p> {/* Exibe o número de itens no carrinho */}
                </S.CartWrapper>

                <S.Sidebar className={active ? 'active' : ''}>
                    <S.SidebarWrapper>
                        <S.SidebarText>
                            <h1>Carrinho <br /> de compras</h1>
                            <i className="fa-solid fa-circle-xmark" onClick={() => handleClickClose()}></i>
                        </S.SidebarText>
                        <S.CartItemContent>
                            {cartItems.map((e: Product) =>
                                <S.CartItem key={e.id}>
                                    <img src={e.photo} alt="" />
                                    <S.CartName>{e.name}</S.CartName>
                                    <S.CartQtd>
                                        <p>Qtd: </p>

                                        <div>
                                            <button>-</button>
                                            <span>0</span>
                                            <button>+</button>
                                        </div>

                                    </S.CartQtd>
                                    <p>R${e.price}</p>
                                    {/* Btn remover cart */}
                                    <i className="fa-solid fa-circle-xmark close" onClick={() => { removeFromCart(e.id) }}></i>
                                </S.CartItem>
                            )}
                        </S.CartItemContent>
                    </S.SidebarWrapper>
                    <S.CartBuy>
                        <S.CartBuyText>
                            <h1>Total:</h1>
                            <h1>R${totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1> {/* Exibe o preço total com duas casas decimais e separador de milhares */}

                        </S.CartBuyText>
                        <S.CartBuyBtn>
                            Finalizar Compra
                        </S.CartBuyBtn>
                    </S.CartBuy>
                </S.Sidebar>
            </S.HeaderWrapper>
        </S.Header>
    );
}

export default Header;
