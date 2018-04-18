var ip = "http://192.168.1.60";


    
$(document).ready(function () {

    $.ajax({
        type: "get",
        url: ip + ":3000/connected",
        dataType: 'json',

        success: function (data) {
            isConnected(data);
        },
        error: function (param1, param2) {
            alert('La connexion au serveur d\'authentification à échoué désolé');
        }
        
        
   
    });  

});


//fonction pour vérifier l'état du booléen isConnected pour savoir si l'administrateur est connecté
function isConnected(users) {
    if (users.isConnected) {
         $.ajax({
        type: "get",
        url: ip + ":10000/cartes/get",
        
        dataType: 'json',

        success: function (data) {
            affichageCarte(data);
            //affichageMenu(data);


        },
        error: function (param1, param2) {
            alert('La connexion au serveur d\'authentification à échoué désolé');
        }

    });
        return true
    } else {
        window.location.href = "http://restologue.bwb/connection.html?";
        return false
    }
}

//cette fonction attend une liste de carte
function affichageCarte(listeDeCarte) {
    
    
    
    var table = $("<table>");
    $("#listeDeCarte").append(table);
    $(table).addClass("table table-dark")
            .append($("<thead>")
                    .append($("<tr>")
                            .append($("<th>").text("Entrée"))
                            .append($("<th>").text("Modifier"))
                            .append($("<th>").text("Supprimer"))));
    var tbody = $("<tbody>");
    $(table).append(tbody);
    
    for (var i = 0; i < listeDeCarte.length; i++) {
        var nom = listeDeCarte[i].nom;
        var tr = $("<tr>");
        $(tr).append($("<td>").text(nom).attr('onclick', 'getMenus('+ listeDeCarte[i].id +')'))
                .append($("<td>").append($("<button>").addClass("btn btn-secondary").text("Modifier")))
                .append($("<td>").append($("<button>").addClass("btn btn-danger").text("Supprimer").attr('onclick', 'deleteCard('+ listeDeCarte[i].id +')')));
        $(tbody).append(tr);
 
    }
    
    $.ajax({

        type:"GET",

        url: "http://192.168.1.60:10000/cartes/get",

        dataType: 'json',
        
        async : false,

        success : function(data){
            alert("l'interface de françois déchire");
            
         

        },

        error : function(param1,param2){

            alert("erreur");

        }

    });        
}
;

function creationInput() {

    var table = $("<table>");
    $("#listeDeMenu").append(table);
    $(table).addClass("table table-dark")
            .append($("<thead>")
                    .append($("<tr>")
                            .append($("<select>").addClass("form-control").text("Catégorie").append($("<select>")))));
    var input = $("<input>");
    $("#listeDeMenu").append($("<input>").text("test")).append($("<button>").addClass("btn btn-primary").text("add"));
}

//récupérer tous les menus d'une carte précise
function getMenus(idCarte){
    $.ajax({
        type : "GET",
        url : "http://192.168.1.60:10000/cartes/"+ idCarte +"/menus/get",
        success : function(menusCarte){
            
            affichageMenu(menusCarte);
        }
        
    });
    
    
}
//afficher tous les menus qui sont passer en argument
function affichageMenu(menus) {
    
    

    var table = $("<table>");
    $("#listeDeMenu").append(table);
    $(table).addClass("table table-dark")
            .append($("<thead>")
                    .append($("<tr>")
                            .append($("<th>").text("Entrée"))
                            .append($("<th>").text("Prix"))
                            .append($("<th>").text("Ajouter"))
                            .append($("<th>").text("Modifier"))
                            .append($("<th>").text("Supprimer"))));
    var tbody = $("<tbody>");
    $(table).append(tbody);
    
    for (var i = 0; i < menus.length; i++) {
       
        var nom = menus[i].nom;
        var prix = menus[i].entree.prix;
        var tr = $("<tr>");
        $(tr).append($("<td>").text(nom)).append($("<td>").text(prix))
                .append($("<td>").append($("<button>").addClass("btn btn-primary").text("Ajouter").attr('onclick', "creationInput()")))
                .append($("<td>").append($("<button>").addClass("btn btn-secondary").text("Modifier")))
                .append($("<td>").append($("<button>").addClass("btn btn-danger").text("Supprimer")));
        $(tbody).append(tr);
    }
    }

;
//fonction qui supprime le contenu de la liste de carte
function refreshCarte (listeDeCarte){
    
    $("#listeDeCarte").empty();
        
}
// fonction qui rajoute une carte dans la liste
function addCarte(){
    
    var carte = {

        nom : $("#nomCarte").val(),

        menus : []


        };
        $.ajax({

       type: "POST",

       url: "http://192.168.1.60:10000/cartes/add",

       data: carte,
       
       //me retourne juste une carte dans "data"
       success : function(data) {
           
           getCards();
           alert("carte rajouter");
           
       }

    });
        
        
    }
 // fonction qui permet de mettre a jour la vue
 function getCards(){
      
     $.ajax({

        type:"GET",

        url: "http://192.168.1.60:10000/cartes/get",

        dataType: 'json',
        
        async : false,

        success : function(listeDeCarte){
            alert("l'interface de françois déchire");
         // suprime l'anciene liste de carte   
         refreshCarte ();
         //affiche la liste de cartes
         affichageCarte(listeDeCarte);
         

        },

        error : function(param1,param2){

            alert("erreur");

        }

    });        
 }
 

//fonction qui permet de supprimer une carte
 function deleteCard(){
     
     
     
     
     
 }   
    
    



//function createTab() {
//
//    var table = $("<table>");
//    $("#listeDeCarte").append(table);
//    $(table).addClass("table table-dark").append($("<thead>")
//            .append($("<tr>")
//                    .append($("<th>").text("Entrée"))
//                    .append($("<th>").text("Modifier"))
//                    .append($("<th>").text("Supprimer"))));
//            
//    var tbody = $("<tbody>");
//    $(table).append(tbody);
//    var tr = $("<tr>");
//    $(tbody).append($("<td>").text("E1"))
//            .append($("<td>").append($("<button>").addClass("btn btn-secondary").text("Modifier")))
//            .append($("<td>").append($("<button>").addClass("btn btn-danger").text("Supprimer")))
//
//
//
//
//
//}

