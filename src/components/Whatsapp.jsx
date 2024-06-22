import React from 'react';
import picture from "./images/pandian.jpg"

import { FloatingWhatsApp } from 'react-floating-whatsapp';
 

function WhatsApp() {

  return (
    <div>
      <FloatingWhatsApp  accountName="Mr Pandian"  avatar={picture} statusMessage="online" phoneNumber="+919789053645" allowEsc
        allowClickAway
        notification
        notificationSound/> 
    </div>
  );
}

export default WhatsApp;


