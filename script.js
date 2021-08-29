const inputpassword = document.querySelector("input[type=password]");
const inputs = document.querySelectorAll("input[type=text],input[type=password]");
const password = document.getElementById("password");
const toggel = document.getElementById("toggel");
const button =document.querySelector("button")
const form=document.querySelector(".form2")
const prenom =document.getElementById('text1')
const Nomfamille =document.getElementById('text2')
const tel=document.querySelector("input[type=tel]")
const pass =document.getElementById("pass")
 
// Nomfamille.addEventListener("click",(e)=>{
//   if 
// })

password.addEventListener("input", (e) =>{ 
     if (e.target.value !=="") {
       toggel.classList.add("invisible")
    }else{
        toggel.classList="";
        }
      })

      function toggelClicked() {  
        if (password.type==='password'){
          password.setAttribute('type','text');
          toggel.classList.add("visible")
        }else{
          password.setAttribute('type','password');
          toggel.classList.remove("visible")
        }
      };
      

      // Get the modal
     var modal = document.getElementById("myModal");
     
     // Get the button that opens the modal
     var btn = document.getElementById("myBtn");
     
     // Get the <span> element that closes the modal
     var span = document.getElementsByClassName("close")[0];
     
     // When the user clicks on the button, open the modal
     btn.onclick = function() {
       modal.style.display = "block";
     //  document.body.style.opacity="0.3"
      document.body.style.background="hsl(240,20%,99%)"
     }
     
     // When the user clicks on <span> (x), close the modal
     span.onclick = function() {
       modal.style.display = "none";
     }
     
    // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     }
        
    
