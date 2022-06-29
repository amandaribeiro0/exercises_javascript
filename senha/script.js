function GerarSenha(){
    let caracteres = "abcdefghijklmnopqrstuvwxyz"

    let especial = document.getElementById("Simbolo").checked 
    let minusucula = document.getElementById("letraMinuscula").checked 
    let maiuscula = document.getElementById("letrtaMaiuscula").checked 
    let numero = document.getElementById("Numero").checked 
    
    if (especial == true){caracteres += '!@#$%&*()?/|^~{]-'}
    if (numero == true){caracteres += "1234567890"}
    if (maiuscula == true){caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}

    alert(caracters)

    
}