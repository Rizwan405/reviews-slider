const data = [
  {
    name: "Sarah Johnson",
    designation: "Marketing Manager",
    review:
      "This product has significantly boosted our team's productivity. The intuitive interface and seamless integration with our existing tools are fantastic. Highly recommend!",
    img: "5.jpg",
  },
  {
    name: "Michael Lee",
    designation: "Product Designer",
    review:
      "The design quality is exceptional. Every detail is thoughtfully crafted, making the user experience smooth and enjoyable. It's a game-changer for our projects.",
    img: "9.jpg",
  },
  {
    name: "Emily Davis",
    designation: "Chief Technology Officer",
    review:
      "An impressive solution that addresses many of our challenges. The support team is responsive and helpful, making implementation a breeze.",
    img: "57.jpg",
  },
  {
    name: "James Smith",
    designation: "Customer Success Specialist",
    review:
      "Our customers have seen great results using this service. It's easy to use and has a tangible impact on customer satisfaction.",
    img: "62.jpg",
  },
  {
    name: "Olivia Brown ",
    designation: "UX/UI Designer",
    review:
      "As a designer, I appreciate the attention to detail in the user interface. It's sleek, modern, and highly functional. A pleasure to work with.",
    img: "64.jpg",
  },
  {
    name: "William Martinez, ",
    designation: "Software Engineer",
    review:
      "Robust and reliable, this software has exceeded our expectations. The performance is top-notch, and it has streamlined many of our processes.",
    img: "78.jpg",
  },
];

//selecting elements
// img
let index = 0;
const img = document.querySelector(".img");
const person = document.querySelector("h3");
//name and designation
const designation = document.querySelector("h5");
//review
const review = document.querySelector("p");
// buttons functionality
const forwardBtn = document.querySelector(".btn-forwards");
const backwardBtn = document.querySelector(".btn-backwards");
//randomly button functionality
const randBtn = document.querySelector(".submit__button");
function loadData(id) {
  img.src = data[id].img;
  person.textContent = data[id].name;
  designation.textContent = data[id].designation;
  review.textContent = data[id].review;
}
if (data.length > 0) {
  loadData(index);
}

function forward() {
  index = (index + 1) % data.length; // Loop back to the start
  loadData(index);
  console.log(index);
  //0%6
}

function backward() {
  index = (index - 1 + data.length) % data.length; // Loop back to the end
  loadData(index);
  console.log(index);
}
forwardBtn.addEventListener("click", function () {
  forward();
});
backwardBtn.addEventListener("click", function () {
  backward();
});
randBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * data.length);
  loadData(randomIndex);
});
