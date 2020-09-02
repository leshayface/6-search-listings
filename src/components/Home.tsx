import React, { useEffect, useState } from 'react';
import SearchForm from './search/SearchForm'
import axios from 'axios';


export interface Values {
  title: string,
  slug: string,
  description: string,
  price: number,
  currency: string,
  email: string,
  category: object
}

export default function Home() {

  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState([] as Values[]);
  useEffect(() => {
      getData();
  }, [searchValue]);

  const getData = async () => {
    const listings = await axios.get(`http://localhost:5000/listings?title_like=${searchValue}`);
    setData(listings.data);
    console.log(listings)
  }

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  }

  const updateSearchValue = (e: any) => {
    e.preventDefault();
    setSearchValue(search);
    search === "" && setSearchValue("salad");
  }

  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
      <SearchForm search={search} updateSearch={updateSearch} updateSearchValue={updateSearchValue}/>
      {data.map(listing => (
        <div className="max-w-lg bg-white rounded overflow-hidden shadow-lg my-8 w-3/4 text-center" key={listing.title}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{listing.title}</div>
            <div className="font-medium text-md mb-2">{listing.slug}</div>
            <button className="bg-gray-200 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
