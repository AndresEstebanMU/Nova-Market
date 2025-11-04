import mongoose from "mongoose";


const orederSchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: 'user' },
    items: [{
        product: { type: String, required: true, ref: 'product' },
        quantity: { type: Number, required: true}
    }],
    amount: { type: Number, required: true},
    address: { type: String, required: true, ref: 'address' },
    status: { type: String, required: true, default: 'Oreder Placed' },
    date: { type: Number, required: true}
})

const Order = mongoose.models.order || mongoose.model('order', orederSchema)

export default Order