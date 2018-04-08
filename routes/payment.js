const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    stripe.customers.create({
  source: req.body.source,
  email: req.body.email
}).then(function(source) {
  return stripe.subscriptions.create({
  customer: source.id,
  items: [{plan: 'plan_CdoHDOG92FSbWy'}]
});


}).then(function(thing){
  res.send("YAY");
}).catch(function(err) {
console.log(err);
});
});



  return app;
};

module.exports = paymentApi;
