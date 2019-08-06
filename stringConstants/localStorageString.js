const localStorageString = `export const loadState = () => {
  try {
    // set key name to something you want
    const serializedState = localStorage.getItem('persistedData');
    if (serializedState === null) {
      return undefined;
    }
    console.log('serializedState', JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('unpostedUserData', serializedState);
  } catch (err) {
    console.log(err);
  }
};`;

module.exports = localStorageString;
