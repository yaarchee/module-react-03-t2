
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { SRLWrapper } from "simple-react-lightbox";
import React, { useState, useEffect } from 'react';
import FsLightbox from 'fslightbox-react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


export default function ImageGallery({images}) {


    // const [lightboxController, setLightboxController] = useState({
    //     toggler: false,
    //     slide: 1
    // });
    //
    // let imageArr  = images.map(image=>image.largeImageURL);
    //
    //
    // function openLightboxOnSlide(e) {
    //
    //     setLightboxController({
    //         toggler: !lightboxController.toggler,
    //         slide: 1
    //     });
    //     imageArr  = images.map(image=>image.largeImageURL);
    // }
    //
    //
    //
    //
    // return(
    //     <>
    //     <ul className="ImageGallery" onClick={() => openLightboxOnSlide(1)}>
    //
    //         {images.map(image=>{
    //
    //                 return ( <ImageGalleryItem id={image.id} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} />)
    //             }
    //
    //         )}
    //
    //
    //     </ul>
    //
    //         <FsLightbox
    //             toggler={lightboxController.toggler}
    //             sources={imageArr}
    //             slide={lightboxController.slide}
    //         />
    // </>
    return(

    <SRLWrapper>

        <ul className="ImageGallery">

            {images.map(image=>{
                    console.log(image)
                    return ( <ImageGalleryItem id={image.id} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} />)
                }

            )}



        </ul>
        <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs

        />
    </SRLWrapper>

    )
}