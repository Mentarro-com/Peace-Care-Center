import pic from './images/ServiceBanner.png';
function Banner() {
  return (
    <section className="md:flex">
      <div className="">
        <img class="w-screen max-h-48 bg-repeat-x" src={pic} alt="logo"></img>
      </div>
    </section>
  );
}

export default Banner;