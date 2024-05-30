import { useQuery } from 'react-query';
import { useCartContext } from '../Context/CartContext'; 
import * as S from './Hero.style.tsx'; 
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    photo: string;
}

const Hero = () => {
    const { addToCart, removeFromCart } = useCartContext(); 
    const { cartItems } = useCartContext();
    const [ isActive, setActive ]= useState(false);

    const fetchProducts = async () => {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    };

  

    function handleProduct(product : any) {
        // o valor que estiver no isActive sempre será invertido quando essa função for chamado
        setActive((oldValue: boolean) => !oldValue)
        
        // Fazer tratamento: se for true, coloque no carrinho e, se falso, remove do carrinho.
        // Isso foi feito para tratar caso o botão ser clicado novamente.

        if (isActive == true) {
            addToCart(product)
            console.log("É true")
        } else {
            removeFromCart(product.id)
            console.log("É False")

        }
    }

    const { data, isLoading, isError } = useQuery('products', fetchProducts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <S.MainContainer>
            {data.products.map((product: Product) => (
                <S.MainCard key={product.id}>
                    <div>
                        <S.CardContent>
                            <S.CartImage src={product.photo} alt={product.name} />
                            <S.CardText>
                                <S.CardName>{product.name}</S.CardName>
                                <S.CardPrice>R${product.price}</S.CardPrice>
                            </S.CardText>
                        </S.CardContent>
                        <S.CardDescription>{product.description}</S.CardDescription>
                    </div>
                    <S.CardButton onClick={() => handleProduct(product)}>
                        {
                            cartItems.some(itemCart => itemCart.id === product.id)
                                // Renderizo o ícone CartCheck, se existir o elemento.
                                ? (<i className="fa-solid fa-check"></i>)
                                // Se não, renderizo o ícone CartPlus.
                                : (<i className="fa-solid fa-cart-plus"></i>)
                        }
                        
                        <span>Comprar</span>
                    </S.CardButton>
                </S.MainCard>
            ))}
        </S.MainContainer>
    );
}

export default Hero;
