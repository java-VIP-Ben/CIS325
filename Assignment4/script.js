// Benjamin Lukens CIS325 Assignment 3
const button = document.getElementById("clickBtn");
const image = document.getElementById("mouseoverImage");
const paragraph = document.getElementById("aboutYear");

const images = [
    { src: "./pictures/first.JPG", time: "Year: 2020", aboutYear: "This was the day I got my car! It needed a mirror, bumper, fluid change, Mass Airflow Sensor, and the transmission was grinding."},
    { src: "./pictures/second.JPG", time: "Year: 2021", aboutYear: "This was my first time making Evansvilles Cars and Coffee Facebook post! I had gotten new wheels and fixed the transmission."},
    { src: "./pictures/third.JPG", time: "Year: 2022", aboutYear: "This was one of the first professional photoshoots Ive done under Vanquish, CHS's unofficial automotive and motorsports club." },
    { src: "./pictures/fourth.JPG", time: "Year: 2023", aboutYear: "I had gotten into a small wreck earlier this year, and this picture was after repair. Thanks to my bad driving, I learned how to sand, prime, and paint body panels." },
    { src: "./pictures/fifth.JPG", time: "Year: 2024", aboutYear: "I had started putting more money into the car by this point. New wheels, summer tires, a wing, tint, and other various electrical fixes."},
    { src: "./pictures/sixth.JPG", time: "Year: 2025", aboutYear: "This was a year of new beginnings! I got my 325 a donor car, a 2003 BMW 330xi. \n I scrapped the car and saved the engine, transmission, brakes, sway bars, seats, and speakers. \n Hopefully this time next year, the 325ci will be far faster and I can start competing at local autocrosses!"}
];

let currentIndex = 0;

// Click Event
button.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    paragraph.textContent = images[currentIndex].aboutYear;
    image.src = images[currentIndex].src;
    customFunction();
});

function customFunction() {
  console.log("Changed the picture");
}

// Mouseover Event
image.addEventListener("mouseover", function () {
    alert(images[currentIndex].time);
});
