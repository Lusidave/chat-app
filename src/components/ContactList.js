import React from 'react';
import Contact from './Contact';

const users = [
    {
      name: 'Roberta Reyes',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      online: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true
    },
    {
      name: 'Verononica Mason',
      avatar: 'https://randomuser.me/api/portraits/women/84.jpg',
      online: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/88.jpg',
      online: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true
    }
  ];


const ContactList = () => (
    users.map((user, index) => (
        <Contact
            key={index} 
            name={user.name}
            avatar={user.avatar}
            online={user.online}
        />
    ))
)




export default ContactList