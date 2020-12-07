const initialState = [{
    id: 1,firstname: 'Ivan', lastname: 'Ivanov', email: '123@mail.ru'
},
{
   id:2, firstname: 'Petr', lastname: 'PEtrov', email: '45678@mail.ru'
}]

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE':
            return state.filter((item) => {
                return item.id !== action.id;
            })
        default:
            return state;
    }
}

export { usersReducer }