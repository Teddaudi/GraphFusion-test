import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Node from "@/models/nodeModel"


connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {name,type}= reqBody;
        const node = await Node.create({name,type})
        return NextResponse.json({
            message: "Node created!",
            success:true,
            node:node
        })
    } catch (error) {
        return NextResponse.json({  error },
            { status: 500 }
        )
    }
}