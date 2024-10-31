"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Popup = () => {
    const [from,setFrom]=useState(0)
    const [to,setTo]= useState(0)
    const [relationship,setRelationship]=useState("")
async function handleCreate() {
    try {
        await axios.post('/api/relationships',{
            from:from,
            to:to,
            relationship:relationship
        })
        alert("Relationship made successfully!")
    } catch (error) {
        console.log(error.message)
    }
}
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add New Relationship</h2>

            <div className="flex flex-col">
                <label className="text-gray-600 font-medium mb-1">From</label>
                <input
                    type="text"
                    name="from"
                    onChange={(e)=>setFrom(e.target.value)}
                    placeholder="From"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-gray-600 font-medium mb-1">To</label>
                <input
                    type="text"
                    name="to"
                    onChange={(e)=>setTo(e.target.value)}
                    placeholder="To"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-gray-600 font-medium mb-1">Relationship</label>
                <input
                    type="text"
                    name="to"
                    onChange={(e)=>setRelationship(e.target.value)}
                    placeholder="Enter Relationship"
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

export default Popup;
