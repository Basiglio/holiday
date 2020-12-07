// Vogliamo gestire la nostra libreria di casa.
// Abbiamo un array di libri. Ogni libro è rappresentato da 3 proprietà: autore, titolo e anno di pubblicazione.
// Ad es.
// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in libreria. Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout (quello possiamo farlo in un secondo momento). Limitiamoci a stamparli in una ul o in dei paragrafi con degli hr come separatori.
// MILESTONE 2
// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella libreria.
// MILESTONE 3
// I libri cominciano ad essere un bel po'. Abbiamo bisogno di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore. Al click su un pulsante "Cerca", andiamo a filtrare i libri da visualizzare.

$( document ).ready(function() {


	const books = [
		{
			title: "Il vecchio e il mare",
			author: "Ernest Hemingway",
			year: 1951
		},
		{
			title: "La forma dell'acqua",
			author: "Andrea Camilleri",
			year: 1994
		},
		{
			title: "Elogio della follia",
			author: "Henri Laborit",
			year: 1976
		},
		{
			title: "La camera azzurra",
			author: "George Simenon",
			year: 1964
		},
		{
			title: "Mojito al mare",
			author: "Ernest Hemingway",
			year: 1951
		},
	];


  // STAMPO LIBRI
	books.forEach(
		(object) => {
			$("#list").append(
				`
				<li>${object.title} ${object.author} ${object.year}</li>
				`
			)
	});

	// AGGIUNGO LIBRO
	$("#submit").click(
		function () {
			let title = $("#title").val()
			let author = $("#author").val()
			let year = $("#year").val()
			// CREO NUOVO OGGETTO LIBRO
			let newBook = {
				title: title,
				author: author,
				year: year,
			};
			// PUSHA OGGETTO IN ARRAY
			books.push(newBook);
			console.log(books);
			// STAMPA OGGETTO IN HTML
			$("#list").append(
				`
				<li>${newBook.title} ${newBook.author} ${newBook.year}</li>
				`
			)
		}
	)
	// CERCO LIBRO

	$("#searchsubmit").click(
		function () {
			// PRENDO AUTORE AL CLICK E SALVO IN VARIABILE
			var author = $("#searchbar").val();
			// CONFRONTO AUTORE CON GLI AUTORI NEL MIO ARRAY DI OGGETTI
			result = false;
			books.forEach((object) => {
				// SE L'AUTORE è PRESENTE NEL MIO ARRAY
				if (author == object.author) {
					result = true;
					// STAMPO I LIBRI ASSOCIATI A LUI
					$("#search_list").append(

						`
						<li>${object.title} ${object.author} ${object.year}</li>
						`
					)
					let objectAuthor = object.autor;
				}

			});

			if (result == false) {
				$("#search_list").append(
					`<p>Autore non presente in libreria</p>`
				)
			} else {
				$("#search_list").append(
					`<p>Ecco i libri che ho trovato:</p>`
				)
			}
		}
	)
});



// >-------------------------------------------------------
