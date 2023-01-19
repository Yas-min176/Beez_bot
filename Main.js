function myFunction() {

    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var sh = planilha.getActiveSheet();
    var row = sh.getLastRow(); //Pega o número da ultima linha com alguma informação
    
    
    var nome = sh.getRange(row,2).getValue(); //Pega a informação na planilha
    var valor = sh.getRange(row,4).getValue(); //Pega a informação na planilha
    valor = parseInt(valor);
    
    if(valor >= 450)
    {
     texto = "Tome 4 unidades de insulina humana regular.";
      medico(nome , valor);
    }
    else if( valor >= 350)
    {
     texto = "Tome 3 unidades de insulina humana regular.";
      medico(nome , valor);
    }
    else if( valor >= 250)
    {
     texto = "Tome 2 unidades de insulina humana regular.";
      medico(nome , valor);
    }
    else if( valor <=60)
    {
      texto = "Comer alimento doce e ir para o hospital caso a condição se mantenha.";
      medico(nome , valor);
    }
    else if( valor <90)
    {
      texto = "Comer alimento doce.";
       medico(nome , valor);
    }
    else
    {
     texto = "Glicemia estável.";
     medico(nome , valor);
    }
    
    
    var chat_id = 123456789; //Chat do paciente
    
    var botID = "your-bot-id";
    texto = encodeURIComponent(texto)
    
    var url = "https://api.telegram.org/bot" + botID + "/sendMessage?chat_id=-"+chat_id+"&text="+ texto
    Logger.log(url)
    
    UrlFetchApp.fetch(url);
    }
    
    function medico(nome , valor)
    {
      var chat_id = 123456789; //chat do médico
    
    var texto = "O teste do paciente " + nome + " deu o seguinte valor:\n" + valor + "\nPlanilha de dados do paciente: https://docs.google.com/spreadsheets/d/1ZGMtN2mjV425OFKzYBJzcS25B2xaDT30-9HbuFWkq-o/edit?usp=sharing" ;
    var botID = "your-bot-id";
    texto = encodeURIComponent(texto)
    
    var url = "https://api.telegram.org/bot" + botID + "/sendMessage?chat_id=-"+chat_id+"&text="+ texto
    Logger.log(url)
    
    UrlFetchApp.fetch(url);
    } 