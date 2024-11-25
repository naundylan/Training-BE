const currDevice = navigator.userAgentData.mobile;

if(currDevice)
    console.log("Mobile");
else
    console.log("PC");
    