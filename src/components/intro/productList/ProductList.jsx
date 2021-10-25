import "./productList.css"
import Product from "../../product/Product"
import { products } from "../../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                 <h1 className="pl-title">Create & inspire. My Work:</h1>
                <p className="pl-desc">
                 I strive to learn and create beautiful and stunning websites.
                 Beautiful home-page, stunning design styles & a whole lot more...
                  </p>
          </div>
          <div className="pl-list">
              {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link}/>
              ))}
              
          </div>
        </div>
    )
}

export default ProductList
