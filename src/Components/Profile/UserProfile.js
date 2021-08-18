import { useState } from 'react';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import UserProfileDetails2 from '../Profile/UserProfileDetails2';


const UserProfile = () => {

  const [showSettings,setShowSettings]=useState(false);

  const handleCLick=()=>{
    setShowSettings(prevState=>!prevState);
  }

  return (
    <div>
    <button onClick={handleCLick}>📐settings</button>
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <UserProfileDetails2 showBlur={showSettings}/>
     { 
     showSettings && <ProfileForm />
     }
    </section>
    </div>
  );
};

export default UserProfile;
