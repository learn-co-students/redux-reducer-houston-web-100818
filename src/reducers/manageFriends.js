export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD FRIEND":
      return { friends: [...state.friends, action.friend] };
    case "REMOVE FRIEND":
      return {
        friends: state.fiends.filter(friend => friend !== action.payload)
      };
    default:
      return state;
  }
}
