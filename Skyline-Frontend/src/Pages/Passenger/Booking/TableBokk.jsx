import React, { useState, useMemo ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const TableBokk = () => {


    //get flight table
  const [Books, setbook] = useState([]);
  const [searchQuery] = useState('');

  useEffect(() => {
    function getbooks() {
      axios.get('http://localhost:5000/booklist/')
        .then((res) => {
          setbook(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div> 😡 Error registering user</div>);
        });
    }

    getbooks();
  }, []);

 
 // Filter flights based on search query
const filteredbooks = Books.filter((book) =>
book.from.toLowerCase().includes(searchQuery.toLowerCase())
);
  return (
    <div>




        

<div class="relative overflow-x-auto mt-6">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <tr >
                <th scope="col" class="p-4">
                   
                </th>
                <th scope="col" class="px-6 py-3">
                From
                </th>
                <th scope="col" class="px-6 py-3">
                To
                </th>
                <th scope="col" class="px-6 py-3">
                Flight
                </th>
                <th scope="col" class="px-6 py-3">
                Economy Class Price
                </th>
                <th scope="col" class="px-6 py-3">
                Busineess Class Price
                </th>
                <th scope="col" class="px-6 py-3">
                   
                </th>
            </tr>
        </thead>
        <tbody>
        {filteredbooks.map((books, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td class="w-4 p-4">{index + 1}</td>
                    <td>{books.from}</td>
                    <td>{books.to}</td>
                    <td>{books.flight}</td>
                    <td>{books.economyPrice}</td>
                    <td>{books.busineessPrice}</td>
                <td class="px-6 py-4">
                    < a href="login">
                <button className=' w-full bg-blue-500 py-3 text-center text-white hover:bg-blue-700 hover:text-white'>Book Now</button>
                </a>
                </td>
            </tr>
           
        ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default TableBokk