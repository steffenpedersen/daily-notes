const initState = {}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE_SUCCESS':
            console.log('create note success', action.note);
            return state
        case 'CREATE_NOTE_ERROR':
            console.log('create note error', action.error);
            return state
        default:
            return state;
    }
}

export default noteReducer