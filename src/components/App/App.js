import React, { Component } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import makeFetch from "../../services/makeFetch";
// import IO from "../../services/infinityScroll";

import SimpleReactLightbox from "simple-react-lightbox";

export default class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    pageQuery: 1,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    makeFetch
      .crateFetchFind(this.state.searchQuery, this.state.pageQuery)
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data],
          pageQuery: prevState.pageQuery + 1,
        }));
        this.lazyLoadImg();
      });
  };

  handlerSearchQuery = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      pageQuery: 1,
    });
  };

  options = {
    rootMargin: "50px",
  };
  onEntry = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("зашли onEntry");
        observer.unobserve(entry.target);
        this.fetchImages();
      }
    });
  };

  infinityScroll = new IntersectionObserver(this.onEntry, this.options);

  lazyLoadImg() {
    console.log("зашли lazyLoadImg");
    const imageListItem = document.querySelectorAll(".ImageGalleryItem");
    this.infinityScroll.observe(imageListItem[imageListItem.length - 1]);
  }

  render() {
    return (
      <>
        <SimpleReactLightbox>
          <Searchbar onSubmt={this.handlerSearchQuery} />
          {this.state.images.length > 0 && (
            <ImageGallery images={this.state.images} />
          )}
        </SimpleReactLightbox>
      </>
    );
  }
}
