// sk_test_51P1t5f2NWBC2qFBwjHumVX4sjENlFChIe81WV9XfDHV3hUE8odi10WjX7W4YfkMruE6BI5EdSksQmEEhVDK6CA4Z0042HCR1MX
//Coffee price_1P1tEN2NWBC2qFBwLN8DdQoJ 
// sunglasses price_1P1tK62NWBC2qFBwgciwJ4oC
// camera price_1P1tIl2NWBC2qFBwqe21C93g

const express = require('express');
var cors = require ('cors');
const stripe = require('stripe')('sk_test_51P1t5f2NWBC2qFBwjHumVX4sjENlFChIe81WV9XfDHV3hUE8odi10WjX7W4YfkMruE6BI5EdSksQmEEhVDK6CA4Z0042HCR1MX');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async(req,res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems =[]; 
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity:item.quantity
            }
        )
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode:'payment',
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel"
    });
    res.send(JSON.stringify({
        url:session.url
    }));

});
app.listen(4000,()=>console.log("listening on port 4000!"))
