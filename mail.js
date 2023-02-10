const firebaseConfig = {

    apiKey: "AIzaSyAW4cTAsG2QiXXGvS2FyOwZYbR_BqCQDXM",

    authDomain: "contactform-37fe3.firebaseapp.com",

    databaseURL: "https://contactform-37fe3-default-rtdb.firebaseio.com",

    projectId: "contactform-37fe3",

    storageBucket: "contactform-37fe3.appspot.com",

    messagingSenderId: "831163231244",

    appId: "1:831163231244:web:1b1575ba788436368a9229"

  };
firebase. initializeApp(firebaseConfig);
//
var contactFormDB = firebase.database().ref('contactForm');
document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e) {
  window.location.href ="https://scene.taurus.cash/promotion/aw/slm_1700103/u/67783128/s/s2/ogsyb?channel=slm_1700003&lang=en&scene=s2&uid=67783128";
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
  

