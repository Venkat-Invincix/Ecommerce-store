const productController = {}

productController.getProducts = (req, res, next) => {
    res.status(200).json({ message: 'Hello succesfully get the products.' })
}

module.exports = productController