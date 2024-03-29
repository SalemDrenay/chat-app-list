import React from "react";
import Contact from './Contact';

const users = [
    {
      name: 'Shovel Knight',
      avatar: 'https://pbs.twimg.com/media/D_IacAkWsAA34GF?format=jpg&name=medium',
      online: false
    },
    {
      name: 'King Knight',
      avatar: 'https://pbs.twimg.com/media/D_IadiIXYAM8wbZ?format=jpg&name=medium',
      online: true
    },
    {
      name: 'Plague Knight',
      avatar: 'https://pbs.twimg.com/media/D_xuYOoX4AAqO7I?format=jpg&name=360x360',
      online: true
    },
    {
      name: 'Specter Knight',
      avatar: 'https://pbs.twimg.com/media/D_xuYOwXYAAlnX6?format=jpg&name=medium',
      online: false
    },
    {
      name: 'Enchantress',
      avatar: 'https://vignette.wikia.nocookie.net/shovelknight/images/9/99/Enchantress.png/revision/latest?cb=20170401155902',
      online: true
    }
];

const ContactList = () => (
    <div>
      {users.map(item => (
          <Contact key={item.name} avatar={item.avatar} name={item.name} online={item.online} />
      ))}
    </div>
  );
  
  export default ContactList;