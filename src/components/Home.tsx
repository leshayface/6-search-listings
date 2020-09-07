import React, {useEffect, useState} from 'react';
import SearchForm from './search/SearchForm'
import axios from 'axios';
import {Link} from "react-router-dom";

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

  const [searchTitle, setSearchTitle] = useState("");
  const [searchTitleValue, setSearchTitleValue] = useState("");

  const [searchCat, setSearchCat] = useState("");
  const [searchCatValue, setSearchCatValue] = useState("");

  const [data, setData] = useState([] as Values[]);

  useEffect(() => {
    const getData = async () => {
      const listings = await axios.get(`http://localhost:5000/listings?title_like=${searchTitleValue}&category_like=${searchCatValue}`);
      setData(listings.data);
    }
    getData();
  }, [searchTitleValue, searchCatValue]);

  const updateSearchTitle = (e: any) => {
    setSearchTitle(e.target.value);
  }

  const updateSearchCat = (e: any) => {
    setSearchCat(e.target.value);
  }

  const updateSearchValue = (e: any) => {
    e.preventDefault();
    setSearchTitleValue(searchTitle);
    setSearchCatValue(searchCat)
    searchTitle === "" && setSearchTitleValue("");
    searchCat === "" && setSearchCatValue("");
  }

  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
      <SearchForm
        searchTitle={searchTitle}
        updateSearchTitle={updateSearchTitle}
        updateSearchValue={updateSearchValue}
        searchCat={searchCat}
        updateSearchCat={updateSearchCat}
      />
      {data.map(listing => (
        <Link className="bg-white rounded overflow-hidden shadow-lg my-8 w-4/5 md:w-3/6 text-center"
              to={`/listing/${listing.id}`} key={listing.id}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{listing.title}</div>
            <div className="font-medium text-md mb-2">{listing.slug}</div>
            <button className="bg-gray-200 hover:bg-yellow-400 text-black font-semibold py-2 px-4 m-6 rounded">
              View Details
            </button>
            <p className="text-xs flex justify-end">Category: {listing.category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
