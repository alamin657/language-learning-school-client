import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const ManageUsers = () => {
    const { user } = useContext(AuthContext)
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/abc')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>this is manage user</h1>
        </div>
    );
};

export default ManageUsers;