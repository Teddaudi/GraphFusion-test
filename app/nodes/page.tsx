"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pop from '../../util/pop'
import Popup from '../../util/modal'

const Page = () => {
  const [nodes, setNodes] = useState([])
  const [relationships, setRelationships] = useState([])
  const [showPop, setShowPop] = useState(false)
  const [showRelationship, setShowRelationship] = useState(false)

  const fetchGraphData = async () => {
    try {
      const response = await axios.get("/api/graph/all");
      const data = response.data.data;
      console.log("Fetched Data:", data); // Log entire data object
      setNodes(data.nodes);
      setRelationships(data.relationships);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred:", error);
      }
    }
  };

  function handleNode() {
    setShowPop(prev => !prev)
  }
  function handleRelationship() {
    setShowRelationship(prev => !prev)
  }
  useEffect(() => {
    fetchGraphData()

  })

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-5 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Graph Data</h1>

          <button className='bg-green-300 hover:bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white mb-2' onClick={handleNode}>Create Node</button>
          {showPop && <Pop />
          }
          {/* Nodes Section */}
          <h2 className="text-xl font-medium text-gray-700 mb-4">Nodes</h2>
          {nodes.map((node) => (
            <div
              key={node._id}
              className="flex flex-col sm:flex-row sm:justify-between items-center text-center my-3 p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="font-medium text-gray-700 mb-2 sm:mb-0">
                <p>ID: {node._id}</p>
              </div>
              <div className="text-blue-600 mb-2 sm:mb-0">
                <p>{node.type}</p>
              </div>
              <div className="text-gray-600">
                <p>{node.name}</p>
              </div>
            </div>
          ))}



          {/* Relationships Section */}
          <button onClick={handleRelationship} className='bg-green-300 hover:bg-green-500 px-4 py-2 rounded-md cursor-pointer text-white mb-2'>Create Relationships</button>
          {showRelationship && <Popup />
          }
          <h2 className="text-xl font-medium text-gray-700 mt-8 mb-4">Relationships</h2>
          {relationships.map((relationship) => (
            <div
              className="my-3 p-4 bg-gray-50 rounded-lg shadow-sm"
              key={relationship._id}
            >
              <p className="text-gray-700 font-medium">Relationship ID: {relationship._id}</p>
              <div className="flex justify-between mt-3">
                <div className="text-left">
                  <p className="text-gray-600 font-semibold">From:</p>
                  <p>
                    {relationship.from?.name || 'Unknown'} ({relationship.from?.type || 'Unknown'})
                  </p>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 font-semibold">To:</p>
                  <p>
                    {relationship.to?.name || 'Unknown'} ({relationship.to?.type || 'Unknown'})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page
