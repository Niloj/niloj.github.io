'use strict';

//animate and show hide play / pause buttons
function playPause(event) {
    var mediaPlayer = $("#player")[0];
    var baseURIReplace = /index.html/gi;
    var baseURI = mediaPlayer.baseURI;
    var eventSong = baseURI.replace(baseURIReplace, '') + event.data.songURL;
    

    if (mediaPlayer.src != eventSong) {
        $("#player").attr("src", event.data.songURL);
        mediaPlayer.load();
    }

    if (!event.data.playing) {
        mediaPlayer.play();
        $('.music-play-btn').hide();
        $('.music-pause-btn').show();
    } else {
        mediaPlayer.pause();
        $('.music-pause-btn').hide();
        $('.music-play-btn').show();
    }
}

//INITIALIZING ALL OF THE SONG SWITCHES
//Yellow Rose of Texas / Ring the Banjo
$("#yellowRose").on("click", {
    playing: false,
    songURL: "Content/Music/CWEra/YellowRose.mp3"
}, playPause);
$("#yellowRose2").on("click", {
    playing: true,
    songURL: "Content/Music/CWEra/YellowRose.mp3"
}, playPause);
//No More Auction Block For Me
$("#auctionBlock").on("click", {
    playing: false,
    songURL: "Content/Music/CWEra/AuctionBlock.mp3"
}, playPause);
$("#auctionBlock2").on("click", {
    playing: true,
    songURL: "Content/Music/CWEra/AuctionBlock.mp3"
}, playPause);
//morpeth Lasses
$("#morpeth").on("click", {
    playing: false,
    songURL: "Content/Music/Barnstormers/1.MorpethLasses.mp3"
}, playPause);
$("#morpeth2").on("click", {
    playing: true, 
    songURL: "Content/Music/Barnstormers/1.MorpethLasses.mp3"
}, playPause);

//Shortenin Bread
$("#shortenin").on("click", {
    playing: false,
    songURL: "Content/Music/Barnstormers/ShorteninBread.mp3"
}, playPause);
$("#shortenin2").on("click", {
    playing: true,
    songURL: "Content/Music/Barnstormers/ShorteninBread.mp3"
}, playPause);

//Hand me down my walking Cane
$("#walkingCane").on("click", {
    playing: false,
    songURL: "Content/Music/Barnstormers/12.HandMeDownMyWalkingCane.mp3"
}, playPause);
$("#walkingCane2").on("click", {
    playing: true,
    songURL: "Content/Music/Barnstormers/12.HandMeDownMyWalkingCane.mp3"
}, playPause);

//Banks of the Bann
$("#banksOfTheBann").on("click", {
    playing: false,
    songURL: "Content/Music/Barnstormers/3.BanksoftheBann.mp3"
}, playPause);
$("#banksOfTheBann2").on("click", {
    playing: true,
    songURL: "Content/Music/Barnstormers/3.BanksoftheBann.mp3"
}, playPause);
//You've Been a Friend of Me
$("#friendOfMe").on("click", {
    playing: false,
    songURL: "Content/Music/Tom/FriendOfMe.mp3"
}, playPause);
$("#friendOfMe2").on("click", {
    playing: true,
    songURL: "Content/Music/Tom/FriendOfMe.mp3"
}, playPause);
//You've Been a Friend of Me
$("#barlowKnife").on("click", {
    playing: false,
    songURL: "Content/Music/Tom/BarlowKnife.mp3"
}, playPause);
$("#barlowKnife2").on("click", {
    playing: true,
    songURL: "Content/Music/Tom/BarlowKnife.mp3"
}, playPause);
//Children Peace Marching
$("#peaceMarch").on("click", {
    playing: false,
    songURL: "Content/Music/Tom/PeaceMarch.mp3"
}, playPause);
$("#peaceMarch2").on("click", {
    playing: true,
    songURL: "Content/Music/Tom/PeaceMarch.mp3"
}, playPause);


$(document).ready(function () {
    //animated buttons has been initiated, hide pause button until song is played
    $('.music-pause-btn').hide();
});