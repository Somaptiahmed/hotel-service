import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { div } from 'framer-motion/client';

const AddService = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const serviceImage = form.serviceImage.value;
        const serviceTitle = form.serviceTitle.value;
        const companyName = form.companyName.value;
        const website= form.website.value;
        const description= form.description.value;
        const category = form.category.value;
        const price = form.price.value;

        
        const newService = { serviceImage, serviceTitle, companyName, website, description, category, price };
    console.log(newService);

     // Send data to the server
     fetch("http://localhost:5000/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newService),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Service added successfully!");
          }
        });
  
      form.reset();
    };
  
       


    
   

    return (
        <div>
            <Navbar></Navbar>
            <div className="add-service w-9/12 mx-auto">
            
            <h2 className="text-xl font-bold mb-4 text-center mt-5">Add a New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Service Image URL</label>
                    <input
                        type="text"
                        name="serviceImage"
                        
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Service Title</label>
                    <input
                        type="text"
                        name="serviceTitle"
                        
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Website</label>
                    <input
                        type="url"
                        name="website"
                       
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                       
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium">Category</label>
                    <input
                        type="text"
                        name="category"
                        
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Price</label>
                    <input
                        type="number"
                        name="price"
                        
                        className="w-full p-2 border-2 border-slate-600 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                    Add Service
                </button>
            </form>
        </div>
        </div>
    );
};

export default AddService;
