   vm = new Vue({
       el: '#login',
       data: {
           username: "ken",
           password: "123",
         },
    
       checkUsers: {
         doLogin: function() {
           this.submitData = this.user;
         }
       }
     });


  //  var usersList = [
  //    {
  //      username: "ken",
  //      password: "borg"
  //    }
  //  ]
  //  function checkUsers(){
  //    var username = document.getElementById('username').value
  //    var password = document.getElementById('password').value
  //  for (i = 0; i < usersList.length; i++){
  //    if(username == usersList[i].username && password == usersList[i].password) {
  //      alert(" Welcome back " + username)
  //      return
  //      }
  //    }
  //    alert("username or password incorrect")
  //    window.location.reload();

  //    return
  //  }
  


  function registerUser(){
    
    var registerName = document.getElementById('studentName').value
    var registerSurname = document.getElementById('studentSurname').value
    var registerUsername = document.getElementById('username').value
    var registerEmail= document.getElementById('email').value
    var registerPsw = document.getElementById('psw').value
    var registerpswRepeat = document.getElementById('pswRepeat').value
  
  
    for (i = 0; i < usersList.length; i++){
      if(registerUsername == usersList[i].username){
        alert("username exists");
        return
      } else if ((registerEmail == usersList[i].email)){
        alert("email exists");
        return
      } else if ((registerPsw !== registerpswRepeat)){
        alert("password mismatch");
        return
      }
    }
      var newUser = {
        studentName: registerName,
        studentSurname: registerSurname,
        username:registerUsername,
        email:registerEmail,
        psw :registerPsw,
        pswRepeat:registerpswRepeat,
      }

    
    
   usersList.push(newUser)
    console.log(newUser)
  
  }

  // For Admin page

  function fetchArray(key){
    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key));
    }
    return [];
  }
  function saveArray(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // app = new Vue({
  //   el: "#classes",
  //   data: {
  //     users: fetchArray("users")
  //   },
  
  //   ready: function(){
  //     this.$watch("users", function(value){
  //       saveArray("users", value);
  //     });
  //   },
    
  //   methods: {
  //     addUser: function(name){
  //       this.users.push(name);
  //       this.user = "";
  //     },
  //     removeUser: function(index){
  //       this.users.$remove(index)
  //     }
  //   }
  // });

  // app = new Vue({
  //   el: "#activities",
  //   data: {
  //     users: fetchArray("users")
  //   },
  
  //   ready: function(){
  //     this.$watch("users", function(value){
  //       saveArray("users", value);
  //     });
  //   },
    
  //   methods: {
  //     addUser: function(name){
  //       this.users.push(name);
  //       this.user = "";
  //     },
  //     removeUser: function(index){
  //       this.users.$remove(index)
  //     }
  //   }
  // });
  