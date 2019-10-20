export const createNote = (note) => {
    // Thunk gives the ability to return a function
    // instead of an actual action
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // Add Firestore document to collection
        firestore.collection('notes').add({
            // This is async and returns a promise
            // Spread operator
            ...note,
            // Add author dummy data
            authorFirstName: 'Steffen',
            authorLastName: 'Pedersen',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            // When the document has been added
            dispatch({ type: 'CREATE_NOTE_SUCCESS' });
        }).catch(err => {
            // If there's an error
            dispatch({ type: 'CREATE_NOTE_ERROR', err });
        });
    }
};