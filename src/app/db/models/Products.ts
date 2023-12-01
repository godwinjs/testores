import mongoose from "mongoose";

const { Schema } = mongoose;

const VariantsSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: false
     },
    name: {
        type: String,
        unique: false,
        required: false
     },
    thumbnail: {
        type: String,
        unique: false,
        required: false
     },
    color: {
        type: String,
        unique: false,
        required: false
     },
    featuredImage: {
        type: String,
        unique: false,
        required: false
     },
})

const ProductSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: false
     },
    name: {
        type: String,
        unique: false,
        required: true
     },
    price: {
        type: Number,
        unique: true,
        required: true
     },
    image: {
        type: String,
        unique: false,
        required: false
     },
    description: {
        type: String,
        unique: false,
        required: true
     },
    category: {
        type: String,
        unique: false,
        required: false
     },
    tags: {
        type: [String],
        unique: false,
        required: false
     },
    link: {
        type: String,
        unique: true,
        required: true
     },
    variants: {
        type: [VariantsSchema],
        unique: false,
        required: true
     },
    variantType: {
        type: String,
        unique: false,
        required: true
     },
    sizes: {
        type: [String],
        unique: false,
        required: true
     },
    allOfSizes: {
        type: [String],
        unique: false,
        required: true
     },
    status: {
        type: [String],
        unique: false,
        required: true
     },
})

const ProductsSchema = new Schema({
    products: [ProductSchema]
}, { timestamps: true })

export default mongoose.models.Products || mongoose.model("Products", ProductsSchema);