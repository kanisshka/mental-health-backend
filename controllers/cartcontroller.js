import CartModel from "../models/Cart.js"
import ProductModel from "../models/Product.js";
// import UserModel from "../models/User.js";
class CartController {
    static allcart = async (req, res) => {
        // const { user } = req.body;
        CartModel.findOne({ id: req.params.id })
        try {
            const cart = await CartModel.findOne({ id: req.params.id });
            res.status(200).json(cart);
          } catch (err) {
            res.status(500).json(err);
          }
    }

    static addcart = async (req, res) => {
        const { user, cartItems } = req.body;
        CartModel.findOne({ user: user })
            .exec((error, cart) => {
                // if already exists
                if (error) return res.status(400).json({ error });
                if (cart) {
                    const product = cartItems.productId;
                    const item = cart.cartItems.find(c => c.productId == product);
                    if (item) {
                        CartModel.findOneAndUpdate({ "user": user, "cartItems.productId": product }, {
                            "$set": {
                                "cartItems": {
                                    ...cartItems,
                                    quantity: item.quantity + cartItems.quantity
                                }
                            }
                        })
                            .exec((error, _cart) => {
                                if (error) return res.status(400).json({ error });
                                if (_cart) {
                                    return res.status(201).json({ cart: _cart });
                                }
                            })
                    }
                    else {
                        CartModel.findOneAndUpdate({ user: user }, {
                            "$push": {
                                "cartItems": cartItems
                            }
                        })
                            .exec((error, _cart) => {
                                if (error) return res.status(400).json({ error });
                                if (_cart) {
                                    return res.status(201).json({ cart: _cart });
                                }
                            })

                    }
                }
                else {
                    // if not exists
                    const cart = new CartModel({
                        user: user,
                        cartItems: [cartItems]
                    });

                    cart.save((error, cart) => {
                        if (error) return res.status(400).json({ error });
                        if (cart) {
                            return res.status(201).json({ cart });
                        }
                    });
                }

            });
    }
    // static dltById = async (req, res) => {
    //     try {
    //         const result = await CartModel.findByIdAndDelete(req.params.id)
    //         res.status(204).send(result)
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // }
    static removecart = async (req, res) => {
        const { productId } = req.body.payload;
        const { user, cartItems } = req.body;
        if (productId) {
            CartModel.findByIdAndUpdate(
                { user: user },
                {
                    "$pull": {
                        "cartItems": {
                            product: productId,
                        },
                    },
                }
            ).exec((error, result) => {
                if (error) return res.status(400).json({ error });
                if (result) {
                    res.status(202).json({ result });
                }
            });
        }
    }
}
export default CartController
