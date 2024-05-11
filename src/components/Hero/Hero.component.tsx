import { useQuery } from 'react-query';
import './Hero.style.css'; // Importando os estilos com o alias 'S'


interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    photo: string;
    // Adicione outras propriedades conforme necessário
}

const Hero = () => {
    const fetchProducts = async () => {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return response.json();
    };

    const { data, isLoading, isError } = useQuery('products', fetchProducts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    return (
        <main className='main-container'>
            {data.products.map((product: Product) => ( // Aqui definimos o tipo explícito para 'product'
                <div className='main-card' key={product.id}>
                    <div>
                        <div className='card-content'>
                                <img src={product.photo} className='cart-image' alt="" />
                                <div className='card-text'>
                                    <p className='card-name'>{product.name}</p>
                                    <p className='card-price'>R${product.price}</p>
                                </div>
                        </div>
                        <p className='card-description'>{product.description}</p>

                    </div>

                    <button className='card-btn'>
                        <i className="fa-solid fa-bag-shopping"></i>
                        <span>Comprar</span>
                    </button>
                    {/* Renderizar outros detalhes do produto conforme necessário */}
                </div>
            ))}
        </main>
    );
}

export default Hero;
