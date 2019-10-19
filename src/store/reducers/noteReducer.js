const initState = {
    notes: [
        {id: '1', title: 'This is a test title', content: 'blah blah blah'},
        {id: '2', title: 'This is a test title', content: 'blah blah blah'},
        {id: '3', title: 'This is a test title', content: 'blah blah blah'}
      ]    
}

const noteReducer = (state = initState, action) => {
    return state
}

export default noteReducer