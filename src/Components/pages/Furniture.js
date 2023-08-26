import React from "react";
import products from '../../jsonFiles/products.json'
import '../../styles/products.css'


import classicChairImage from '../../images/products/chair_1.jpg';
import oakTableImage from '../../images/products/table_2.jpg';
import leatherSofaImage from '../../images/products/sofa_3.jpg';
import modularShelfImage from '../../images/products/shelf_4.jpg';
import singleBedImage from '../../images/products/bed_5.jpg';
import woodenDeskImage from '../../images/products/desk_6.jpg';
import sideTableImage from '../../images/products/side_table_7.jpg';
import twoDoorWardrobeImage from '../../images/products/wardrobe_8.jpg';
import ergonomicChairImage from '../../images/products/chair_9.jpg';
import queenBedImage from '../../images/products/bed_10.jpg';
import sectionalSofaImage from '../../images/products/sofa_11.jpg';
import modernCoffeeTableImage from '../../images/products/table_12.jpg';
import floatingShelfImage from '../../images/products/shelf_13.jpg';
import kidsBedImage from '../../images/products/bed_14.jpg';
import coffeeSideTableImage from '../../images/products/side_table_15.jpg';
import clothingWardrobeImage from '../../images/products/wardrobe_16.jpg';
import diningChairImage from '../../images/products/chair_17.jpg';
import recliningSofaImage from '../../images/products/sofa_18.jpg';
import foldingTableImage from '../../images/products/table_19.jpg';
import bookshelfImage from '../../images/products/shelf_20.jpg';


function Furniture () {

    const imageMappings = {
        "Classic Chair": classicChairImage,
        "Oak Table": oakTableImage,
        "Leather Sofa": leatherSofaImage,
        "Modular Shelf": modularShelfImage,
        "Single Bed": singleBedImage,
        "Wooden Desk": woodenDeskImage,
        "Side Table": sideTableImage,
        "Two Door Wardrobe": twoDoorWardrobeImage,
        "Ergonomic Chair": ergonomicChairImage,
        "Queen Bed": queenBedImage,
        "Sectional Sofa": sectionalSofaImage,
        "Modern Coffee Table": modernCoffeeTableImage,
        "Floating Shelf": floatingShelfImage,
        "Kids Bed": kidsBedImage,
        "Coffee Side Table": coffeeSideTableImage,
        "Clothing Wardrobe": clothingWardrobeImage,
        "Dining Chair": diningChairImage,
        "Reclining Sofa": recliningSofaImage,
        "Folding Table": foldingTableImage,
        "Bookshelf": bookshelfImage}


    return(
        
        <div className="productsContainer">
                {
                     products.furniture.map(product => {
                        const imagePath = imageMappings[product.name];

                        return(
                        <div className="productIndividual">
                            
                            <div className="productImage">
                                <img src={imagePath} alt={`${product.name}`}/>
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