$(document).ready(function () {
    var table = $("<table>");
    $("#listeDeCartes").append(table);
    $(table).addClass("table table-dark")
            .append($("<thead>")                            .append($("<th>").text("Prix"))
                            .append($("<th>").text("Categorie"))
                    .append($("<tr>")
                            .append($("<th>").text("Nom"))
                            .append($("<th>").text("Modifier"))
                            .append($("<th>").text("Supprimer"))));
    var tbody = $("<tbody>");
    $(table).append(tbody);
    for (var i = 0; i < listeDeFilms.length; i++) {
        var tr = $("<tr>");
        $(tr).append($("<td>").text(listeDeFilms[i].titre)).append($("<td>").text(listeDeFilms[i].auteur))
                .append($("<td>").append($("<td>")).text(listeDeFilms[i].categorie))
                .append($("<td>").append($("<button>").addClass("btn btn-secondary").text("Modifier")))
                .append($("<td>").append($("<button>").addClass("btn btn-danger").text("Supprimer")));
        $(tbody).append(tr);
    }
});

