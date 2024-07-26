import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Card, CardActionArea, CardMedia, Grid, TextField } from '@mui/material';
import { useUserContext } from '../Context/SneakerContext';

export default function Profile() {
    const{user} = useUserContext()
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const updateUser = (table, filter, userIsolate) => {
    const object = {first_name:firstName, last_name:lastName, email:email, password:password}    
    const axdebts = `http://localhost:8080/api/users/${user._id}`

    return axios.put(axdebts, object)

        .then(response => { 

            console.log(response.data.data);
            alert('update successful.')

         })

         .catch(error => { 

            console.log(error)

            return Promise.reject(error);

         })}
         const deleteUser = (table, filter, userIsolate) => { 
    const axdebts = `http://localhost:8080/api/users/${user._id}`

    return axios.delete(axdebts)

        .then(response => { 

            console.log(response.data.data);
            alert('delete successful.')

         })

         .catch(error => { 

            console.log(error)

            return Promise.reject(error);

         })}
  return (
    <div id='userdetail'>           
           <TextField
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                label="first name."
                defaultValue={user.first_name}
            />
            <TextField
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                label="last name."
                defaultValue={user.last_name}
            />
            <TextField
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="email address."
                defaultValue={user.email}
            />
            <TextField
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="password."
                defaultValue={user.password}
            />
            <button
              type="submit"
              onClick={updateUser}>
              update details.
            </button>
            <button
              type="submit"
              onClick={deleteUser}>
              delete account.
            </button>
    </div>
  )
}
