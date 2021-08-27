export const createProject =(project) =>{
    return(dispach,getState,{getFirebase,getFirestore}) =>{
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorfirstName:'Net',
            authorLastName:'Criss',
            authorId:1234,
            createdAt: new Date()
        }).then(() => {
            dispach({
                type:"CREATE_PROJECT",
                project:project
            });
        }).catch((err) => {
            dispach({
                type:"CREATE_PROJECT_ERROR",
                err
            });
        })


        
    }
}