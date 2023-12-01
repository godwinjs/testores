import Products from "@/app/db/models/Products";

/* find by email */
export const getProducts = async () => {
    const products = await Products.find({});
    return products;
}

export const saveProducts  = async (data: any ) => {
    // data is an array of products objects
    const products = new Products({
        products: data
    })
    await products.save();
}