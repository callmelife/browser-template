// 'use strict';
//
// // const getFormFields = require('../../lib/get-form-fields');
// const api = require('./api');
// const ui = require('./ui');
//
// const onGetPicture = function (event) {
//   event.preventDefault();
//   api.getPicture()
//   .done(ui.getPictureSuccess)
//   .failure(ui.failure);
// };
//
// const addHandlers = () => {
//   $('graffiti-one-favorite-btn').on('submit', onGetPicture);
//
//
//
// };
//
// $(() => {
//   $('#my-form').on('submit', function (e) {
//     let data = getFormFields(this);
//     e.preventDefault();
//     api.myRequest(data, ui.success, ui.failure);
//   });
// });
//
// module.export = {
//   addHandlers,
// };
//
//
// // Code from TTT
// //
// // 'use strict';
// //
// // const api = require('./api');
// // const ui = require('./ui');
// //
// // let turnCounter = 1;
// // let currentPlayer;
// // let ticTacArray = [["box","box","box"],["box","box","box"],["box","box","box"]];
// //
// // $('#statsButton').hide();
// // $(".resetButton").hide();
// // $('.game-data').hide();
// //
// // let lockBoard = function(){
// //   $('.top-left').css("pointer-events", "none");
// //   $('.top-center').css("pointer-events", "none");
// //   $('.top-right').css("pointer-events", "none");
// //   $('.middle-left').css("pointer-events", "none");
// //   $('.middle-center').css("pointer-events", "none");
// //   $('.middle-right').css("pointer-events", "none");
// //   $('.bottom-left').css("pointer-events", "none");
// //   $('.bottom-center').css("pointer-events", "none");
// //   $('.bottom-right').css("pointer-events", "none");
// // };
// //
// // let turnOnClicks = function(){
// //   $('.top-left').css("pointer-events", "auto");
// //   $('.top-center').css("pointer-events", "auto");
// //   $('.top-right').css("pointer-events", "auto");
// //   $('.middle-left').css("pointer-events", "auto");
// //   $('.middle-center').css("pointer-events", "auto");
// //   $('.middle-right').css("pointer-events", "auto");
// //   $('.bottom-left').css("pointer-events", "auto");
// //   $('.bottom-center').css("pointer-events", "auto");
// //   $('.bottom-right').css("pointer-events", "auto");
// // };
// //
// // let checkForWinner = function(){
// //   let over = false;
// // // Win Method #1: horizontal top row
// //     if (ticTacArray[0][0] !== "box" && (ticTacArray[0][0] === ticTacArray[0][1] && ticTacArray[0][0] === ticTacArray[0][2])) {
// //       $(".displayWinner").text("The winner of this round is: " + currentPlayer);
// //       over = true;
// //       lockBoard();
// //       $('.displayWinner').show();
// //     }
//
// // // Makes sure the game ends at 9 clicks & doesnt cause a double reaction
// //     else if (turnCounter === 10) {
// //       $(".displayWinner").text("No winner! This game is a draw");
// //       over = true;
// //       lockBoard();
// //   }
// //   return over;
// // };
// //
// // const onGetGame = function (event) {
// //     event.preventDefault();
// //     api.getGame()
// //     .done(ui.getGameSuccess)
// //     .fail(ui.fail);
// //   };
// //
// // const addHandlers = () => {
// //   $('#statsButton').on('submit', onGetGame);
// //   $('.top-left').click(function(){
// //     if (ticTacArray[0][0] === "box") {
// //       if (turnCounter % 2 === 0) {
// //         currentPlayer = 'Player 2';
// //           $(this).html('0');
// //           ticTacArray[0][0] = "0";
// //           $('.top-left').addClass('0');
// //       } else {
// //         currentPlayer = 'Player 1';
// //           $(this).html('X');
// //           ticTacArray[0][0] = "X";
// //           $('.top-left').addClass('X');
// //       }
// //       turnCounter++;
// //       checkForWinner();
// //     }
// //   });
// //
// //   $('.box').on('click', function(){
// //     api.updateGame($(this).attr('data-item'),currentPlayer === "Player 1"?"O":"X", checkForWinner()  );
// //   });
// //
// //   $('.resetButton').on('click', function(){
// //       $('.displayWinner').text("");
// //       $('.top-left').text('');
// //       $('.top-center').text('');
// //       $('.top-right').text('');
// //       $('.middle-left').text('');
// //       $('.middle-center').text('');
// //       $('.middle-right').text('');
// //       $('.bottom-left').text('');
// //       $('.bottom-center').text('');
// //       $('.bottom-right').text('');
// //         turnCounter = 1;
// //         ticTacArray = [["box","box","box"],["box","box","box"],["box","box","box"]];
// //         turnOnClicks();
// //           api.createGame();
// //           $('.game-board').show();
// //     });
// // };
// //
// // module.exports = {
// //   addHandlers,
// // };
