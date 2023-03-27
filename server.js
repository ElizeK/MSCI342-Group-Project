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
const { user } = require('./config.js');
const { title } = require('process');
const API_KEY = "6b7b0836496b456f93fbce243cb33ae1";
// const API_KEY = "5ae7abb759d7488c966c2013803bdd91";
const newsapi = new NewsAPI(API_KEY);


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
	let firebaseUuid = req.body.firebaseUuid;

	let data = [userId];

	let sql = `INSERT INTO think_pieces(user_id, title, content, summary, topic, url, firebase_uuid)
VALUES(${userId}, "${title}", "${content}", "${summary}", "${topic}", "${url}", "${firebaseUuid}")`;

	connection.query(sql, data, (error, results, fields) => {
		if (error) {
			return console.error(error.message)
		}
		let string = JSON.stringify(results);
		res.send({ express: string });
	});
	connection.end();

})

app.post('/api/viewThinkPiece', (req, res) => {
	let connection = mysql.createConnection(config);
	let uuid = req.body.uuid;
	if (uuid !== "") {
		let sql = `SELECT * FROM think_pieces WHERE firebase_uuid = ("${uuid}")`
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			res.send({ think_pieces: results });
		});
	}
	connection.end();
})


app.post('/api/viewOtherThinkPieces', (req, res) => {
	let connection = mysql.createConnection(config);
	let uuid = req.body.uuid;
	if (uuid !== "") {
		let sql = `SELECT * FROM think_pieces WHERE firebase_uuid != ("${uuid}")`
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			res.send({ think_pieces: results });
		});
	}
	connection.end();
})	

	
app.post('/api/viewFavoriteArticles', (req, res) => {
	let connection = mysql.createConnection(config);
	let uuid = req.body.uuid;

	console.log("firebase uuid: " + uuid)
	if (uuid !== "") {
		let sql = `SELECT * FROM favourited_articles WHERE firebase_uuid = ("${uuid}")`
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return console.error(error.message);
			}

			console.log("RESULTS FROM API: " + JSON.stringify(results))
			res.send({ favourited_articles: results });
		});
	}
})

