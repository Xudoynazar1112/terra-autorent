function Detail({ img, person, number }) {
  return (
    <div className="w-[23rem] flex flex-col gap-5 justify-start items-start">
      <img src={img} alt="service 1" className="rounded" />
      <p className="text-3xl text-start">Basic</p>
      <p>
        <span className="border border-green-600 px-6 py-2 rounded-lg mr-5 text-lg">{number}</span> {person}
      </p>
      <p className="text-start">
        Dune buggies in Dubai Book your ride on the most exciting adventure
        activity to hit the desert and later pamper your self to a traditional
        Arabian hospitality.
      </p>
      <div className="tick flex flex-col gap-5">
        <h4 className="text-4xl">Package Inclusions:</h4>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>Premium Transfer to camp</p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>Dune Buggy riding 1.5 hours</p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>Falcone shoting</p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>Camel</p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>VIP room</p>
        </div>
        <div>
          <img src="/images/tick.png" alt="tick" />
          <p>Fruits, Drinks, BBQ</p>
        </div>
      </div>
      <a href="tel:+998990000441" className="bg-red-500 rounded-3xl w-full text-3xl text-white py-5">BOOK NOW</a>
    </div>
  );
}

const ServiceDetailPgae = () => {
  return (
    <div className="flex flex-col justify-start px-28 py-10 bg-gray-900 w-full text-white">
      <p className="text-start">Luxury Cars for Rent in Dubai / Services</p>
      <p className="text-4xl text-start my-16">
        Ride a buggy in Dubai and have fun
      </p>
      <div className="flex gap-10">
        <Detail img={"/images/ride1.jpg"} number={1000} person={"one person"} />
        <Detail img={"/images/ride2.jpg"} number={2000} person={"two person"} />
        <Detail img={"/images/ride3.jpg"} number={3000} person={"three person"} />
      </div>
    </div>
  );
};

export default ServiceDetailPgae;
