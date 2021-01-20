import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  games = [
    {
      title: "Call on Duty",
      sub_title: "Defend and Protect",
      img: "../../assets/images/callofuty02.jpg",
      desc: "This winter experience epic battles, espionage and a little holiday cheer. Call of Duty: Mobile Season 13: Winter War is here. New Black Ops: Cold War operators Adler - Mountain Drab and Helen Park - Berlin.",
      online_count: "26.8 k"
    },
    {
      title: "Beach Buggy Racing 2",
      sub_title: "Collect and upgrade an arsenal of fun",
      img: "../../assets/images/callofuty03.jpg",
      desc: "Join the Beach Buggy Racing League and compete against drivers and cars from around the world. Race through Egyptian pyramids, dragon-infested castles, pirate ship wrecks, and experimental alien bio-labs.",
      online_count: "23.5 k"
    },
    {
      title: "देसी गुप् शप",
      sub_title: "मस्ती, मज़ाक और प्यारी बातें",
      img: "../../assets/images/callofuty06.jpg",
      desc: "चैटिंग, फ्लिर्टिंग, मीटिंग एंड डेटिंग सिंगल हॉट इंडियन गर्ल्स हैवे नेवर बीन थिस इजी विथ देसी इंडियन गर्ल्स. इन थिस फ्री ऑनलाइन डेटिंग अप्प  तो चाट विथ स्ट्रॉन्गेर्स एंड मीट नई पीपल अक्रॉस इंडिया ",
      online_count: "23.1 k"
    },
    {
      title: "CSR Racing 2",
      sub_title: "Car & Drag Racing Game",
      img: "../../assets/images/callofuty04.jpg",
      desc: "Setting a new standard in graphics for car games, CSR2 delivers hyper-real drag racing to the palm of your hand. This game is a celebration of cars in your pocket! Racing games have never been so real.",
      online_count: "22.1 k"
    },
    {
      title: "Infinity Ops",
      sub_title: "Online FPS Cyberpunk Shooter",
      img: "../../assets/images/callofuty01.jpg",
      desc: "The event of the game take place in the distant future, when humanity has surpassed the limits of technological development and the world has descended into the chaos of interplanetary warfare!",
      online_count: "20.5 k"
    },
    {
      title: "इंडियन गर्ल्स लाइव चाट",
      sub_title: "राँडोम वीडियो चाट",
      img: "../../assets/images/callofuty05.jpg",
      desc: "चैटिंग, फ्लिर्टिंग, मीटिंग एंड डेटिंग सिंगल हॉट इंडियन गर्ल्स हैवे नेवर बीन थिस इजी विथ देसी इंडियन गर्ल्स. इन थिस फ्री ऑनलाइन डेटिंग अप्प  तो चाट विथ स्ट्रॉन्गेर्स एंड मीट नई पीपल अक्रॉस इंडिया ",
      online_count: "19.6 k"
    },
    {
      title: "Modern War Duty",
      sub_title: "Call of Impossible Mission",
      img: "../../assets/images/callofuty00.jpg",
      desc: "Join the anti terrorist team to fight like a modern ops free fire player in real in real battle. Strike at any obstacle standing in your way to becoming best battle royale soldier.",
      online_count: "18.7 k"
    },

  ]

  showSearchBar() {

  }
}
