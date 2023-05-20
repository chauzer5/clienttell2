import { auth, db } from './firebaseSetup';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as signUserOut,
    browserSessionPersistence,
    setPersistence
} from "firebase/auth";

export async function signUp(email, password){

}

export async function signIn(email, password, remember){

}

export async function signOut(){
    
}
