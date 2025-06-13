import './home.scss'
import { listProduct, product } from '../../assets/data/Data'
import type { Products } from '../../types/Type'
import { formatCurrency } from '../../utils/format'
import type { ListProduct } from '../../types/Type';

export default function Home() {
    return (
        <div className="home">
            <div className="category__list">
                {listProduct.map((item: ListProduct) => (
                    <p key={item.id}>{item.nameProduct}</p>
                ))}
            </div>
            <div className="home__container">
                {product.map((product: Products) => (
                    <ul>
                        <li>
                            <div className='product'>
                                <img src={product.image} />
                                <p className='name__product'>{product.name}</p>
                                <p className="price">
                                    <span>{formatCurrency(product.price, 'VND')}</span>
                                </p>
                                <p className="price__discount">
                                    <span>{formatCurrency(product.priceDiscount, 'VND')}</span>
                                </p>
                                <button className='add_to_cart'>Add To Cart</button>
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

