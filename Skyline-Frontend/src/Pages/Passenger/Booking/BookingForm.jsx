import React,{useState, useContext} from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { AuthContext} from"../../context/AuthContext";
import { confirmAlert } from 'react-confirm-alert'; 
import { useNavigate } from "react-router-dom"; 
const BookingForm = (tour) => {

  const{economyPrice,businessPrice}=tour
  const [selectedClass, setSelectedClass] = useState('');
  const [count, setCount] = useState(1);
  const { passenger } = useContext(AuthContext);

  const navigate = useNavigate();
  
//pasenger page addition
  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };



//price calculation
const handleClassChange = (event) => {
  const selectedClass = event.target.value;
  setSelectedClass(selectedClass);
};

const getPrice = () => {
  if (selectedClass === "economy") {
    return economyPrice;
  } else if (selectedClass === "business") {
    return businessPrice;
  }
  return 0;
};

const getTotalPrice = () => {
  const pricePerPassenger = getPrice();
  const serviceCharge = 10;
  return pricePerPassenger * count + serviceCharge;
};




const handleClick = async (e) => {
  e.preventDefault();

  try {
     if(!passenger || passenger===undefined || passenger===null) {
      confirmAlert({
        title: 'Log In Required',
        message: 'You need to log in to book this tour. Do you want to log in now?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => navigate("/login")
          },
          {
            label: 'No'
          }
        ]
      });
    } else {
      navigate("/thankyou");
    }
  } catch (error) {
    console.error('Error handling click event:', error);
  }
};

  



  return (
    <>
      {/* tour Card8 */}
      <div>
        <div className="flex items-center">
          {/* <img
      src="./src/assets/bg/book.gif"
      alt="book"
      className="rounded-lg w-[300px] h-[200px]"
  />*/}
          <div className="w-full">
            <h1 className="font-sans font-extrabold text-[51px] text-lg  mb-5 bg-[#172554] text-white text-center rounded-lg flex items-center justify-center h-[72px] -">
              Booking Details
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between p-4 lg:p-8 -mt-[20px]">
          {/*
      <TourDetails />
booking Form*/}
          <div className="lg:w-[1400px]">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="text-xl font-semibold mb-2">
                Passenger Details
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Title
                </label>
                <select
                  name="title"
                  className="mt-1 block w-40 border border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Last Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Passport Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md mb-4 ">
              <div className="flex items-center space-x-4 p-4 border rounded-lg">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">Passenger</span>
                    <FaInfoCircle className="text-gray-500" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={decrement}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-white hover:bg-gray-600"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="font-semibold text-lg">{count}</span>
                  <button
                    onClick={increment}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-700"
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>

              {count > 1 &&
                Array.from({ length: count - 1 }).map((_, index) => (
                  <div key={index} className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">
                      Passenger {index + 2}
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          name={`firstName-${index + 2}`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          placeholder="First Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name={`lastName-${index + 2}`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          placeholder="Last Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700">
                          Passport Number
                        </label>
                        <input
                          type="text"
                          name={`passportNumber-${index + 2}`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          placeholder="Passport Number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name={`phoneNumber-${index + 2}`}
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>


            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="text-xl font-semibold mb-2">Passenger</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">
                      Class
                    </label>
                    <select
                      name="class"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      onChange={handleClassChange} // Add onChange event handler
                    >
                      <option value="">Select Class</option>
                      <option value="economy">Economy Class</option>
                      <option value="business">Business Class</option>
                    </select>
                  </div>

                </div>

                <div className="flex justify-between items-center mb-4">
                    <label className="block text-lg font-semibold text-gray-700">
                      Price
                    </label>
                    <span className='text-lg font-semibold' >${getPrice()}</span>
                   
                  </div>

                <div className="flex justify-between items-center mb-4">
                  <span  className='text-lg font-semibold'>
                    ${economyPrice} x {count} Passenger{count > 1 ? "s" : ""}
                  </span>
                  <span className='text-lg font-semibold'>${getPrice() * count}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span  className='text-lg font-semibold'>Service Charge</span>
                  <span className='text-lg font-semibold'>$10</span>
                </div>

                <div className="flex justify-between items-center font-semibold mb-4">
                  <span  className='text-2xl font-semibold'>Total</span>
                  <span className='text-2xl font-semibold'>${getTotalPrice()}</span>
                </div>

                <button className="bg-blue-700 text-white hover:bg-blue-500 w-full py-2 px-4 rounded"
                onClick={handleClick}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
