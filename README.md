# MSCI342-Group-Project

# Pulse News

# The Problem

The purpose of our system is to be a news media platform that provides accessible and digestible pieces of news in a curated feed based on the user's areas of interest. 
We recognize that many young adults and Gen-Z prefer digital platforms rather than traditional news outlets, but still have a hard time keeping up with news stories and finding sources for reliable news. 
To address this issue, we aim to create a solution which can provide curated news content for the busy and on-the-go students we are targeting. Unlike pre-existing news apps, we will provide multiple news sources in one platform, instead of having to consult many different publisher’s sites. 
Our project is intended to provide a tailored news feed based on directly specified and inputted preferences, in a more accessible way, as it won't require subscription. 

# Prospective Users 

The intended user group that would benefit from a news insight platform are high school and university students. 
With the generation of young adults, it can be very easy to neglect important news that is informative. 
That being said, having a platform for students in the age group range of 16-24 can be resourceful to help this specific user group engage with issues that are relevant to them. 

# Expected Functionalities 

A user will have a profile that will register their username, password, email, and age. 
They can then select their areas of interest which can be edited any time. 
A user can also save articles which will be displayed in a tab within their profile. 
The web page will open up to a curated feed of a user’s areas of interest. 
This page will show the most relevant and up to date news with the user’s preferred categories. 
A search page will be implemented to search by category, new source, keywords, and language. 
A search with these parameters will show results with the following responses: article title, news source, category, published date, url, url-image, and a brief description of the article. 
The articles can be filtered by recency and popularity. 

# Data Collection

The data that will exist in our system comes from two places. 
The first will be the individual user inputs. 
The users will be able to create profiles entering their name, age, email and password as well as information about their areas of interest. 
User inputted data for the user profiles will be stored in a SQL database we create.  
Information about preferred categories will be used to find the default news articles that are shown to users on the homepage. 
The next input of data will be from an external API - “News API” which will help pull data on relevant news from users across multiple publications, categories, languages and more. 
News articles from the external API will not be stored in the system unless users decide to save articles in their personal profile. 

# Jest Testing

This image shows that 6 tests pass.
![PNG image](https://user-images.githubusercontent.com/64228226/222853570-51be259c-6eb0-4294-a45e-fdbebcbd6f80.jpeg)
