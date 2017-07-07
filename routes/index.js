var moviesJson = require('../movies.json');

// Homepage
exports.home = function(request, response) {
	var movies = moviesJson.movies;

	response.render('home', {
		title: 'Star Wars Movies',
		movies: movies
	});
};

// Viewing episodes
exports.movie_single = function(request, response) {
	var episode = request.params.episode_num;
	var movies = moviesJson.movies;

	if (episode > 0 && episode <= movies.length) {
		var movie = movies[episode - 1];

		response.render('movie_single', {
			title: movie.title,
			movie: movie,
			movies: movies
		});
	} 
	else {
		response.render('not_found', {
			title: 'That Star Wars episode doesn\'t exist yet.',
			movies: movies,
		});
	}
};

// Not found
exports.not_found = function(request, response) {
	var movies = moviesJson.movies;

	response.render('not_found', {
		title: 'This is not the page you were looking for.',
		movies: movies
	});
};
