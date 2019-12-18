import React, {useState, useEffect} from 'react';
import io from "socket.io-client";
import queryString from 'query-string'


let socket;
export default function Chat ({location, profileImg}) {
 const [username, setUsername] = useState('');
 const [room, setRoom] = useState('');
 const [profileImg, setProfileImg] = setState('')
 const ENDPOINT = "localhost:5000";
 useEffect (() => {
  const  {username, room} = queryString.parse(location.search);
  socket = io(ENDPOINT);
  setUsername(username);
  setRoom(room)
  setProfileImg(profileImg)
  socket.emit('join', {name, room}, () => {});

  return () => {
   socket.emit('disconnect');
   socket.off();
  }
 }, [ENDPOINT, location.search])
 return (
  <></>
 )
}