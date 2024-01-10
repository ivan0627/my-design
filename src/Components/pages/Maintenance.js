import React from "react";
import "../../styles/Maintenance.css"
import { useState } from 'react';

function Maintenance () {

        const [formData, setFormData] = useState({
          name: '',
            description: '',
            price: '',
            image: '',
            type: '',
            category: ''
        });
      
        const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData({ ...formData, [name]: value });
        };
        console.log(formData)
        const handleSubmit = (event) => {
          event.preventDefault();
          
          // Send the data as JSON via a fetch request
          fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the server
            console.log(data);
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
        };

    return(
        <div className="form-container">
            <form id="imageUploadForm" enctype="multipart/form-data" onSubmit={handleSubmit}>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange}/><br></br>

        <label for="description">Description:</label>
        <textarea name="description" id="description" required value={formData.description} onChange={handleInputChange}></textarea><br></br>

        <label for="price">Price:</label>
        <input type="number" name="price" id="price" required value={formData.price} onChange={handleInputChange}/><br></br>

        <label for="image">Image:</label>
        <input type="file" name="image" id="image"  value={formData.image} onChange={handleInputChange}/><br></br>

        <label for="type">Type:</label>
        <input type="text" name="type" id="type" required value={formData.type} onChange={handleInputChange}/><br></br>

        <label for="category">Category:</label>
        <select name="category" id="category" value={formData.category} onChange={handleInputChange}>
            <option value="kitchen">Kitchen</option>
            <option value="room">Room</option>
            <option value="furniture">Furniture</option>
        </select><br></br>

        <input type="submit" value="Submit"/>
    </form>

            

        </div>
    )
}

export default Maintenance;