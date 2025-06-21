
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoPlayCircleOutline } from "react-icons/io5";
import { LuClock8 } from "react-icons/lu";
import { IoIosPlay } from "react-icons/io";
import './Main.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';



export default function App() {
     
  const Product=[
    {
      id:1,
      img :"https://c4.wallpaperflare.com/wallpaper/31/394/488/movies-hollywood-movies-wallpaper-preview.jpg",
      name :"Beauty Of The Beast",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"
    },
    {
      id:2,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n5.jpg",
      name :"Scoob",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"
      

    },
    {
      id:3,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n4.jpg",
      name :"My Spy",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"
  

    },
    {
      id:4,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n2.jpg",
       name :"Mulan",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"




    },
    {
      id:5,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n3.jpg",
      name :"Free Guy",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"




    },
    {
      id:6,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n1.jpg",
      name :"No Time To Die",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"




    },
    {
      id:7,
      img:"https://myshowz.infinityfreeapp.com/assets/images/n6.jpg",
       name :"Downhill",
      name1 :"support a wide variety of content, including and more.",
      text :"Watch now",
      text8 :"Watch Later",
      text1 : <IoPlayCircleOutline />,
      text6 :<LuClock8 />,
      text7 :"2 Hr 4min"




    }

      
  ]

const Products=[
    {
      id:1,
      img :"https://c.ndtvimg.com/gws/ms/movies-with-the-most-oscar-wins/assets/2.jpeg?1727706937"  ,
      text2 : <IoPlayCircleOutline />,
      text3 : "TITANIC",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"

    },
    {
      id:2,
      img:"https://movietomorrow.com/wp-content/uploads/2025/03/captain-america-brave-new-world.jpg",
      text2 : <IoPlayCircleOutline />,
      text3 : "CAPTAIN AMERICA",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"
      
    },
    {
      id:3,
      img:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Spider-Man_3%2C_International_Poster.jpg/250px-Spider-Man_3%2C_International_Poster.jpg",
      text2 : <IoPlayCircleOutline />,
      text3 : "Spider Man-3",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"

      
    },
    {
      id:4,
      img:"https://lionsgate.brightspotcdn.com/cc/c7/2e701ac14a22a2e3d81e292b3c80/john-wick-chapter-2-movies-poster-01.jpg",
      text2 : <IoPlayCircleOutline />,
      text3 : "John Wick-2",
      text4 :<LuClock8 /> ,
      text5 :"1 Hr 4min"

      

    },
   

      
  ]
  return (
    <>



<Swiper
  slidesPerView={3}
  centeredSlides={true}
  loop={true}
  spaceBetween={20}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper"
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }}
>
  {[
    { title: 'Latest Movie Trailers', movie: 'Avengers',trailer:"Watch Trailer"},
    { title: 'Latest Online Movies', movie: 'Justice League',trailer:"Watch Trailer" },
    { title: 'Latest Online Movies', movie: 'Deadpool',trailer:"Watch Trailer" },
    { title: 'Latest Online Movies', movie: 'Avatar',trailer:"Watch Trailer" },
  ].map((item, index) => (
    <SwiperSlide key={index} className={`slide slide${index}`}>
      <div className="movie-card">
        <b style={{marginLeft:-40,fontSize:22}}>{item.title}</b>
        <p style={{marginLeft:-40}} className="movie-name">The movie is "{item.movie}"</p>
        <button style={{marginLeft:-20,borderRadius:40,border:0,fontSize:24,marginTop:20}} className="play">
          {/* <IoIosPlay style={{marginTop:-5,marginLeft:2,color:' rgb(185, 24, 96)'}} className="play-icon"/> */}
          <i><IoIosPlay style={{marginTop:-5,marginLeft:2,color:' rgb(185, 24, 96)'}} /></i>

        </button>
        {/* <button className='play'>
          <i><IoIosPlay style={{marginTop:-5,marginLeft:2,color:' rgb(185, 24, 96)'}} /></i>
        </button> */}
        <b style={{marginLeft:8,marginTop:5,position:'absolute'}}>{item.trailer}</b>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

	    <section className='mt-5'>
        <div className="container mb-4">
  <div className="row align-items-center">
    <div className="col-12 d-flex justify-content-between flex-wrap">
      <h1 style={{ fontSize: 26, color: 'black', fontWeight: 'bold' ,marginTop:10}}>
        Popular Movies
      </h1>
      <h1 className="show1 mt-2 mt-md-0 ">
        <a href="https://myshowz.infinityfreeapp.com/movies.html">Show All</a>
      </h1>
    </div>
  </div>
</div>
        
      
      
      <Swiper
  slidesPerView={1}
  spaceBetween={10}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper"
>
  {Products.map((pro1) => (
    <SwiperSlide key={pro1.id}>
      <div className="movie-card">
        <img
          src={pro1.img}
          alt="mahi"
          className="movie-img"
        />
        <a href="###" className="overlay-text">
          {pro1.text2}
        </a>
        <div className="movie-info p-2">
          <p style={{marginTop:40,position:'absolute',fontSize:16,}}>{pro1.text3}</p>
          <p style={{marginTop:66}}>{pro1.text4}</p>
          <p style={{marginTop:-42}} className="movie-extra mx-4 ">{pro1.text5}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </section>
     
     
 <section className='mt-5'>
       
         <div className="container mb-4">
  <div className="row align-items-center">
    <div className="col-12 d-flex justify-content-between flex-wrap">
      <h1 style={{ fontSize: 26, color: 'black', fontWeight: 'bold' ,marginTop:10}}>
        New Releases
      </h1>
      <h1 className="show1 mt-2 mt-md-0 ">
        <a href="https://myshowz.infinityfreeapp.com/movies.html">Show All</a>
      </h1>
    </div>
  </div>
</div>

       
      </section>
     
      
     
<Swiper
  slidesPerView={1}
  spaceBetween={10}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper"
>
  {Product.map((pro) => (
    <SwiperSlide key={pro.id}>
      <div className="product-card">
        <div className="image-container">
          <img
            src={pro.img}
            alt="movie"
            className="product-image"
          />
          <a href="###" className="overlay-text">{pro.text1}</a>
        </div>
        <div className="product-info">
          <b>{pro.name}</b>
          <p>{pro.name1}</p>
          <button className="border11">{pro.text}</button>
          <button className="border22">{pro.text8}</button>
          {/* <p className="text6">{pro.text6}</p>
          <p className="text7 mx-4">{pro.text7}</p> */}
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


   
    </>
  );
} 