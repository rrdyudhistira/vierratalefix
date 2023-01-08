import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Gallery() {
    return (
        <div className="page-wrapper">
            <Head>
                <title>Gallery Merchandise || Vierratale</title>
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
                                    href="/"
                                    passHref
                                    className="cta"
                                >Kembali
                                    {/* <Image src="/logo_contact.png" width={20} height={15}></Image> Contact */}
                                </Link>
                            </div>
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
                <section id="about">
                    <div className="img-wrapper">
                        <div className="intro">
                            {/* <center><h1 className="about-main">==== About ====</h1></center> */}
                            <div className="intro-container">
                                <div className="intro-h1">
                                    <h1 className="intro1">Gallery Merchandise || Vierratale</h1>
                                    <p className="introp1">Mohon maaf untuk Gallery Merchandise Vierratale belum dapat kami tampilkan,dikarenakan produk dari vierratale belum dapat di publish sepenuhnya.</p>
                                    {/* <h1 className="intro1">Vierratale x Vierrania</h1>
                <p className="introp2">Vierratale saat ini bekerjasama dengan Vierrania dengan tema <span className="vierra">Vierratale Collectibles </span>yang bertujuan untuk penjualan
                  produk <span>Merchandise</span>dari brand mereka sendiri</p> */}
                                </div>
                                {/* <div className="logo1">
                                    <Image src="/logo_header.png" width={200} height={350} />
                                </div> */}
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
                    </div>
                </section>
            </div>
        </div>

    );
}

export default Gallery;