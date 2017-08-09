import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 'M',
      id:0
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: 'N',
      id:1
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            sex: 'N',
            id: state.friendsById.length
          }
        ]
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item) => item.id !== action.id)
      };
    case types.STAR_FRIEND:
    {
      let friends = [...state.friendsById];
      let friend = friends.find((item) => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    }
    case types.ADD_SEX:
    {
      let friends = [...state.friendsById];
      let friend = friends.find((item) => item.id === action.id);
      friend.sex = action.sex;

      return {
        ...state,
        friendsById: friends
      };
    }

    default:
      return state;
  }
}
