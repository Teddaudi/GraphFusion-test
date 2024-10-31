import mongoose from "mongoose";

const nodeSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
});

const Node = mongoose.models.Node || mongoose.model("Node", nodeSchema);
export default Node;
