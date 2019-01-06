export function manageFriends(state, action){
    switch (action.type) {
        case ('ADD_FRIEND'):
            if (action.friend.name && action.friend.hometown && action.friend.id) {
                let friends = [...state.friends, action.friend]
                return {...state, friends: friends}
            } else {
                return state
            }
            break;
        case ('REMOVE_FRIEND'):
            let friends = state.friends.filter(friend => {
                return friend.id !== action.id
            })
            return { ...state, friends: friends }
            break;
        default:
            return state
    }
}
