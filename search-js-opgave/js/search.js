//Her laves et Array med info omkring filmene på listen
var movies = [
    {
         "title": "Good Will Hunting",
         "genre": "Drama & Romance",
         "rating": "IMDb 8.3",
         "year": "1997",
         "director": "Gus Van Sant",
         "length": "2 Hours & 6 minutes"
    },
    {
        "title": "Eternal Sunshine of the Spotless Mind",
         "genre": "Drama & Romance",
         "rating": "IMDb 8.3",
         "year": "2004",
         "director": "Michel Gondry",
         "length": "1 Hour & 48 minutes"
    },
    {
        "title": "12 Years a Slave",
        "genre": "Biography, History & Drama",
        "rating": "IMDb 8.1",
        "year": "2013",
        "director": "Steve McQueen",
        "length": "2 Hours & 14 minutes" 
    },
    {
        "title": "The Silence of the Lambs",
        "genre": "Crime, Drama & Thriller",
        "rating": "IMDb 8.6",
        "year": "1991",
        "director": "Jonathan Demme",
        "length": "1 Hour & 58 minutes" 
    },
    {
        "title": "Legends of the Fall",
        "genre": "Drama, Romance & War",
        "rating": "IMDb 7.5",
        "year": "1994",
        "director": "Edward Zwick",
        "length": "2 Hours & 13 minutes" 
    },
    {
        "title": "Sleepers",
        "genre": "Crime, Drama & Thriller",
        "rating": "IMDb 7.5",
        "year": "1996",
        "director": "Barry Levinson",
        "length": "2 Hours & 27 minutes" 
    },
    {
        "title": "The Green Mile",
        "genre": "Crime, Drama & Fantasy",
        "rating": "IMDb 8.6",
        "year": "1999",
        "director": "Frank Darabont",
        "length": "3 Hours & 9 minutes" 
    },
    {
        "title": "Indiana Jones Raiders of the Lost Ark",
        "genre": "Action & Adventure",
        "rating": "IMDb 8.4",
        "year": "1981",
        "director": "Steven Spielberg",
        "length": "1 Hour & 55 minutes" 
    },
    {
        "title": "Fight Club",
        "genre": "Drama",
        "rating": "IMDb 8.8",
        "year": "1999",
        "director": "David Fincher",
        "length": "2 Hours & 19 minutes"  
    },
    {
        "title": "American History X",
        "genre": "Drama & Crime",
        "rating": "IMDb 8.5",
        "year": "1998",
        "director": "Tony Kaye",
        "length": "1 Hour & 59 minutes" 
    },
]

// Her skabes en HTML liste over tideligere oprettet Array - Listen bliver indsat i et tom container i HTML ved hjælp af et id
var render = function(data) {
    var app = document.getElementById('app');
    var moviesHTMLString = '<ul>' + data.map(function(movies){
        return '<li>' + 
                    '<strong>Title: </strong>' + movies.title + '<br/>' +
                    '<strong>Genre: </strong>' + movies.genre + '<br/>' +
                    '<strong>Rating: </strong>' + movies.rating + '<br/>' +
                    '<strong>Year Published :</strong>' + movies.year + '<br/>' +
                    '<strong>Director: </strong>' + movies.director + '<br/>' +
                    '<strong>Length: </strong>' + movies.length + '<br/>' + '<br/>' +
                '</li>';
    }).join('');
    + '</ul>';

    app.innerHTML = moviesHTMLString;
}

render(movies);


var handleSearch = function(event) {
    event.preventDefault(); // stopper siden fra at genindlæse efter submission
    // Her hentes 'search terms' fra input feltet i HTML
    var searchTerm = event.target.elements['search'].value;
    // her opdeles 'search terms' i individuelle termer og samt fjernes der white space
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  her laves en 'regular expression' for alle 'search terms' 
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = movies.filter(function(movie){
      // her omdannes alle values til 'strings'
      var movieString = '';
      for(var key in movie) {
        if(movie.hasOwnProperty(key) && movie[key] !== '') {
          movieString += movie[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // her retuneres de objekter som matcher søgningen
      return movieString.match(searchTermRegex);
    });
    // her vises søgeresultaterne
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(movies);
  });



