import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { CiBookmarkMinus } from "react-icons/ci";
import Slider from'./Slider/Slider'



const Info = () => {
  return (
    <div >
        <section class="section__container plan__container" >
      <p class="subheader"  data-aos="zoom-in-up" data-aos-duration="1000">TRAVEL SUPPORT</p>
      <h2 class="section__header"  data-aos="zoom-in-up" duration="1000">Plan your travel with confidence</h2>
      <p class="description"  data-aos="zoom-in-up" duration="1000">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div class="plan__grid">
        <div class="plan__content"  data-aos="fade-right"
     data-aos-duration="3000" >
          <span class="number">01</span>
          <h4>Travel Requirements for Srilanka</h4>
          <p>
            Stay informed and prepared for your trip to Srilanka with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div class="plan__image" lg="9" data-aos="fade-left"
     data-aos-duration="3000">
          <img src="./src/assets/info/plan-1.jpg" alt="plan" />
          <img src="./src/assets/info/plan-2.jpg" alt="plan" />
          <img src="./src/assets/info/plan-3.jpg" alt="plan" />
        </div>
      </div>
    </section>


    <section class="memories">
      <div class="section__container memories__container">
        <div class="memories__header">
          <h2 class="section__header"data-aos="fade-left" duration="1500">
            Travel to make memories all around the world
          </h2>
          {/*<button class="view__all">View All</button>*/}
        </div>
        <div class="memories__grid">
          <div class="memories__card" data-aos="zoom-in" data-aos-duration='3000'>
            <span><FaRegCalendarAlt /></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div class="memories__card" data-aos="zoom-in" data-aos-duration='3000'>
            <span><GoShieldCheck /></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div class="memories__card" data-aos="zoom-in" data-aos-duration='3000'>
            <span><CiBookmarkMinus /></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/*slider

      <div className="App">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl">Value Added Services</h1>
      </header>
      <main className="p-4">
        <Slider />
      </main>
    </div>

*/}












    <section class="section__container lounge__container">
      <div class="lounge__image"  data-aos="fade-right" duration="2000">
        <img src="./src/assets/info/lounge-1.jpg" alt="lounge" />
        <img src="./src/assets/info/lounge-2.jpg" alt="lounge" />
      </div>
      <div class="lounge__content" data-aos="fade-left" data-aos-duration='1000'>
        <h2 class="section__header">Unaccompanied Minor Lounge</h2>
        <div class="lounge__grid">
          <div class="lounge__details" data-aos="fade-left" data-aos-duration='2000'>
            <h4>Experience Tranquility</h4>
            <p>
              Serenity Haven offers a tranquil escape, featuring comfortable
              seating, calming ambiance, and attentive service.
            </p>
          </div>
          <div class="lounge__details" data-aos="fade-left" data-aos-duration='2000'>
            <h4>Elevate Your Experience</h4>
            <p>
              Designed for discerning travelers, this exclusive lounge offers
              premium amenities, assistance, and private workspaces.
            </p>
          </div>
          <div class="lounge__details" data-aos="fade-left" data-aos-duration='3000'>
            <h4>A Welcoming Space</h4>
            <p>
              Creating a family-friendly atmosphere, The Family Zone is the
              perfect haven for parents and children.
            </p>
          </div>
          <div class="lounge__details" data-aos="fade-left" data-aos-duration='3000'>
            <h4>A Culinary Delight</h4>
            <p>
              Immerse yourself in a world of flavors, offering international
              cuisines, gourmet dishes, and carefully curated beverages.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section__container travellers__container">
      <h2 class="section__header" data-aos="fade-right" data-aos-duration='2000'>Best travellers of the month</h2>
      <div class="travellers__grid "  >
      <div className='transform hover:scale-[108%] transition duration-300 ease-out'>
        <div class="travellers__card" data-aos="zoom-in" data-aos-duration='2500'>
          <img src="./src/assets/info/traveller-1.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="./src/assets/info/client-1.jpg" alt="client" />
            <h4>Emily Johnson</h4>
            <p>Dubai</p>
          </div>
        </div>
        </div>
        <div className='transform hover:scale-[108%] transition duration-300 ease-out'>
        <div class="travellers__card " data-aos="zoom-in" data-aos-duration='2500'>
          <img src="./src/assets/info/traveller-2.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="./src/assets/info/client-2.jpg" alt="client" />
            <h4>David Smith</h4>
            <p>Paris</p>
          </div></div>
        </div>

        <div className='transform hover:scale-[108%] transition duration-300 ease-out'>

        <div class="travellers__card" data-aos="zoom-in" data-aos-duration='2500'> 
          <img src="./src/assets/info/traveller-3.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="./src/assets/info/client-3.jpg" alt="client" />
            <h4>Olivia Brown</h4>
            <p>Singapore</p>
          </div>
          </div>
        </div>
        <div className='transform hover:scale-[108%] transition duration-300 ease-out'>

        <div class="travellers__card " data-aos="zoom-in" data-aos-duration='2500'>
          <img src="./src/assets/info/traveller-4.jpg" alt="traveller" />
          <div class="travellers__card__content">
            <img src="./src/assets/info/client-4.jpg" alt="client" />
            <h4>Daniel Taylor</h4>
            <p>Malaysia</p>
          </div>
          </div>

        </div>
      </div>
    </section>

    {/*

    <section class="subscribe">
      <div class="section__container subscribe__container">
        <h2 class="section__header">Subscribe newsletter & get latest news</h2>
        <form class="subscribe__form">
          <input type="text" placeholder="Enter your email here" />
          <button class="btn">Subscribe</button>
        </form>
      </div>
    </section>

  */}








    </div>
  )
}

export default Info