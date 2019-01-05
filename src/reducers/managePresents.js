export function managePresents(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case "INCREASE":
      newState.numberOfPresents += 1;
      break;
  }
  return newState;
}
