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
const newsapi = new NewsAPI('24f5ebf9cc7b40cabd16b6e0c5633d1a');


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

app.post('/api/thinkpieces', (req, res) => {

	let connection = mysql.createConnection(config);
	let userId = req.body.userId;
	//console.log(userId)
	let title = req.body.title;
	let content = req.body.content;
	let summary = req.body.summary;
	let topic = req.body.topic;
	let url = req.body.url;

	userId = 1;

	let data = [userId];

	let sql = `INSERT INTO think_pieces(user_id, title, content, summary, topic, url)
	VALUES(${userId}, "${title}", "${content}", "${summary}", "${topic}", "${url}")`;

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message);
		}

		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();
});

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

app.post('/api/news/topHeadlines', (req, res) => {
	const language = req.body.language;
	const category = req.body.category;
	newsapi.v2.topHeadlines({
		category: category ?? 'business',
		language: language ?? 'en',
		pageSize: 15
	}).then(response => {
		res.send(response.articles);
	});
});

app.post('/articleHeadlines', (req, res) => {
	let connection = mysql.createConnection(config);
})



app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server
