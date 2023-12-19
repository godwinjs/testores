import Products from "@/app/db/models/Products";

/* find by email */
export const getProducts = async () => {
    
    try {
    const products = await Products.find({/*_id: '6569b408ea568adfd1b40c73'*/});
        return products;
    }catch(err) {
        console.log('couldnt get products')
    }
}

export const saveProducts  = async (data: any ) => {
    // data is an array of products objects
    const products = new Products({
        products: data
    })
    await products.save();
}