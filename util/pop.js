"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Pop = () => {
    const [ type,setType]=useState("")
    const [name,setName]=useState("")
  async function handleCreate(){
    try {
       await axios.post('/api/nodes',{
        type:type,
        name:name
        })
        alert("Post made successfully!")
    } catch (error) {
        console.log(error.message)
    }
   }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add New Node</h2>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter name"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Type</label>
                    <input
                        type="text"
                        name="type"
                        onChange={(e)=>setType(e.target.value)}
                        placeholder="Enter type"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                    <button
                        className="bg-blue-600 hover:bg-blue-700  font-medium px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                    onClick={handleCreate}
                    > Create</button>
                
            </div>
        </div>

    );
};

export default Pop;
