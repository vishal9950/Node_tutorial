const http = require('http');

http.createServer((request, response) => {
	const {headers, method, url} = request;
	let body = [];
	request.on('error', (err) => {
		console.error(err);
	}).on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		body = Buffer.concat(body).toString();
	});
}).listen(8080);