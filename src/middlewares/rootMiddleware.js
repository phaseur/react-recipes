const rootMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      console.log('on a intercepté une action sur la page');
      next(action);
  }
};
export default rootMiddleware;
