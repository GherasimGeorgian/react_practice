export const createProject =(project) =>{
    return(dispach,getState) =>{
        //make async call to database
        dispach({
            type:"ADD_PROJECT",
            project:project
        });
    }
}