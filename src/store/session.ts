const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem(`state`);

    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem(`state`, serializedState);
  } catch (error) {
    // ignore
  }
};


export {loadState, saveState};
