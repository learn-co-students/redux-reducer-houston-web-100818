export function manageFriends(state, action) {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_FRIEND":
      newState.friends.push(action.friend);
      break;
    case "REMOVE_FRIEND":
      const friends = state.friends.filter(friend => friend.id !== action.id);
      newState = { friends: friends };
      break;
  }
  return newState;
}
