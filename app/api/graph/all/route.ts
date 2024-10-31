import { connect } from "@/dbConfig/dbConfig";
import {  NextResponse } from "next/server";
import Node from "@/models/nodeModel";
import Relationship from "@/models/relationshipModel";

connect();

export async function GET() {
    try {
        // Select only "_id", "name", and "type" fields in Node and Relationship queries
        const nodes = await Node.find({}).select("_id name type");
        const relationships = await Relationship.find({})
            .populate({ path: 'from', select: '_id name type' })
            .populate({ path: 'to', select: '_id name type' })
            .select("_id name type");

        return NextResponse.json({
            message: "Nodes and relationships found!",
            success: true,
            data: { nodes, relationships }
        });
    } catch (error) {
        return NextResponse.json(
            { error},
            { status: 500 }
        );
    }
}
