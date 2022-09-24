const productRoutes = require("./product.route");

const route = (app) => {
    app.use("/products", productRoutes);
};

module.exports = route;