const { db } = require("../config/firebase");
const {collection, getDocs } = require("firebase/firestore")
// productController.js
const firestore = db;

const getAllProducts = async (req, res) => {
    try {
        const productsSnapshot = await getDocs(collection(db, "products"));
        const productsObject = productsSnapshot.docs.reduce((acc, doc) => {
            acc[doc.id] = doc.data();
            return acc;
        }, {});

        res.json(productsObject);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createProduct = async (req, res) => {
    const { title, desc, price, img } = req.body;
    try {
        await firestore.collection('products').add({
            title,
            desc,
            price,
            img
        });
        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllProducts,
    createProduct
};
