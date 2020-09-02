import React, { useEffect, useState } from 'react';
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

  const [data, setData] = useState([] as Values[]);
  useEffect(() => {
      getData();
  }, []);

  const getData = async () => {
    const listings = await axios.get(`http://localhost:5000/listings`);
    setData(listings.data);
    console.log(listings)
  }

  return (
    <div>
      {data.map(listing => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={listing.title}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{listing.title}</div>
            <p className="text-gray-700 text-base">
              {listing.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
