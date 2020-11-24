import App from "../components/App/App";

// const options = {
//   rootMargin: "50px",
// };
// const onEntry = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("зашли onEntry");
//       observer.unobserve(entry.target);
//       App.fetchImages();
//     }
//   });
// };
//
// const infinityScroll = new IntersectionObserver(onEntry, options);
//
// function lazyLoadImg() {
//   console.log("зашли lazyLoadImg");
//   const imageListItem = document.querySelectorAll(".ImageGalleryItem");
//   infinityScroll.observe(imageListItem[imageListItem.length - 1]);
// }
//
// export default lazyLoadImg;

// export default class IO {
//   constructor(fetchImages) {
//     this.fetchImages = fetchImages;
//   }
//   options = {
//     rootMargin: "50px",
//   };
//
//   onEntry = (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("зашли onEntry");
//         observer.unobserve(entry.target);
//         this.fetchImages();
//       }
//     });
//   };
//
//   infinityScroll = new IntersectionObserver(this.onEntry, this.options);
//
//   lazyLoadImg() {
//     console.log("зашли lazyLoadImg");
//     const imageListItem = document.querySelectorAll(".ImageGalleryItem");
//     this.infinityScroll.observe(imageListItem[imageListItem.length - 1]);
//   }
// }
