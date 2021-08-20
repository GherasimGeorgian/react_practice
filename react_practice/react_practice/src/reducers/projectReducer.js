const initState ={
    projects:[
        {id:'1',title:'title 1',content:"content project 1"},
        {id:'2',title:'title 2',content:"content project 2"},
        {id:'3',title:'title 3',content:"content project 3"},
        {id:'4',title:'title 4',content:"content project 4"}
    ]
}

const projectReducer = (state = initState,action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
    }
    return state
}

export default projectReducer