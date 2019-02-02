
window.onload = function () {

  var name
  name = prompt('Enter your name:', defaultStatus)
  checkName(name)

  function checkName(nameArg) {
    if(nameArg === null || nameArg === '') {
      console.log('error')
      alert('error, enter your name')
    }
    else{
      for (var i = 0; i < nameArg.length; i++){
        if (Number(nameArg[i])){
          console.log(nameArg.toUpperCase())
          alert(nameArg.toUpperCase())
          break
        }
        else if(i == nameArg.length - 1) {
          console.log(nameArg.split("").reverse().join(""))
          alert(nameArg.split("").reverse().join(""))
        }
      }
    }
  }

}

