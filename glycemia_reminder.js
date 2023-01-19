function lembrete_medicao() {

    var chat_id = 123456789;
    
    var texto = "Olá!\nEstá na hora de você fazer a sua medição, Paciente X!\nhttps://forms.gle/NfuMna65QYzLYZ849";
    var botID = "your-bot-id";
    
    texto = encodeURIComponent(texto)
    
    var url = "https://api.telegram.org/bot" + botID + "/sendMessage?chat_id=-"+chat_id+"&text="+ texto
    Logger.log(url)
    
    UrlFetchApp.fetch(url);
    }