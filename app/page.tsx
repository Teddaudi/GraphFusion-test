"use client";
import * as d3 from 'd3';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type NodeData = {
    _id: string;
    name: string;
    type: string;
};

type LinkData = {
    from: NodeData;
    to: NodeData;
};

const GraphComponent = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [nodes, setNodes] = useState<NodeData[]>([]);
    const [links, setLinks] = useState<LinkData[]>([]);

    const fetchGraphData = async () => {
        try {
            const response = await axios.get('/api/graph/all');
            const fetchedNodes = response.data.data.nodes;
            const fetchedLinks = response.data.data.relationships;

            setNodes(fetchedNodes);
            setLinks(fetchedLinks);
            drawBarGraph(fetchedNodes, fetchedLinks); // Draw graph after setting state
            // console.log("Fetched nodes:", fetchedNodes);
            // console.log("Fetched links:", response.data.data.relationships);
        }catch (error: unknown) {
            if (axios.isAxiosError(error)) {
              console.log(error.message);
            } else {
              console.log("An unexpected error occurred:", error);
            }
          }
    };

    useEffect(() => {
        fetchGraphData();
    }, []);

    const drawBarGraph = (nodes: NodeData[], links: LinkData[]) => {
        if (!svgRef.current) return;

        const svgWidth = 500;
        const svgHeight = 300;
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        // Clear previous SVG content
        d3.select(svgRef.current).selectAll("*").remove();

        const svg = d3.select(svgRef.current)
            .attr("width", svgWidth)
            .attr("height", svgHeight);

        // Count outgoing links for each node
        const linkCounts = nodes.map(node => ({
            name: node.name,
            count: links ? links.filter(link => link.from._id === node._id).length : 0,
        }));

        const x = d3.scaleBand()
            .domain(linkCounts.map(d => d.name))
            .range([margin.left, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(linkCounts, d => d.count) || 0])
            .range([height, margin.top]);

        // Create x-axis
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10, 0) rotate(-45)")
            .style("text-anchor", "end");

        // Create y-axis
        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Create bars
        svg.selectAll(".bar")
            .data(linkCounts)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.name) || 0)
            .attr("y", d => y(d.count))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.count))
            .attr("fill", "steelblue");
    };

    return (
        <div className="flex flex-col items-center space-y-4">
           
            <Link
                className="bg-red-600 hover:bg-red-700 mt-4 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"

                href={"/nodes"} target='_blank'>Data</Link>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default GraphComponent;
