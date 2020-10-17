
import App from "../components/App/App";

const options = {
    rootMargin: '250px',
}

export  function f(get) {

    return   (entries, observer) =>{
        entries.forEach(entry =>{

            if(entry.isIntersecting){
                observer.unobserve(entry.target);
                get();
            }
        })
    }

}





const  infinityScroll = new IntersectionObserver(f, options);


export default infinityScroll;