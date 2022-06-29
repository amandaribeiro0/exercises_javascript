const http = require ('http');
var porta = 8080;

//create a server object:
const servidor = http.createServer(function (req, res) {
    res.write('Hello Amandinha!'); //write a response to the client
    res.end(); //end the response
  })
  
  servidor.listen(porta, () =>{
    console.log("Deu certo")
  }); //the server object listens on port 8080