const productdata = require("./constant/productsdata");
const Products = require("./models/productSchema");


const DefaultData = async()=>{
    try {
        await Products.deleteMany({});
        const storeData = await Products.insertMany(productdata);
    } catch (error) {
        console.log("error" + error.message);
    }
};

module.exports = DefaultData;