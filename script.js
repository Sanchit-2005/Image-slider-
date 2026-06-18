let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");
let img = document.getElementById("slider");
// leftBtn.addEventListener("click",()=>{
//     console.log("left btn is clicked ")
// })
// rightBtn.addEventListener("click",()=>{
//     console.log("right  btn is clicked ")
// })

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
];
let count = 0;


rightBtn.addEventListener("click", () => {
  count++;
  if (count >= images.length) {
    count = 0;
  }

  img.classList.add("fade");
  setTimeout(()=>{
   img.src = images[count];
   img.classList.remove("fade");
  },);
  
  console.log(count);
});

leftBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }

  img.classList.add("fade");
  setTimeout(()=>{
   img.src = images[count];
   img.classList.remove("fade");
  },);
  
  console.log(count);
});