app.post('/api/updateThinkPiece', (req, res) => {
	let connection = mysql.createConnection(config);
	let title = req.body.title;
	let content = req.body.content;
	let summary = req.body.summary;
	let topic = req.body.topic;
	let url = req.body.url;
	let uuid = req.body.uuid;
	let piece_id = req.body.pieceid;
	
	let sql = `UPDATE think_pieces SET title = '${title}', content = ${content}', summary = '${summary}, topic = ${topic}, url = ${url}, firebase_uuid = ${uuid} WHERE piece_id = ${piece_id}`
	
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

// 			console.log("results are: " + JSON.stringify(results))
// 			res.send({ favourited_articles: results });
// 		});
// 	}
// 	connection.end();
// })

app.post('/api/preferenceCategory', (req, res) => {
	console.log("MADE IT TO API")
	let connection = mysql.createConnection(config);
	let uuid = req.body.uuid;
	if (uuid !== "") {
		console.log("uuid: ", uuid);
		// let sql = `SELECT preference_category FROM user_info WHERE user_id = ("${userID}%")`;
		let sql = `SELECT preference_category FROM user_info WHERE firebase_uuid = "${uuid}"`
		console.log(sql)
		connection.query(sql, (error, results, fields) => {
			if (error) {
				return console.error(error.message);

			}
			// let string = JSON.stringify(results);
			// let obj = JSON.parse(string);
			res.send({ user_info: results });

		});
	}
	connection.end();
})

app.post('/api/getUserInfo', (req, res) => {
	// let userID = req.body.userID
	let connection = mysql.createConnection(config);
	let uuid = req.body.uuid;

	console.log("UUID: ", uuid);
	// let sql = `SELECT preference_category FROM user_info WHERE user_id = ("${userID}%")`;
	let sql = `SELECT * FROM user_info WHERE firebase_uuid = ("${uuid}")`
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


app.post('/api/updateUserInfo', (req, res) => {
	// let userID = req.body.userID
	let connection = mysql.createConnection(config);
	let preference = req.body.preference
	let language = req.body.language

	let uuid = req.body.uuid;


	// console.log("UserID: ", userID);

	let sql = `UPDATE user_info SET preference_category = '${preference}',  user_language = '${language}' WHERE firebase_uuid = ("${uuid}")`;
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



//does not handle stuff with quotes 
app.post('/api/article/favourite', (req, res) => {

	let connection = mysql.createConnection(config);

	let title = req.body.title;
	let author = req.body.author;
	let url = req.body.url
	let firebaseUuid = req.body.firebaseUuid;
	let summary = req.body.description;
	let urlToImage = req.body.urlToImage;
	let publisher = req.body.publisher;
	let publishedAt = new Date(req.body.publishedAt).toISOString().slice(0, 19).replace('T', ' ');;
	let sql = `INSERT INTO favourited_articles(title, author, url, firebase_uuid, summary, image_url, publisher, date_of_publication)
	VALUES("${title}", "${author}", "${url}", "${firebaseUuid}", "${summary}", "${urlToImage}", "${publisher}", "${publishedAt}")`;

	connection.query(sql, (error, results, fields) => {
		if (error) {
			console.error(error.message)
			return res.status(500).json({ error: 'Internal Server Error' });
		}
		res.send({ favourited_articles: results });

	});
	connection.end();
})


// app.post('/api/news/topHeadlines', (req, res) => {
// 	console.log(req.body)
// 	const category = req.body.category;
// 	const pageSize = req.body.pageSize;
// 	const sortBy = req.body.sortBy

// 	const url = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`
// 	fetch(url)
// 		.then(response => {
// 			response.json().then(
// 				data => {
// 					console.log(data)
// 					res.send(data) // .send takes the response from our end and sends it 
// 				})
// 		})
// });

app.post('/api/news/topHeadlines', (req, res) => {
	// console.log(req.body);

	const category = req.body.category;
	const pageSize = req.body.pageSize;
	const sortBy = req.body.sortBy;


	// const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`;

	const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&sortBy=${sortBy}&language=en&apiKey=${API_KEY}`;

	fetch(topHeadlinesUrl)
		.then(response => {
			response.json().then(topHeadlinesData => {
				console.log(topHeadlinesData);


				// const query = topHeadlinesData.articles?.length > 0 ? topHeadlinesData.articles.map(article => {
				// 	const title = article.title.substring(0, 20).replace(/\s+/g, '-');
				// 		console.log(title + " is title")

				// 	return `(${title})`;
				// }).join(' OR ') : "";
				// const everythingUrl = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`;
				// // const everythingQuery = query ? `(${query.join(' OR ')})` : '';
				// // const everythingUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(everythingQuery)}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`;

				const query = topHeadlinesData.articles?.length > 0 ? topHeadlinesData.articles.map(article => {
					const title = encodeURIComponent(article.title.substring(0, 20).replace(/\s+/g, '-'));
					console.log(title + " is title")

					return `(${title})`;
				}).join(' OR ') : "";
				// const qInTitle = encodeURIComponent(query);
				// console.log(title)
				console.log(query)
				const everythingUrl = `https://newsapi.org/v2/everything?qInTitle=${encodeURIComponent(query)}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`;
				console.log("url is " + everythingUrl)

				fetch(everythingUrl)
					.then(response => {
						response.json().then(everythingData => {
							console.log(everythingData);
							console.log(query + " is query")
							console.log(category + " is category")

							res.send(everythingData);
						});
					});
			});
		})
		.catch((error) => {
			console.log(error)
		});
});

app.post('/api/news/everything', (req, res) => {
	console.log("TESTING")
	console.log(req.body)
	const query = req.body.query
	const pageSize = req.body.pageSize
	const language = req.body.language
	const source = req.body.source
	const sortBy = req.body.sortBy
	console.log(query)

	let url = "";

	if (language == "" && source == "") {
		url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sortBy=${sortBy}&apiKey=${API_KEY}`
	} else if (language == "") {
		url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sources=${source}&sortBy=${sortBy}&apiKey=${API_KEY}`
	} else if (source == "") {
		url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&language=${language}&sortBy=${sortBy}&apiKey=${API_KEY}`
	} else {
		url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&sources=${source}&language=${language}&sortBy=${sortBy}&apiKey=${API_KEY}`
	}

	fetch(url)
		.then(response => {
			response.json().then(
				data => {
					const totalResults = data.totalResults
					console.log(data)
					console.log(query)
					console.log(pageSize)
					console.log(language)
					console.log(source)
					console.log(sortBy)
					console.log(totalResults)
					res.send(data) // .send takes the response from our end and sends it 
				})
		})
});



app.post('/articleHeadlines', (req, res) => {
	let connection = mysql.createConnection(config);
})

app.listen(port, () => console.log(`Listening on port ${port}`)); //for the dev version
//app.listen(port, '129.97.25.211'); //for the deployed version, specify the IP address of the server