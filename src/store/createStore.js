import { createStore, applyMiddleware, compose } from 'redux';

export default (reducers, midllewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...midllewares))
      : applyMiddleware(...midllewares);

  return createStore(reducers, enhancer);
};
