function lembrete_insulina2() {
    var chat_id = 123456789;
    
    var texto = "Olá!\nEstá na hora de você fazer a sua aplicação da NPH - 3 unidades, Paciente X!";
    var botID = "your-bot-id";
    
    texto = encodeURIComponent(texto)
    
    var url = "https://api.telegram.org/bot" + botID + "/sendMessage?chat_id=-"+chat_id+"&text="+ texto
    Logger.log(url)
    
    UrlFetchApp.fetch(url)
    }
    