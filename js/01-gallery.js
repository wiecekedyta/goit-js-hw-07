import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = "";

for (const image of galleryItems) {
  const newImage = `<a class="gallery__link" href="${image.original}" >
    <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
    </a>`;
  gallery.innerHTML += newImage;
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,

    {
      onShow: (instance) => {
        window.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            instance.close();
          }
        });
      },
    }
  );
  instance.show();
});
