import Stars from "../Stars/Stars"
import s from './ProductItem.module.css'

function ProductItem({ product, handleDoubleClick }) {

    return (
        <li
            className={s.product_card}
            onDoubleClick={() => handleDoubleClick(product.id)}
        >
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Stars rating={product.rating} />
        </li>
    )
}
export default ProductItem