const photos = [
  // CHILI
  {
    title: "Chili",
    location: "Chili • Photo 1",
    image: "./photos/chili/1.jpg"
  },
  {
    title: "Chili",
    location: "Chili • Photo 2",
    image: "./photos/chili/2.jpg"
  },
  {
    title: "Chili",
    location: "Chili • Photo 3",
    image: "./photos/chili/3.jpg"
  },
  {
    title: "Chili",
    location: "Chili • Photo 4",
    image: "./photos/chili/4.jpg"
  },

  // PRAGUE
  {
    title: "Prague",
    location: "République tchèque • Photo 1",
    image: "./photos/prague/1.jpg"
  },
  {
    title: "Prague",
    location: "République tchèque • Photo 2",
    image: "./photos/prague/2.jpg"
  },
  {
    title: "Prague",
    location: "République tchèque • Photo 3",
    image: "./photos/prague/3.jpg"
  },
  {
    title: "Prague",
    location: "République tchèque • Photo 4",
    image: "./photos/prague/4.jpg"
  },

  // BARCELONE
  {
    title: "Barcelone",
    location: "Espagne • Photo 1",
    image: "./photos/barcelone/1.jpg"
  },
  {
    title: "Barcelone",
    location: "Espagne • Photo 2",
    image: "./photos/barcelone/2.jpg"
  },
  {
    title: "Barcelone",
    location: "Espagne • Photo 3",
    image: "./photos/barcelone/3.jpg"
  },
  {
    title: "Barcelone",
    location: "Espagne • Photo 4",
    image: "./photos/barcelone/4.jpg"
  },

  // EUROPA PARK
  {
    title: "Europa Park",
    location: "Allemagne • Photo 1",
    image: "./photos/europapark/1.jpg"
  },
  {
    title: "Europa Park",
    location: "Allemagne • Photo 2",
    image: "./photos/europapark/2.jpg"
  },
  {
    title: "Europa Park",
    location: "Allemagne • Photo 3",
    image: "./photos/europapark/3.jpg"
  },
  {
    title: "Europa Park",
    location: "Allemagne • Photo 4",
    image: "./photos/europapark/4.jpg"
  },

  // MONTÉNÉGRO
  {
    title: "Monténégro",
    location: "Monténégro • Photo 1",
    image: "./photos/montenegro/1.jpg"
  },
  {
    title: "Monténégro",
    location: "Monténégro • Photo 2",
    image: "./photos/montenegro/2.jpg"
  },
  {
    title: "Monténégro",
    location: "Monténégro • Photo 3",
    image: "./photos/montenegro/3.jpg"
  },
  {
    title: "Monténégro",
    location: "Monténégro • Photo 4",
    image: "./photos/montenegro/4.jpg"
  },

  // AMSTERDAM
  {
    title: "Amsterdam",
    location: "Pays-Bas • Photo 1",
    image: "./photos/amsterdam/1.jpg"
  },
  {
    title: "Amsterdam",
    location: "Pays-Bas • Photo 2",
    image: "./photos/amsterdam/2.jpg"
  },
  {
    title: "Amsterdam",
    location: "Pays-Bas • Photo 3",
    image: "./photos/amsterdam/3.jpg"
  },
  {
    title: "Amsterdam",
    location: "Pays-Bas • Photo 4",
    image: "./photos/amsterdam/4.jpg"
  }
];

const photoGrid = document.getElementById("photo-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxLocation = document.getElementById("lightbox-location");
const closeLightbox = document.getElementById("close-lightbox");

function renderPhotos() {
  photos.forEach((photo) => {
    const card = document.createElement("article");

    card.className = "photo-card";

    card.innerHTML = `
      <img src="${photo.image}" alt="${photo.title}">
      <div class="photo-overlay">
        <h3>${photo.title}</h3>
        <p>${photo.location}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      lightboxImage.src = photo.image;
      lightboxImage.alt = photo.title;
      lightboxTitle.textContent = photo.title;
      lightboxLocation.textContent = photo.location;
      lightbox.classList.add("open");
    });

    photoGrid.appendChild(card);
  });
}

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.remove("open");
  }
});

renderPhotos();