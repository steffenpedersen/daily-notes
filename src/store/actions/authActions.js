export const signIn = (credentials) => {
    // Thunk gives the ability to return a function
    // instead of an actual action
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        // Sign in with Firebase authentication service
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            // When the user have logged in
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            // If there's an error
            dispatch({ type: 'LOGIN_ERROR', err });
        });

    }
}