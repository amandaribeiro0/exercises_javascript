function MostrarEstado(){
    let sCPF = document.getElementById("cpf").value;
    let resultado = ""
    console.log(sCPF)

    let digito = sCPF.split(".")[2].split("-")[0].split("")[2]
    console.log(digito)

    switch(digito){
        case "1":
            resultado = "Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;"
            break
        
        case "2":
            resultado = "Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;"
            break
        
        case "3":
            resultado = "Ceará, Maranhão e Piauí;"
            break
        
        case "4":
            resultado = "Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;"
            break

        case "5":
            resultado = "Bahia e Sergipe;"
            break

        case "6":
            resultado = "Minas Gerais;"
            break

        case "7":
            resultado = "Rio de Janeiro e Espírito Santo;"
            break

        case "8":
            resultado = "São Paulo;"
            break

        case "9":
            resultado = "Paraná e Santa Catarina;"
            break

        case "0":
            resultado = "Rio Grande do Sul"
            break
    }

    console.log(resultado)
    document.getElementById("result").innerText = resultado;

} 