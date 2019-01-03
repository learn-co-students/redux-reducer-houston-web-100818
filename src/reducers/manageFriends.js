export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      state.friends.push(action.friend)
      return {friends: state.friends}
    case "REMOVE_FRIEND":
      let removeIndex = state.friends.map(function(f) { return f.id; }).indexOf(action.id)
      let copy = state.friends.slice()
      copy.splice(removeIndex, 1)
      return {friends: copy}
    default:
      return state
  }
}
