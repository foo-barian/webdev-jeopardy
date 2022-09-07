

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2988db9-2b31-44b8-8174-2558da78c846/deploy-status)](https://app.netlify.com/sites/webdev-jeopardy/deploys)


## [Live Deployment on Netlify, Click to Play](https://webdev-jeopardy.netlify.app/)

## [(old) Deployment on Firebase, Click to Play](https://wdijeopardy.firebaseapp.com)

*Get Started:*

Using git from the command line:

 1. Clone Repository
 2. Turn on your audio (Optional... but highly reccomended!)
 3. Open index.html in your web browser `open public/index.html`
 4. Enjoy

Using Docker via [Dockerhub](https://hub.docker.com/repository/docker/airbr/webdev-jeopardy):

1. `docker run -d -P --name jeopardy airbr/webdev-jeopardy` 
2. `docker port jeopardy`
3. Visit at the ports assigned!

--
### Web Dev Jeopardy by Tyler foobarian - v3.0

### Current Game:

![](mobilescreenshot-jeopardy.png)

This game started as one of my first ever web projects and was my first application of HTML, CSS, Javsacript and JQuery. This game has been simplified/ a lot of refactoring of my horrible earlier code but could be improved. The game now makes use of the new CSS Grid specification [which is not fully supported yet](http://caniuse.com/#feat=css-grid). 

In 2020, I have decided as a learning exercise to attempt to dockerize this project. This is now published at dockerhub at `airbr/webdev-jeopardy`.

### Older Screenshots:

![](wdi-jeopardy-v1.5-main.png)
![](wdi-jeopardy-v1.5-modal.png)

#### Future develoment:

* Make the game competitive/two player
* Add a high-score table, or way of saving/sharing a score result

#### Technologies used in this game include:

 * HTML5
 * CSS3
 * Bootstrap 3.3.7
 * JQuery

Resources referred to include:

* [CSS Grid] (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
* [Bootstrap Modal](http://www.w3schools.com/bootstrap/bootstrap_modal.asp)
* [JSON Howto](http://www.w3schools.com/json/json_eval.asp)
* [Bootstrap JS Modals documentation](https://getbootstrap.com/javascript/#modals)
* [jQuery API documentation](https://api.jquery.com/)







