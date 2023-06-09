import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const MySelected = () => {
    const { user } = useContext(AuthContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/students/${user?.email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>fdfldfjdlfdlj</h1>
        </div>
    );
};

export default MySelected;