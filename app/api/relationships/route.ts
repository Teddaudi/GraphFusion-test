import { NextRequest, NextResponse } from "next/server";
import Relationship from "@/models/relationshipModel"
import { connect } from "@/dbConfig/dbConfig";

connect()
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {from, to, relationship }= reqBody;
        const relationShipRecord = await Relationship.create({
            from,
            to,
            relationship
        })
        return NextResponse.json({
            message:"Realtionship created!",
            success:true,
            relationShipRecord
        })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }
}