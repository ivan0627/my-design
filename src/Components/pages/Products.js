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

import knifeSetImage from '../../images/products/utensil_1.jpg';
import multifunctionBlenderImage from '../../images/products/appliance_2.jpg';
import nonstickPotSetImage from '../../images/products/pots_3.jpg';
import castIronPanImage from '../../images/products/pan_4.jpg';
import espressoCoffeeMakerImage from '../../images/products/coffee_maker_5.jpg';
import bambooCuttingBoardImage from '../../images/products/cutting_board_6.jpg';
import siliconeUtensilSetImage from '../../images/products/utensil_7.jpg';
import stainlessSteelMicrowaveImage from '../../images/products/microwave_8.jpg';
import electricRiceCookerImage from '../../images/products/rice_cooker_9.jpg';
import citrusJuicerImage from '../../images/products/juicer_10.jpg';
import handBlenderImage from '../../images/products/blender_11.jpg';
import pressureCookerImage from '../../images/products/pressure_cooker_12.jpg';
import standMixerImage from '../../images/products/mixer_13.jpg';
import foodProcessorImage from '../../images/products/food_processor_14.jpg';
import toasterImage from '../../images/products/toaster_15.jpg';
import convectionOvenImage from '../../images/products/oven_16.jpg';
import electricKettleImage from '../../images/products/kettle_17.jpg';
import kitchenScaleImage from '../../images/products/scale_18.jpg';
import indoorGrillImage from '../../images/products/grill_19.jpg';
import slowCookerImage from '../../images/products/slow_cooker_20.jpg';

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



function Products () {
    //realiza el mapeo en imagemappings para todos los elementos restantes

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
        "Bookshelf": bookshelfImage,
        "Knife Set": knifeSetImage,
        "Multifunction Blender": multifunctionBlenderImage,
        "Nonstick Pot Set": nonstickPotSetImage,
        "Cast Iron Pan": castIronPanImage,
        "Espresso Coffee Maker": espressoCoffeeMakerImage,
        "Bamboo Cutting Board": bambooCuttingBoardImage,
        "Silicone Utensil Set": siliconeUtensilSetImage,
        "Stainless Steel Microwave": stainlessSteelMicrowaveImage,
        "Electric Rice Cooker": electricRiceCookerImage,
        "Citrus Juicer": citrusJuicerImage,
        "Hand Blender": handBlenderImage,
        "Pressure Cooker": pressureCookerImage,
        "Stand Mixer": standMixerImage,
        "Food Processor": foodProcessorImage,
        "Toaster": toasterImage,
        "Convection Oven": convectionOvenImage,
        "Electric Kettle": electricKettleImage,
        "Kitchen Scale": kitchenScaleImage,
        "Indoor Grill": indoorGrillImage,
        "Slow Cooker": slowCookerImage,
        "King Bed": kingBedImage,
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

                   { products.kitchen.map(product => {
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
                { products.room.map(product => {
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

export default Products