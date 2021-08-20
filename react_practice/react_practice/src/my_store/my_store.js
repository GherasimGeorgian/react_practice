const {createStore} = Redux;

const initState= {
    todos=[],
    posts=[]
}

function myreducer(state=initState,action){
    console.log(action,state);
}

const store = createStore(myreducer)

const todoAction = {type:'ADD_TODO',todo:'buy milk'};

store.dispach(todoAction)