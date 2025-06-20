
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
      img :"https://myshowz.infinityfreeapp.com/assets/images/wednesday.jpeg"  ,
      text2 : <IoPlayCircleOutline />,
      text3 : "A Wednesday",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"

    },
    {
      id:2,
      img:"https://myshowz.infinityfreeapp.com/assets/images/commando2.jpeg",
      text2 : <IoPlayCircleOutline />,
      text3 : "Commando-3",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"
      
    },
    {
      id:3,
      img:"https://myshowz.infinityfreeapp.com/assets/images/gujju2.jpeg",
      text2 : <IoPlayCircleOutline />,
      text3 : "Gujjubhai Most Wanted",
      text4 :<LuClock8 />,
      text5 :"1 Hr 4min"

      
    },
    {
      id:4,
      img:"https://myshowz.infinityfreeapp.com/assets/images/avtar-2.jpeg",
      text2 : <IoPlayCircleOutline />,
      text3 : "Avatar",
      text4 :<LuClock8 /> ,
      text5 :"1 Hr 4min"

      

    },
   

      
  ]
  return (
    <>

      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        // speed={600}
        // parallax={true}
        slidesPerView={'2'}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='slide'>
          <div className="title" data-swiper-parallax="-300">
            <div className='row'>
            <div className='col'>

            <b>Latest Movie Trailers</b>
           <p style={{fontSize:16,color:' rgb(255, 255, 255)'}}>The movie is "Avengers"</p>
             
           {/* <p style={{fontSize:16,color:' rgba(255, 255, 255, 0.88)'}}>The movie "Aladin" (2019), directed by  <br/>Sujoy Ghosh,is a Bollywood fantasy  <br/> film that reimagines the classic  <br/>tale  of Aladdin.</p> */}
           <button style={{width:38,height:36,borderRadius:50,border:0}}><IoIosPlay style={{marginTop:-34,fontSize:26,marginLeft:1,color:'rgb(250, 0, 42)'}} /></button>
          </div>
          </div>
          </div>
         
        </SwiperSlide>


        <SwiperSlide className='slide1'>
            <div className='row'>
            <div className='col'>
            
          <div className="title" data-swiper-parallax="-300">
            <b>Latest Online movies</b>
           <p style={{fontSize:16,color:' rgba(255, 255, 255, 0.88)'}}>The movie is"Frozon"</p>
           <button style={{width:38,height:36,borderRadius:50,border:0}}><IoIosPlay style={{marginTop:-34,fontSize:26,marginLeft:1,color:'rgb(250, 0, 42)'}} /></button>
          </div>
          </div>
          </div>
    
        </SwiperSlide>
        <SwiperSlide className='slide2'>
            <div className='row'>
            <div className='col'>
          <div className="title" data-swiper-parallax="-300">
           <b>Latest Online movies</b>
           <p style={{fontSize:16,color:' rgba(255, 255, 255, 0.88)'}}>The movie is "Aladin"</p>
           <button style={{width:38,height:36,borderRadius:50,border:0}}><IoIosPlay style={{marginTop:-34,fontSize:26,marginLeft:1,color:'rgb(250, 0, 42)'}} /></button>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            .
            </p>
          </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper> 






	    <section className='mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col col-sm-12'>
              <h1 style={{fontSize:26, color:'black',fontWeight:'bold'}}>Popular movies </h1>
              
              <h1 className='show1'><a href='https://myshowz.infinityfreeapp.com/movies.html'> Show All </a></h1>
              
            

          
          </div>
           
            </div>
        </div> <br></br><br></br>

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
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        {
          Products.map((pro1)=>(
            <SwiperSlide key={pro1.id}>
              <div  style={{width:240,border:0 }} className='card'>
                <img src={pro1.img}style={{width:240, height:300, borderRadius:10,}} alt='mahi'/>
                {/* <p>{pro1.text2}</p> */}
                <a href='###' style={{position:'absolute',marginTop:120,marginLeft:92,fontSize:50, color:'white'}}>{pro1.text2}</a>
                <b style={{marginTop:-60, color:'white',marginLeft:10}}>{pro1.text3}</b>
                <p style={{color:'white', marginLeft:10}}>{pro1.text4}</p>
                <p style={{marginTop:-40, marginLeft:30, color:'white', fontSize:16}}>{pro1.text5}</p>               
              </div>
         </SwiperSlide>
          ))    
        }
      </Swiper>

      </section>
     
     
 <section className='mt-5'>
        <div className='container'>
          <div className='row justify-content-md-center'>
            <div className='col col-sm-12'>
              <h1 style={{fontSize:26, color:'black',fontWeight:'bold'}}>New Releases</h1>
              <h1 className='show1'><a href='https://myshowz.infinityfreeapp.com/movies.html'> Show All </a></h1>

            </div>
           
          </div>
        </div> <br></br><br></br>

       
      </section>
     
 
<Swiper
        slidesPerView={1}
        spaceBetween={10}
      loop={true}
      autoplay={{
        delay:2500,
        disableOnInteraction:false,
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
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >  
        {
          Product.map((pro)=>(
            <SwiperSlide key={pro.id}>
              <div style={{width:240,border:0 }} className='card'>
            
            
                <img src={pro.img} style={{height:280, width:240,borderRadius:8}} alt='mahi'/>

              <b>{pro.name}</b>
              <p>{pro.name1}</p>
              <button className='border1'>{pro.text}</button>
              <button className='border2'>{pro.text8}</button>
              <a href='###' style={{position:'absolute',marginTop:120,marginLeft:76,fontSize:50, color:'white'}}>{pro.text1}</a>
              <p style={{marginTop:240, position:'absolute', marginLeft:10, color:'white'}}>{pro.text6}</p>
              <p style={{marginTop:244, position:'absolute', marginLeft:32, color:'white', fontSize:15}}>{pro.text7}</p>
              </div>
             
         </SwiperSlide>
          ))    
        }
      </Swiper>
      
     



   
    </>
  );
} 