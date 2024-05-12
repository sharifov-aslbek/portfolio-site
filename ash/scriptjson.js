const api = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery-container");
  const forSlide = document.querySelectorAll(".slider .content img")
  fetch(api)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach(item => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        const link = document.createElement("a");
        link.textContent = item.title;

        const image = document.createElement("img");
        image.src = item.url;
        image.alt = item.id;
        galleryItem.append(image)
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem);
      });
    })
    .catch(error => {
      console.error("Error fetching gallery data:", error);
    });
});

// const images = document.querySelectorAll(".slider .content img")
let contentDiv = document.querySelector(".slider .content")
const nextBtn = document.querySelector(".slider .next")
const prevBtn = document.querySelector(".slider .prev")
const dots = document.querySelectorAll(".slider .dots .dot")


fetch(api).then((item) => {
  return item.json()
}).then((img) => {
  img.forEach((item) => {
    let imgUrl = item.url
    let create = document.createElement("img")
    create.src = imgUrl
    contentDiv.append(create)

  })
  for (let i = 0; i < 1; i++) {
    let images = contentDiv.querySelectorAll("img")
    let index = 0
    images[index].classList.add("active")
    nextBtn.addEventListener("click", () => {
      dots[index].classList.remove("active")
      images[index].classList.remove("active")
      index++
      if (index === images.length) {
        index = 0
      }
      dots[index].classList.add("active")
      images[index].classList.add("active")
    })

    dots.forEach(function (dot, idx) {
      dot.addEventListener("click", function () {
        dots[index].classList.remove("active")
        images[index].classList.remove("active")

        index = idx

        images[index].classList.add("active")
        dots[index].classList.add("active")
      })
    })

    prevBtn.addEventListener("click", prevSlide)

    function prevSlide() {
      images[index].classList.remove("active")
      dots[index].classList.remove("active")
      if (index === 0) {
        index = images.length
      }
      index--
      dots[index].classList.add("active")
      images[index].classList.add("active")
    }
  }
})