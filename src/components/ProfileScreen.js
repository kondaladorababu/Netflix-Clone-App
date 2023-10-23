import React from 'react';
import '../styles/ProfileScreen.css';
import NavBar from './HomeScreen/NavBar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import PlansScreen from './PlansScreen';


function ProfileScreen() {
    const user = useSelector(selectUser);
    const history = useNavigate();

    const handleSignOutClick = () => {
        auth.signOut();
        history("/");
    }

    return (
        <div className='profileScreen'>
            <NavBar />
            <div className="profileScreen_body">
                <h1>Your Profile</h1>
                <div className="_profieScreen_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile Logo" />
                    <div className="profileScreen_details">
                        <h2>{"test@gmail.com"}</h2>
                        <div className="profileScreen_plans">
                            <h2>Plans</h2>
                            <PlansScreen/>
                            <button onClick={handleSignOutClick} className='profileScreen_signOut'>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileScreen
