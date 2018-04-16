$(document).ready(function () {
   
    $.ajax({
        type: "get",
        url : "http://192.168.1.56:3000/connected",
        dataType : 'json',
        
        success : function(data){
            isConnected(data);
        },
        error : function(param1, param2){
            alert('La connexion au serveur d\'authentification à échoué désolé');
        }

    });
    
});


//fonction pour vérifier l'état du booléen isConnected pour savoir si l'administrateur est connecté
function isConnected(users){
    if(users.isConnected){
        return true
    }else{
        window.location.href = "http://administration.restologue.bwb/connection.html?"
        return false
    }
}