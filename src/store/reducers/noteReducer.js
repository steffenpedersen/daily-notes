const initState = {
    notes: [
        { id: '1', title: 'This is a test title', content: 'blah blah blah' },
        { id: '2', title: 'This is a test title', content: 'blah blah blah' },
        { id: '3', title: 'This is a test title', content: 'blah blah blah' }
    ]
}

const noteReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTE':
            console.log('create note', action.note);
    }
    return state;
}

export default noteReducer