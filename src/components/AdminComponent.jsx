import React from 'react';
import ParticipantPage from 'cvr-rui';

 const AdminComponent = () =>{
    const callEnded = () =>{
        console.log('hey, the call has been ended!!');
        
    }
    const callStarted = () =>{
        console.log('hey, the call has been started!!');
        
    }
    const webVideoConfig = {
        theme:'light',
        joinButtonColor:'secondary',
        roomName:'my-1st-video-room',
        userName:'admin-user',
        participantType:'moderator',
        adminApprovalRequiredToJoinRoom:false,
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
export default AdminComponent;
