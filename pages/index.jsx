import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import ReactSound from "react-sound";
import React, { useState, useRef, useEffect } from 'react';
// import Aos from 'aos';

function Home() {
  const [showLoader, setShowLoader] = React.useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);

  //   const [audio, setAudio] = useState(null)
  // console.log(URL)
  //   useEffect(() => {

  //     setAudio(new Audio(URL)) // only call client

  //   })
  //   // const audioEl = useRef(new Audio("https://youtu.be/Y_yj1Bpqs20"));
  //   // const [isPlaying, setIsPlaying] = useState(true)

  //   // if (isPlaying) {
  //   //   audioEl.current.play();
  //   // }

  return (
    <>
      {
        showLoader ? (
          <>
            <div className="page-main"><span className="loader"><Image src="/logo_header.png" width={60} height={45}></Image></span></div>
          </>
        ) : (
          <>
            <audio src="./Vierratale.mp3" autoPlay={true} loop={true} />
            <div className="page-wrapper">
            </div>
            <Head>
              <title>|| Merchandise Vierratale ||</title>
            </Head>
            <div className="top-section">
              <Navbar />
              <section className="hero">
                <div className="container">
                  <div className="text-wrapper">
                    <h1 className="title">Welcome To</h1>
                    <h3 className="title1">
                      Merchandise<span className="title2">Vierratale</span>
                    </h3>
                    <p className="description">
                      Merchandise Vierratale merupakan produk yang diproduksi langsung oleh Vierratale dengan menyajikan produk-produk yang mereka usung.
                    </p>
                    <div className="links">
                      <Link
                        href="https://bit.ly/wakontak1"
                        passHref
                        className="cta"
                      >
                        <Image src="/logo_contact.png" width={20} height={15}></Image> Contact
                      </Link>
                    </div>
                  </div>
                  <div className="logo">
                    <Image src="/logo_header.png" width={200} height={200} />
                  </div>
                </div>
              </section>
              <div className="wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0A1124"
                    fillOpacity="1"
                    d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            <section id="about">
              <div className="img-wrapper">
                <div className="intro">
                  {/* <center><h1 className="about-main">==== About ====</h1></center> */}
                  <div className="intro-container">
                    <div className="intro-h1">
                      <h1 className="intro1">Vierratale</h1>
                      <p className="introp1">Vierratale (sebelumnya bernama Vierra) merupakan sebuah grup musik pop rock asal Jakarta,
                        Indonesia yang dibentuk pada tanggal 3 November 2008. Band ini beranggotakan 3 orang yaitu Kevin Aprilio (piano/keyboard),
                        Widy Soediro Nichlany (vokal), dan Raka Cyril Damar (gitar).</p>
                      {/* <h1 className="intro1">Vierratale x Vierrania</h1>
                <p className="introp2">Vierratale saat ini bekerjasama dengan Vierrania dengan tema <span className="vierra">Vierratale Collectibles </span>yang bertujuan untuk penjualan
                  produk <span>Merchandise</span>dari brand mereka sendiri</p> */}
                    </div>
                    <div className="logo1">
                      <Image src="/logo_header.png" width={200} height={350} />
                    </div>
                  </div>
                  <div className="intro-h12">
                    <div className="img">
                      <div className="logo2">
                        <Image src="/logo_header.png" width={200} height={300} />
                      </div>
                    </div>
                    <div className="descriptionp">
                      <h1 className="intro2">Vierratale x Vierrania</h1>
                      <p className="introp2">Vierratale saat ini bekerjasama dengan Vierrania dengan tema <span className="vierra">Vierratale Collectibles </span>yang bertujuan untuk penjualan
                        produk <span>Merchandise</span> dari brand mereka sendiri.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-wave-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#071019"
                    fillOpacity="1"
                    d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
              </div>
              {/* <div className="intro">
        </div>
        <div className="intro-h13">
          <h1 className="intro3">Land Virtual</h1>
          <p className="introp3">kami akan mencetak land virtual ini
            menyesuaikan proyek lahan yang sudah kita
            pegang di dalam kehiduapan secara nyata. Jadi
            hak kepemilikan NFT land digital sama dengan hak
            kepemilikan lahan secara nyata yang sudah kami
            sediakan, lahan tersebut akan di gunakan sebagai
            sarana pertanian pembangunan gedung & wisata
            penghijauan.</p>
          <div className="logo3">
            <Image src="/favicon.png" width={200} height={200} />
          </div>
        </div> */}
            </section>
            <div>
            </div>
            <section id="merchandise">
              <div className="img2-wrapper">
                <div className="wave2-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#0A1124"
                      fillOpacity="1"
                      d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="merchandise-container">
                  <h1 className="merchandise-desc">==== Merchandise ====</h1>
                </div>
                <ul className="cards">

                  <li>
                    <a href="https://bit.ly/goldvierra" className="card">
                      <img src="/lightstick.jpg" className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          {/* <img class="card__thumb" src="/logo_header.png" alt="" /> */}
                          <div className="card__header-text">
                            <h3 className="card__title">Light Stick + Emas Vierratale 0,01 gram & Video Greeting</h3>
                            <span className="card__status">Rp. 225.000</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
//                     <a href="https://bit.ly/hoodievierra" className="card">
                              <a href="/" className="card">
                      <img src="/widi.jpg" className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          {/* <img class="card__thumb" src="/logo_header.png" alt="" /> */}
                          <div className="card__header-text">
                            <h3 className="card__title">Coming Soon</h3>
                            <span className="card__status">Rp. ......</span>
                          </div>
                        </div>

                      </div>
                    </a>
                  </li>
                  <li>
//                     <a href="https://bit.ly/lightstickvierra" className="card">
                              <a href="/" className="card">
                      <img src="/raka.jpg" className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
                          <div className="card__header-text">
                            <h3 className="card__title">Coming Soon</h3>
                            {/* <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span> */}
                            <span className="card__status">Rp. ......</span>
                          </div>
                        </div>
                        {/* <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
                      </div>
                    </a>
                  </li>
                  <li>
//                     <a href="https://bit.ly/tshirtvierra" className="card">
                                        <a href="/" className="card">
                      <img src="/kevin.jpg" className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          {/* <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" /> */}
                          <div className="card__header-text">
                            <h3 className="card__title">Coming Soon</h3>
                            <span className="card__status">Rp. ......</span>
                          </div>
                        </div>
                        {/* <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p> */}
                      </div>
                    </a>
                  </li>
                </ul>

              </div>
            </section >
            <div className="contact-wave-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#071019"
                  fillOpacity="1"
                  d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>

            </div>
            <section id="contact">
              <div className="img3-wrapper">
                <div className="wave3-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#071019"
                      fillOpacity="1"
                      d="M0,32L80,37.3C160,43,320,53,480,69.3C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="footer">
                  <div className="footer-main"> <span className="vierra">Vierratale x Vierrania : </span></div>
                  <div className="sosmed">
                    <div className="item">
                      <Link
                        href="https://www.instagram.com/vierratale___/"
                        passHref
                      >
                        <Image src="/ig.jpg" width={40} height={45}></Image>
                      </Link>
                    </div>
                    <div className="item">
                      <Link
                        href="https://twitter.com/Vierratale"
                        passHref
                      >
                        <Image src="/twitter.png" width={40} height={45}></Image>
                      </Link>
                    </div>
                    <div className="item">
                      <Link
                        href="https://bit.ly/wakontak1"
                        passHref
                      >
                        <Image src="/wa.png" width={40} height={45}></Image>
                      </Link>
                    </div>
                  </div>
                  <div className="footer-copyright">
                    <p className="footer-p">Copyright 2023 ©
                      All rights reserved | Creative <i className="fa fa-heart" aria-hidden="true">
                      </i> by: <a href="https://www.youtube.com/channel/UCqwdqKpSkPInXMhRcaIFxRA" target="_blank"> <span className="vierra">Yudhistira-tech.com</span></a></p>
                  </div>
                </div>
              </div>
            </section >


          </>

        )
      }
    </>
  );
}


export default Home;
