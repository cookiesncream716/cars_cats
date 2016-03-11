var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	console.log('client request URL: ', request.url);
	if(request.url === '/cars'){
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/red_car.jpg'){
    	fs.readFile('./images/red_car.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/red_wings_car.jpg'){
    	fs.readFile('./images/red_wings_car.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/green_tiny_car.jpg'){
    	fs.readFile('./images/green_tiny_car.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/blue_car.jpg'){
    	fs.readFile('./images/blue_car.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/cats'){
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url === '/images/cat_cheeseburger.jpg'){
    	fs.readFile('./images/cat_cheeseburger.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/cat.jpg'){
    	fs.readFile('./images/cat.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/cat_scare.jpg'){
    	fs.readFile('./images/cat_scare.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/images/cat_tongue.jpg'){
    	fs.readFile('./images/cat_tongue.jpg', function(errors, contents){
        	response.writeHead(200, {'Content-type': 'image/jpg'});
        	response.write(contents);
        	response.end();
    	});
  	}
  	else if(request.url === '/cars/new'){
		fs.readFile('./views/cars_new.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else{
		response.writeHead(404);
		response.end('File not found!!!');
	}
});

server.listen(6789);
console.log('Running in localhost at port 6789');