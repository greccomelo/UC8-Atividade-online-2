let dataevento = new Date("2021-09-15")
let datadehoje = new Date();

if (datadehoje < dataevento) {
    console.log("Cadastro permitido!");
    console.log("Digite a sua idade:")
    let suaidade = 20;
        if (suaidade > 18) {
            console.log("Sua idade permite o seu acesso. Prossiga!")
            let participantes = 99;
                if (participantes <= 100) {
                    console.log("Ainda há espaço. Cadastre-se agora!")
                    participantes = participantes + 1;
                } else {
                    console.log("Não há mais espaço para este evento.")
                }
        } else {
            console.log("Evento proibido para menores de 18 anos.")
        }
} 
else {
    console.log("Data maior que a data do evento. Não permitido!")
}