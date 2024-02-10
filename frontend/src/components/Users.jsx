/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Button } from './Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Users = () => {
    const [ users, setUsers ] = useState([]);
    const [ filter, setFilter ] = useState('');

    useEffect(() => {
        axios.get('https://sterling-seths.onrender.com/api/v1/user/bulk?filter=' +filter)
        .then(response => {
            setUsers(response.data.user)
        })
    }, [filter])
    return <>
    <div>
    </div>
    <div className='my-2'>
        <input onChange={(e) => {
            setFilter(e.target.value)
        }} type='text' placeholder='Search Users' className='w-full px-2 py-2 shadow-inner rounded bg-gray-50'></input>
    </div>
    <div>
        {users.map(user => <User user={user}></User>)}
    </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();
    return <div className='flex justify-between'>
        <div className='flex'>
            <div className='rounded-full h-12 w-12 bg-fuchsia-300 flex justify-center mt-1 mr-2'>
                <div className='flex flex-col justify-center h-full text-xl text-white'>
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className='flex flex-col justify-center h-full w-50'>
                <div>
                    {user.firstName.toUpperCase()} {user.lastName[0].toUpperCase()}
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center '>
            <Button onClick={() => {
                navigate('/send?id=' + user._id + "&name=" + user.firstName);
            }} label={'Send Money'}></Button>
        </div>
    </div>
}