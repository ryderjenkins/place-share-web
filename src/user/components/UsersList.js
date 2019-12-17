import React from 'react';

import UserItem from './UserItem';
import './UsersList.css'

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No users found.</h2>
            </div>
        )
    } else {
        return (
            <ul className="users-list">
                {props.items.map(user => (
                    <UserItem 
                        key={user.id}
                        id={user.id}
                        name={user.name} 
                        image={user.image}
                        numberOfPlaces={user.numberOfPlaces}
                    />
                ))}
            </ul>
        )
    }
    
    
}

export default UsersList;