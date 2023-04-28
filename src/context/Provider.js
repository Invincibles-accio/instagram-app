import firebaseContext from "./createContext"; 


const Provider = (props)=>{
   

    return(
        <firebaseContext.Provider value={
            {
                a1: f1,
                a2: f2
            }
        }> 
           

           {props.children}
        </firebaseContext.Provider>
    )
}