import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [user1, loading1, error1] = useAuthState(auth);
    return (
        <div>
            <button onClick={()=>signInWithGoogle()}>Sing In with google</button>
            <p>{user1? user1.displayName: ""}</p>
        </div>
    );
};

export default Login;