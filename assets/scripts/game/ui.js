'use strict';

const app = require('../app.js');

const getPictureSuccess = (data) => {
  console.log(data)
  app.game = data.game;
  // $(".tag-name-container").text();
  // $(".artist-name-container").text("It work");
  // $(".location-container").text("It work");
  // $(".date-container").text("It work");
  // $(".url-container").val();
  // $(".description-container").val();
  // data.map(item=>renderItem(item));
  renderItem(data);

};

function renderItem(item){

let template = `<div class="graffiti-one-container">
  <div class="graffiti-one-img-container">
    <a href="#">
      <img src="${item.url || "#"}" alt="Image to be linked to" class="graffiti-one-img">
    </a>
  </div>
<!-- This div contains all code relevant to img one's info-->
  <div class="graffiti-one-info">
     <div class="row">
     <div class="col-md-4 tag-name-container"><p>Tag Name:${item.title}</p></div>
     <div class="col-md-4 artist-name-container">Artist:${item.artist}</div>
     <div class="col-md-4 location-container">Location:${item.location}</div>
     <div class="col-md-4 date-container">Date Photographed:${item.date}</div>
     <div class="col-md-4 url-container">URL:${item.url}</div>
     </div>
     <div class="row">
       <div class="col-md-12 description-container">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
     </div>
  </div>
  <div class="favorite-btn-container">
    <form action="">
      <input type="submit" class="graffiti-one-favorite-btn" name="graffiti-one-favorite-btn" value="This One Is Me">
    </form>
  </div>
</div>`
$('.graffiti-main').html(template);

}


const failure = (err) => {
  // handle failure
};

module.exports = {
  getPictureSuccess,
  failure,
};
//
//
// // code from TTT:
// // 'use strict';
// //
// // const app = require('../app.js');
// //
// // const newGameSuccess = (data) => {
// //   app.game = data.game;
// //
// // };
// //
// // const getGameSuccess = function(data){
// //   $('.game-data').text('You have played ' + data.games.length + ' game(s)!');
// // };
// //
// // module.exports = {
// //   newGameSuccess,
// //   getGameSuccess,
// // };
