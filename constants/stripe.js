const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_8omLbqTZInntVgGyNpBV0X3j'
    : 'sk_test_8omLbqTZInntVgGyNpBV0X3j';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
