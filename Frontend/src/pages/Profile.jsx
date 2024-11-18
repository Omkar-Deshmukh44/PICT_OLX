import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="profile-info">
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-bio">A passionate learner and marketplace enthusiast.</p>
                    </div>
                </div>
                <div className="profile-sections">
                    <button className="profile-button">My Listings</button>
                    <button className="profile-button">Saved Items</button>
                    <button className="profile-button">Edit Profile</button>
                </div>
                <div className='PersonalInformation'>
                  <h2>Year of Study</h2>
                  <button>Edit</button>
                  <h2>Department of student</h2>
                  <button>Edit</button>
                  <h2>Mobile no</h2>
                  <button>Edit</button>
                  <h2>Email adress</h2>
                  <button>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
