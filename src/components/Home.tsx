import React, {useEffect, useState} from 'react';
import SearchForm from './search/SearchForm'
import axios from 'axios';
import {Link} from "react-router-dom";

//data value types
export interface Values {
  id: number,
  title: string,
  slug: string,
  dateOnline: string,
  dateOffline: string,
  description: string,
  price: number,
  currency: string,
  email: string,
  category: string
}

export default function Home() {
  //useSate hooks for search title state values
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTitleValue, setSearchTitleValue] = useState("");

  //useSate hooks for search category state values
  const [searchCat, setSearchCat] = useState("");
  const [searchCatValue, setSearchCatValue] = useState("");

  // useSate hook for data
  const [data, setData] = useState([] as Values[]);

  // useEffect hook to fetch data with axios and set the new data state
  useEffect(() => {
    const getData = async () => {
      const listings = await axios.get(`http://localhost:5000/listings?title_like=${searchTitleValue}&category_like=${searchCatValue}`);
      setData(listings.data);
    }
    getData();
  }, [searchTitleValue, searchCatValue]);

  // method to update search title state
  const updateSearchTitle = (e: any) => {
    setSearchTitle(e.target.value);
  }

  // method to update search category state
  const updateSearchCat = (e: any) => {
    setSearchCat(e.target.value);
  }

  // method to update all search values
  const updateSearchValue = (e: any) => {
    e.preventDefault();
    setSearchTitleValue(searchTitle);
    setSearchCatValue(searchCat)
    searchTitle === "" && setSearchTitleValue("");
    searchCat === "" && setSearchCatValue("");
  }

  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
      {/* pass props*/}
      <SearchForm
        searchTitle={searchTitle}
        updateSearchTitle={updateSearchTitle}
        updateSearchValue={updateSearchValue}
        searchCat={searchCat}
        updateSearchCat={updateSearchCat}
      />
      {/* map data and display it */}
      {data.map(listing => (
        <Link className="bg-white rounded overflow-hidden shadow-lg my-8 w-4/5 md:w-3/6 text-center" to={`/listing/${listing.id}`} key={listing.id}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{listing.title}</div>
            <div className="font-medium text-md mb-2">{listing.slug}</div>
            <button className="bg-gray-200 hover:bg-yellow-400 text-black font-semibold py-2 px-4 m-6 rounded">
              View Details
            </button>
            <div className="text-xs flex justify-end">Category: {listing.category}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
