import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../shared/api/api"
import "./Details.css"

const Details = () => {
    const [car, setCar] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const id = useParams()

    useEffect(() => {
        api.get(`/cars/${id.id}`).then((res) => setCar(res?.data?.data))
    }, [])

    const images = car?.car_images?.map(
        (image) => `https://realauto.limsa.uz/api/uploads/images/${image?.image?.src}`
    ) || []

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="main w-full h-auto py-10 bg-[#111219] px-2">

            <div className="max-w-[1240px] w-full m-auto ">
                <p className="text-white font-sans text-[50px] text-left ml-3 uppercase font-semibold">
                    {car?.model?.name} ({car?.color})
                </p>
            </div>

            <div className="main-in w-[1240px] m-auto flex flex-row gap-2">

                <div className="id_products1 flex flex-col items-center ">

                    <div className="relative w-full max-w-[600px] h-[400px]">
                        <img
                            src={images[currentIndex]}
                            alt="Car"
                            className="w-full h-full object-cover rounded-md" />

                        <button
                            onClick={prevSlide}
                            className="absolute left-[-20px] top-1/2 w-8 h-9 bg-transparent focus:outline-none focus:border-transparent">

                            <i className="fa-solid fa-chevron-left text-[30px] text-white text-lg"></i>

                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-[-5px] top-1/2 w-8 h-9 bg-transparent focus:outline-none focus:border-transparent">

                            <i className="fa-solid fa-chevron-right text-[30px] text-white text-lg"></i>

                        </button>

                    </div>

                    <div className="flex justify-center mt-4 space-x-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index}`}
                                className={`w-[188px] h-[148px] object-cover cursor-pointer rounded-md border-2 ${currentIndex === index ? "border-blue-500" : "border-white"}`}
                                onClick={() => setCurrentIndex(index)} />
                        ))}
                    </div>

                    <article className="w-[600px] h-auto text-left ">

                        <h2 className="text-[28px] text-white font-bold mt-5 ">
                            Good to know about {car?.model?.name} ({car?.color})
                        </h2>

                        <p className="text-[14px] text-[#A1A5A0] mt-[25px]">
                            Kilometrage limit per day
                        </p>

                        <h2 className="text-[20px] text-white font-semibold">
                            {car?.limitperday} km (Every extra km will be charged 20 AED/km)
                        </h2>

                        <p className="text-[14px] text-[#A1A5A0] mt-[25px]">
                            Car rental deposit amount
                        </p>

                        <h2 className="text-[20px] text-white font-semibold">
                            The deposit is refunded within 28 days
                        </h2>

                    </article>

                </div>

                <div className="id_products2 border-2 flex flex-col items-center">

                    <article className="flex w-[40vw] flex-row justify-between">

                        <div className="con-1 flex flex-col gap-2 text-left">
                            <h3 className="text-[20px] flex items-center font-semibold">
                                AED {car.price_in_aed_sale}
                                <span className="text-[#8C9498] text-[20px]">/ ${car?.price_in_usd_sale}</span>
                            </h3>
                            <h4 className="text-[#8A8892]">per day</h4>
                            <p className="text-[18px] font-semibold line-through">
                                AED {car.price_in_aed}
                                <span className="text-[#8C9498] text-[20px]">/ ${car?.price_in_usd}</span>
                            </p>
                        </div>

                        <div className="con-2 float-right flex flex-col">

                            <div className="text-con w-[370px] gap-1 flex justify-between">
                                <p className="text-[#8A8E92] text-[13px] font-semibold mt-[15px]">Deposit</p>
                                <div className="flex flex-col text-left">
                                    <p className="text-[18px] font-semibold mt-[15px] ">
                                        AED {car?.deposit}
                                    </p>
                                    <span className="text-[#8A8E92] text-[14px] font-semibold">AED 5000 for credit cards payment</span>
                                </div>
                            </div>

                            <div className="text-con w-[370px] gap-1 flex justify-between">
                                <p className="text-[#8A8E92] text-[13px] font-semibold mt-5">
                                    Premium protection
                                </p>
                                <div className="flex flex-col text-left mr-10">
                                    <p className="text-[18px] font-semibold mt-[15px] ">
                                        AED {car?.premium_protection}
                                    </p>
                                    <span className="text-[#8A8E92] text-[14px] font-semibold">AED 5000 for price for 1 day</span>
                                </div>
                            </div>

                        </div>

                    </article>

                    <article className="aed-icon-container p-2 flex flex-col gap-5">

                        <div className="linear w-[615px] h-[1px] bg-white"></div>

                        <div className="grid-icon-container items-center gap-5 text-white grid grid-cols-5 p480:grid-cols-4 w-full p992:grid-cols-10 p1200:grid-cols-5">

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-regular fa-calendar"></i>
                                <h5>{car?.year}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-stopwatch"></i>
                                <h5>{car?.seconds}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-gauge-high"></i>
                                <h5>{car?.max_speed}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-user"></i>
                                <h5>{car?.max_people}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-palette"></i>
                                <h5>{car?.color}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-filter"></i>
                                <h5>{car?.motor}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-tent-arrow-left-right"></i>
                                <h5>{car?.transmission}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-brands fa-red-river"></i>
                                <h5>{car?.drive_side}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-gas-pump"></i>
                                <h5>{car?.petrol}</h5>
                            </div>

                            <div className="grid-card flex flex-col justify-center items-center">
                                <i className="fa-solid fa-city"></i>
                                <h5>{car?.city?.name} Cars</h5>
                            </div>

                        </div>

                        <div className="linear w-[615px] h-[1px] bg-white"></div>

                    </article>

                    <div className="tg-con flex gap-3 w-full justify-center my-[30px]">

                        <button className="w-[75px] h-[65px] bg-[#5AEC5A] text-white text-[35px] rounded-2xl flex justify-center items-center outline-none focus:outline-none">
                            <a target="_blank" href="https://www.whatsapp.com">
                                <i className="fa-brands fa-whatsapp text-white"></i>
                            </a>
                        </button>

                        <button className="w-[75px] h-[65px] bg-[#2374F8] text-white text-[35px] rounded-2xl flex justify-center items-center outline-none focus:outline-none">
                            <a target="_blank" href="https://t.me/xusanovvm">
                                <i className="fa-brands fa-telegram text-white"></i>
                            </a>
                        </button>

                        <button className="w-[75px] h-[65px] bg-[#FFB630] text-white text-[35px] rounded-2xl flex justify-center items-center outline-none focus:outline-none">
                            <a href="tel:+998950907050"></a>
                            <i className="fa-solid fa-phone text-white"></i>
                        </button>

                    </div>

                    <form className="border p-[30px] flex flex-col gap-5 max-w-[400px] w-full mx-auto">

                        <h2 className="text-white">
                            {car?.model?.name}/{car?.color}
                        </h2>

                        <input type="text" className="w-full px-3 py-5 bg-white outline-none" placeholder="Name" />

                        <input type="number" className="w-full px-3 py-5 bg-white outline-none" placeholder="Phone" />

                        <input type="number" className="w-full px-3 py-5 bg-white outline-none" placeholder="Period" />

                        <input type="text" className="w-full px-3 py-5 bg-white outline-none" placeholder="Details" />

                    </form>

                </div>

            </div>

        </div>
    );
};

export default Details;
