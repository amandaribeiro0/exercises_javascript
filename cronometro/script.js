//let x = 0
//const segundos = () => console.log( (x += 1) + " segundos")
//setInterval(segundos, 1000)



//function timer() {
    //const minutos = () => console.log((minuto -= 1) + " minutos")
   // const segundos = () => console.log( (segundo -= 1) + " segundos")


//
    //setInterval(minutos, 60000)
  //  setInterval(segundos, 1000)

  //  if (segundo == 0) {
   //   segundo = segundo;

  //  }
  var sec = '59'
  var min = 24
  var relogio;
  var interval;

  function start(){
   interval = setInterval (cronometro,1000)
  }

  function cronometro (){

    document.getElementById('timer').innerText = min + ':' + sec 

    sec--
    if (sec=='00'){
      min --
      if (min==0 && sec=='00'){
        stop()
  
      }
      sec = '59'
    
    }
    
  }

  function pause (){
    clearInterval (interval)
  }

  function stopp (){
    clearInterval (interval)
    document.getElementById('timer').innerText = '00:00'
  }