import React, {useEffect, useState} from "react";
import '../../styles/products.css'


function Furniture (props) {
    
    const [items, setItems] = useState([]);
        const getItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/items/category/${props.category}`);
                const jsonData = await response.json();
                setItems(jsonData);
                
            } catch (err) {
                console.error(err.message);
            }
        }
        

        useEffect(() => {
            getItems();
            
        }, [props.category]);
        return(
    
            
            <div className="productsContainer">
                {
                     items.map(product => {

                        const anexo = product.image.split('/')[3];
                       


                        return(
                        <div className="productIndividual">
                            
                            <div className="productImage">
                                <img src= {require('../../images/products/' + anexo)} alt={`${product.name}`}/>
                            </div>

                            <h3 className="productName">{product.name}</h3>
                            <p id="productDescription">{product.description}</p>
                            <div className="priceAndButton">
                            
                            <h4 id="price">${product.price}</h4>
                            <button>Add to the cart</button>
                            </div>
                        </div>

                    )})
                        }
                    
              

            </div>

        
    )
}

export default Furniture    