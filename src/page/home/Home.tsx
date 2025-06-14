import './home.scss'
import type { Products } from '../../types/Type'
import { formatCurrency } from '../../utils/format'
import { listProduct, } from '../../assets/data/Data'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {listProduct.map((category) => (
                    <div key={category.id} className="category__block">

                        <div className='category__product__name'>{category.nameProduct}</div>

                        <div className="category__products">

                            {category.list.map((product: Products) => (
                                <div key={product.id} className='product'>

                                    <img src={product.image} />

                                    <div className='name__product'>{product.name}</div>

                                    <div className="price">
                                        <span>{formatCurrency(product.price, 'VND')}</span>
                                    </div>

                                    <div className="price__discount">
                                        <span>{formatCurrency(product.priceDiscount, 'VND')}</span>
                                    </div>

                                    <button className='add_to_cart'>Add To Cart</button>

                                </div>
                            ))}

                        </div>

                    </div>

                ))}

            </div>
        </div>
    )
}

