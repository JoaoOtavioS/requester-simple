console.log("Requester v0.1 / by JoaoOtavioS") 

// LEIA ANTES DE USAR
// O código foi feito em menos de 10 minutos, portanto se tiver algum erro, reporte-o.
// [!] ISSO NÃO É UM STRESSER É simplesmente um programinha pra fazer request SIMPLES, por exemplo, para dar get em api localhost para testes...

try {
    require('node-fetch') // Gambiarra pra ver se o cara de fato baixou o node-fetch...
} catch { console.log("\n[AVISO] O PROGRAMA NÃO IRÁ FUNCIONAR!\n [!] Você não possuí as dependencias necessárias para executar o programa.\n") }

var leitor = require('readline').createInterface({ input: process.stdin, output: process.stdout });
leitor.question("Qual url você gostaria de fazer o request?\n", function (answer) {
    var url = answer; console.clear();
    leitor.question("Quantas vezes você gostaria de fazer requests?\n", function (answer) {
        var amount = parseInt(answer); console.clear();
        leitor.question("Quanto tempo de delay [ms] você gostaria de definir?\n", function (answer) {
            var timer = answer; console.clear();
            console.log(`Você gostaria de fazer ${amount} requests para o endereço ${url} a cada ${timer}ms?`)
            leitor.question("sim ou não?\n", function (answer) {
                if (answer == "sim" || answer == "não" || answer == "nao") {
                    console.clear(); var data = new Date(), quantity = 0, success = 0, failed = 0;
                    var interval = setInterval(() => {
                        quantity++
                        if (quantity === amount) return [clearInterval(interval), clearInterval(interval_status), console.log("Iniciando requests...")]; require('node-fetch')(url).then(a => success++).catch(err => [console.log('Falha na requisição da URL'), failed++])
                    }, timer)
                    var interval_status = setInterval(() => { var dt = new Date(); console.clear(); console.log(`[Requester v0.1 by JoaoOtavioS] - Informações: \n [Requests feitos no total: ${success + failed}] [Sucesso: ${success}] [Falha: ${failed}]\n [Horario de inicio: ${data.getDate() + "/" + data.getMonth() + 1 + "/" + data.getFullYear() + " às " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()}] \n [Horario atual: ${dt.getDate() + "/" + dt.getMonth() + 1 + "/" + dt.getFullYear() + " às " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds()}]`) }, 1000)
                } else return [console.clear(), console.log("Resposta inválida, cancelando ações."), leitor.close()]
            })
        })
    })
});