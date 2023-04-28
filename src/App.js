import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseApp from "./firebase";



const App = () => {
  const database = getDatabase(firebaseApp);


  return(
    <div>
         <h1>Instagram</h1>
    </div>
  )
}
