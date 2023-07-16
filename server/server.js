const cors = require('cors')
const express = require('express')
const stripe = require('stripe')("sk_test_51K6gQLSFdtUbPFxM9qkQibP4eyr22kWuRkjpiRx7ypqJpUyirsvaf7nufYJuFMAM5s5QTryoVTsMlPfJux4dCbT100dTs7Id9y")
const { v4: uuidv4 } = require('uuid');

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Works Fine")
})

app.post("/payment", (req, res) => {
    
    const { product, token } = req.body
    console.log("PRODUCT", product);
    console.log("TOKEN", token);
    const idempotencyKey = uuidv4()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => {
        stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            description: product.name,
            shippingAddress: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

app.listen("3001", () => console.log("Server running on port 3001"))