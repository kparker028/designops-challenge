import React from "react";
import "./userCard.css";
import { Text } from "../text/text";
import { Button } from "../button/button";
import { Avatar } from "../avatar/avatar"
import { Card } from "../card/card"


export const UserCard = ({profileImage, firstName, lastName, age, setActiveUserIndex}) => {

    
    return (
        <Card>
            <div className="innerContent">
                <div className="profileImage">
                    <Avatar image={profileImage} size="medium" />
                </div>
                       
                 <div className="userName">
                    <Text tag="p">{`${firstName} ${lastName}`}</Text>
                
                   <Text tag="p">{!age ? "No Birthdate Entered" : `${age} Years Old`}</Text>
                </div>
                <div className="button">
                     <Button onClick={setActiveUserIndex} size="medium" title="View Profile" />
                </div>
            </div>
       </Card>
    )
}