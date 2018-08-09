export default store => next => (payload) => { // eslint-disable-line
  // console.log(payload, store.getState().get());
  console.log(payload);
  next(payload);
};
