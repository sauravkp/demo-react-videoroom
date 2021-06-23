import React from 'react';
import ParticipantPage from 'cvr-rui';

 const UserComponent = () =>{ 
    const callEnded = () =>{
        console.log('hey, the call has been ended!!');
       
    }
    const callStarted = () =>{
        console.log('hey, the call has been started!!');
    }
    const webVideoConfig = {
        theme:'dark',
        joinButtonColor:'primary',
        roomName:'my-1st-video-room',
        userName:'regular-user',
        participantType:'',
        screenSharing:true,
        chatOption:true,
        callStartFunction:callStarted,
        callEndFunction:callEnded,
      }

     
     return(
         <div>
            <ParticipantPage config={webVideoConfig} />
         </div>
         
     )
 }
export default UserComponent;
