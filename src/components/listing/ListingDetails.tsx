import React, {useEffect, useState} from 'react';

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

const defaultValues: Values = {
  id: 0,
  title: "",
  slug: "",
  dateOnline: "",
  dateOffline: "",
  description: "",
  price: 0,
  currency: "",
  email: "",
  category: ""
}

export default function ListingDetails(props:any) {
  const [data, setData] = useState(defaultValues as Values);

  useEffect(() => {
    const getData = async () => {
      const { params } = props.match;
      const response =  await fetch(`http://localhost:5000/listings/${params.id}`);
      const listing = await response.json();
      setData(listing);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-200 h-screen">
        <div className="bg-white rounded overflow-hidden shadow-lg my-8 w-4/5 md:w-3/6 text-center">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <div className="font-medium text-md mb-2">{data.slug}</div>
            <div className="text-xs text-blue-600">Date Online: {data.dateOnline}</div>
            <div className="text-md my-8">{data.description}</div>
            <div className="text-lg font-semibold text-blue-600 mt-8">{data.currency} {data.price}</div>
            <div className="flex items-end mt-8 mb-2">
              <div className="flex items-end justify-start">
                <div className="font-medium text-sm text-md mt-2 mr-2">Contact:</div>
                <div className="font-medium text-sm text-md text-blue-600">{data.email}</div>
              </div>
              <div className="text-xs flex w-full justify-end">Category: {data.category}</div>
            </div>
          </div>
        </div>
    </div>
  );
}
