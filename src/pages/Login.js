import React,{useState} from "react" 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebase";

const auth = getAuth(firebaseApp);

const Login=()=>{
    const[email, setEmail] = useState("")
    const[password,setPassword] = useState("")
    
    function loginUser(){
        signInWithEmailAndPassword(auth, email, password )
        .then(value => console.log("user created", value))
        .catch(error => console.log("error", error))
    }


     return(
        <div>
             <h1> Login Screen </h1>
             <input 
               type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
             />

              <input 
               type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
             />    

             <button onClick={loginUser}>  Login </button>


        </div>

     )
}

export default  Login