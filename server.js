let mysql = require('mysql');
let config = require('./config.js');
const fetch = require('node-fetch');
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const { response } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));

const NewsAPI = require('newsapi');
const { connect } = require('http2');
const newsapi = new NewsAPI('24f5ebf9cc7b40cabd16b6e0c5633d1a');


app.post('/news', (req, res) => {
	query = req.body.query
	newsapi.v2.topHeadlines({
		q: query,
		category: 'business',
		language: 'en',
		country: 'us'
	}).then(response => {
		res.send(response);
	});
});

app.post('/api/loadUserSettings', (req, res) => {

	let connection = mysql.createConnection(config);
	let userID = req.body.userID;

	let sql = `SELECT mode FROM user WHERE userID = ?`;
	console.log(sql);
	let data = [userID];
	console.log(data);

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		//let obj = JSON.parse(string);
		res.send({ express: string });
	});
	connection.end();
});

app.post('/api/addUser', (req, res) => {
	let connection = mysql.createConnection(config);
	let userId = req.body.userId;
	let username = req.body.username;
	let userEmail = req.body.userEmail;
	let password = req.body.password;
	let preference = req.body.preference;
	let language = req.body.language;
	let firebaseUuid = req.body.firebaseUuid;
	let data = [userId];

	let sql = `INSERT INTO user_info( username, email_address, user_password, preference_category, user_language, firebase_uuid)
	VALUES("${username}", "${userEmail}", "${password}", "${preference}", "${language}", "${firebaseUuid}")`;

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();

});

app.post('/api/thinkpieces', (req, res) => {

	let connection = mysql.createConnection(config);
	let userId = req.body.userId;
	//console.log(userId)
	let title = req.body.title;
	let content = req.body.content;
	let summary = req.body.summary;
	let topic = req.body.topic;
	let url = req.body.url;

	let data = [userId];

	let sql = `INSERT INTO think_pieces(user_id, title, content, summary, topic, url)
VALUES(${userId}, "${title}", "${content}", "${summary}", "${topic}", "${url}")`;

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message)
		}
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();

})

app.post('/api/preferenceCategory', (req, res) => {
	// let userID = req.body.userID
	let connection = mysql.createConnection(config);
	let userID = 1;
	console.log("UserID: ", userID);
	// let sql = `SELECT preference_category FROM user_info WHERE user_id = ("${userID}%")`;
	let sql = `SELECT preference_category FROM user_info WHERE user_id = (${userID})`
	console.log(sql);

	connection.query(sql, (error, results, fields) => {
		if (error) {
			return console.error(error.message);

		}
		// let string = JSON.stringify(results);
		// let obj = JSON.parse(string);
		res.send({ user_info: results });

	});
	connection.end();
})

app.post('/api/getUserInfo', (req, res) => {
	// let userID = req.body.userID
	let connection = mysql.createConnection(config);
	let userID = 1;
	console.log("UserID: ", userID);
	// let sql = `SELECT preference_category FROM user_info WHERE user_id = ("${userID}%")`;
	let sql = `SELECT preference_category FROM user_info WHERE user_id = (${userID})`
	console.log(sql);

	connection.query(sql, (error, results, fields) => {
		if (error) {
			return console.error(error.message);

		}
		// let string = JSON.stringify(results);
		// let obj = JSON.parse(string);
		res.send({ user_info: results });



	});
	connection.end();
})

app.post('/api/article/favourite', (req, res) => {

	let connection = mysql.createConnection(config);
	// let userID = 1;
	// console.log

	// let articleId = ;
	let title = req.body.title;
	let author = req.body.author;
	let url = req.body.url
	// let date = req.body.date_of_publication
	let sql = `INSERT INTO favourited_articles(title, author, url)
	VALUES("${title}", "${author}", "${url}")`;
	// let sql = `INSERT INTO favourited_articles(article_id, title, author) VALUES('${connection.escape(articleId)}', '${connection.escape(title)}', '${connection.escape(author)}')`;

	// let data = [articleId, title, author];
	// console.log("THIS IS TEST");

	connection.query(sql, (error, results, fields) => {
		if (error) {
			console.error(error.message)
			return res.status(500).json({ error: 'Internal Server Error' });
		}
		res.send({ favourited_articles: results });

	});
	connection.end();
})


app.post('/api/news/topHeadlines', (req, res) => {
	console.log(req.body)
	const category = req.body.category;
	const pageSize = req.body.pageSize;

	const url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=24f5ebf9cc7b40cabd16b6e0c5633d1a`
	fetch(url)
		.then(response => {
			response.json().then(
				data => {
					console.log(data)
					res.send(data) // .send takes the response from our end and sends it 
				})
		})
});

// app.post('/api/news/everything', (req, res) => {
// 	console.log(req.body)
// 	const query = req.body.query
// 	const pageSize = req.body.pageSize
// 	const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sortBy=popularity&apiKey=24f5ebf9cc7b40cabd16b6e0c5633d1a`
// 	fetch(url)
// 		.then(response => {
// 			response.json().then(
// 				data => {
// 					console.log(data)
// 					res.send(data) // .send takes the response from our end and sends it 
// 				})
// 		})
// });

app.post('/api/news/everything', (req, res) => {
	console.log("TESTING")
	console.log(req.body)
	const query = req.body.query
	const pageSize = req.body.pageSize
	const language = req.body.language
	// const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sortBy=popularity&apiKey=24f5ebf9cc7b40cabd16b6e0c5633d1a`

	const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&language=${language}&sortBy=popularity&apiKey=24f5ebf9cc7b40cabd16b6e0c5633d1a`
	fetch(url)
		.then(response => {
			response.json().then(
				data => {
					console.log(data)
					console.log(query)
					console.log(pageSize)
					console.log(language)
					res.send(data) // .send takes the response from our end and sends it 
				})
		})
});



app.post('/articleHeadlines', (req, res) => {
	let connection = mysql.createConnection(config);
})

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server