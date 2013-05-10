// Modules
var http 	= require('http'),
	url 	= require('url'),
	fs 		= require('fs');


// http.createServer(function(req, res){
//     fs.readFile('static/index.html',function (err, data){
//         res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
//         res.write(data);
//         res.end();
//     });
// }).listen(3001, "127.0.0.1");


// Content
// var home 		= "Home content";
// var articles 	= "Article content";
// var about 		= "About content";

// // Create server
http.createServer( function(req,res){

	switch ( req.url ){

		// Home
		case '/' : 

			fs.readFile('static/index.html', function (err, data) {

			    if (err) {
			        throw err; 
			    }       

				res.writeHead(200, {'Content-Length': data.length,'Content-Type' 	: 'text/html'});
				res.write(data);
				res.end(); 

			});

		break;

		// Articles
		case '/articles' : 

			fs.readFile('static/articles.html', function (err, data) {

			    if (err) {
			        throw err; 
			    }       

				res.writeHead(200, {'Content-Length': data.length,'Content-Type' 	: 'text/html'});
				res.write(data);
				res.end(); 

			});

		break;

		// About
		case '/about' : 

			fs.readFile('static/about.html', function (err, data) {

			    if (err) {
			        throw err; 
			    }       

				res.writeHead(200, {'Content-Length': data.length,'Content-Type' 	: 'text/html'});
				res.write(data);
				res.end(); 

			});

		break;

		// Not Found
		default : 

			res.statusCode = 404;
			res.write(http.STATUS_CODES[404]);

		break;

	}

}).listen(3001,"127.0.0.1")