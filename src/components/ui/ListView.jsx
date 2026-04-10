import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";


const users = [

  { id:1, name:"Amit" },

  { id:2, name:"Priya" },

  { id:3, name:"Rohit" },

  { id:4, name:"Neha" }

];


function ListView(){

  return(

    <List className="w-[300px] border rounded">

      {users.map(user => (

        <div key={user.id}>

          <ListItem>

            <ListItemText

              primary={user.name}

            />

          </ListItem>

          <Divider/>

        </div>

      ))}

    </List>

  );

}

export default ListView;