import mongoose from "mongoose";

const relationshipSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', required: true },
    relationship: { type: String, required: true },
});

const Relationship = mongoose.models.Relationship || mongoose.model("Relationship", relationshipSchema);
export default Relationship;
