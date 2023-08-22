import ProductItem from "../ProductItem/ProductItem"
import s from './ProductsList.module.css'
function ProductsList({ products ,handleDoubleClick}) {
    console.log(products);
  return  <ul className={s.product_list}>
          {products.map((product) => (
         <ProductItem key={product.id} product={product} handleDoubleClick={handleDoubleClick} />
          ))}
        </ul>
  }
  export default ProductsList