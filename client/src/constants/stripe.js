const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_5BvLfnOMccG6iq2qu04cRXzg';

export default STRIPE_PUBLISHABLE;
