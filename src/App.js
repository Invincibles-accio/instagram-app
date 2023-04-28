import { initializeApp } from "firebase/app";
import { getDatabase,ref, set  } from "firebase/database";
import firebaseApp from "./firebase";


const database = getDatabase(firebaseApp);
const App = () => {
  
    function putData(){
        set( ref(database, "users/abhishek"),
         {
              id: 1,
              name: "Abhishek Choudhary",
              age: 21,
              email: "abhi@a.com"
         }
        )
    }

  return(
    <div>
         <h1>Instagram</h1>
         <button onClick={putData}>Add Data</button>
    </div>
  )
}


export default App