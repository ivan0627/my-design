import React from "react";
import products from '../../jsonFiles/products.json'
import '../../styles/products.css'

import kingBedImage from '../../images/products/bed_1.jpg';
import threeDoorWardrobeImage from '../../images/products/wardrobe_2.jpg';
import deskWithShelvesImage from '../../images/products/desk_3.jpg';
import nightstandImage from '../../images/products/side_table_4.jpg';
import builtInWardrobeImage from '../../images/products/wardrobe_5.jpg';
import bunkBedImage from '../../images/products/bed_6.jpg';
import paddedChairImage from '../../images/products/chair_7.jpg';
import fullLengthMirrorImage from '../../images/products/mirror_8.jpg';
import cornerDeskImage from '../../images/products/desk_9.jpg';
import coatRackImage from '../../images/products/coat_rack_10.jpg';
import trundleBedImage from '../../images/products/bed_11.jpg';
import slidingDoorWardrobeImage from '../../images/products/wardrobe_12.jpg';
import readingChairImage from '../../images/products/chair_13.jpg';
import wallMirrorImage from '../../images/products/mirror_14.jpg';
import floatingDeskImage from '../../images/products/desk_15.jpg';
import bedsideTableImage from '../../images/products/side_table_16.jpg';
import singleDoorWardrobeImage from '../../images/products/wardrobe_17.jpg';
import twinBedImage from '../../images/products/bed_18.jpg';
import accentChairImage from '../../images/products/chair_19.jpg';
import roundMirrorImage from '../../images/products/mirror_20.jpg';


function Room () {

    const imageMappings = {  "King Bed": kingBedImage,
    "Three Door Wardrobe": threeDoorWardrobeImage,
    "Desk With Shelves": deskWithShelvesImage,
    "Nightstand": nightstandImage,
    "Built In Wardrobe": builtInWardrobeImage,
    "Bunk Bed": bunkBedImage,
    "Padded Chair": paddedChairImage,
    "Full Length Mirror": fullLengthMirrorImage,
    "Corner Desk": cornerDeskImage,
    "Coat Rack": coatRackImage,
    "Trundle Bed": trundleBedImage,
    "Sliding Door Wardrobe": slidingDoorWardrobeImage,
    "Reading Chair": readingChairImage,
    "Wall Mirror": wallMirrorImage,
    "Floating Desk": floatingDeskImage,
    "Bedside Table": bedsideTableImage,
    "Single Door Wardrobe": singleDoorWardrobeImage,
    "Twin Bed": twinBedImage,
    "Accent Chair": accentChairImage,
    "Round Mirror": roundMirrorImage
    };

    return(
        <div className="productsContainer">
        {
             products.room.map(product => {
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

export default Room