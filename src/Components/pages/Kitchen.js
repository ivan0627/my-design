import React from "react";
import products from '../../jsonFiles/products.json'
import '../../styles/products.css'

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

function Kitchen () {

    const imageMappings = {  "Knife Set": knifeSetImage,
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
        "Slow Cooker": slowCookerImage}
    return(
        <div className="productsContainer">
        {
             products.kitchen.map(product => {
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

export default Kitchen