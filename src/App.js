import React, { useState } from "react";
import "./App.css";
 // Users data here 
import users from "./data/users.json";
import { ExpandedUserCard } from "./components/expandedCard/expandedCard";
import { Grid } from "./components/grid/grid";
import { Modal } from "./components/modal/modal";
import { UserCard } from "./components/userCard/userCard";


function App() {
  const [activeUserIndex, setActiveUserIndex] = useState(-1);

  return (
    <div className="app">
      <Grid>
        {users.map((user) => {
          const { profileImage, firstName, lastName, age, index } = user;
          
          return (
            <UserCard 
            profileImage={profileImage}
            firstName={firstName}
            lastName={lastName}
            age={age}

             
            setActiveUserIndex={() => setActiveUserIndex(index)}{...user}
            />
          );
          
        })}
        
      </Grid>
      {activeUserIndex > -1 && (
        <Modal onClose={() => setActiveUserIndex(-1)}>
          <ExpandedUserCard user={users[activeUserIndex]} />
        </Modal>
      )}
    </div>
  );
}

export default App;
