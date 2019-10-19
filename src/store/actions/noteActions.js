export const createNote = (note) => {
    // Thunk gives the ability to return a function
    // instead of an actual action
    return (dispatch, getState) => {
        // TODO: Make async call to database
        // Carry on with the dispatch as normal
        dispatch({ type: 'CREATE_NOTE', note: note });
    }
};