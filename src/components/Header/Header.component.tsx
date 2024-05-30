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
    const [totalPrice, setTotalPrice] = useState<number>(0);
    
    function handleClickOpen() {
        setActive(true);
    }

    function handleClickClose() {
        setActive(false);
    }
    // Neste useEffect peço para ele ficar monitorando o cartItems toda vez que a página ser atualizada
    useEffect(() => {
        let total: number;
        // Nesta linha de código, uso a função reducer para cada elemento do cart
        
        total = cartItems.reduce((acc, current) => acc + parseFloat(current.price), 0)
        setTotalPrice(total);
        console.log(totalPrice)
        
        
    }, [cartItems]);

    const [isQtd, setQtd] = useState<number>(1);

    function handleButtonCount(operator: string, product: Product) {
        if (operator == "Subtrai") {
            isQtd > 1 ? setQtd(isQtd - 1) : removeFromCart(product.id)
        }
        if (operator == "Soma") {
            isQtd < 20 ? setQtd(isQtd + 1) : ""
        }
    }  

    return (
        <S.Header>
            <S.HeaderWrapper className='header'>
                <S.LogoWrapper>
                    <h1 className='header-title'>MKS</h1>
                    <p className='header-text'>Sistemas</p>
                </S.LogoWrapper>
                <S.CartWrapper onClick={() => handleClickOpen()}>
                    <i className="fa-solid fa-cart-shopping"></i>
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
                                            <button onClick={() => handleButtonCount("Subtrai", e)}>-</button>
                                            <span>{isQtd}</span>
                                            <button onClick={() => handleButtonCount("Soma", e)}>+</button>
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
                            <h1>R${totalPrice * isQtd}</h1>

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
