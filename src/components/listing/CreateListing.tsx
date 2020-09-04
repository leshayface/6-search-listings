import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export interface Values {
  title: "",
  slug: "",
  description: string,
  price: number,
  currency: string,
  email: string,
  category: string
}
export interface IFormState {
  [key: string]: any;
  values: Values[];
  submitSuccess: boolean;
  loading: boolean;
}
const defaultValues: Values = {
  title: "",
  slug: "",
  description: "",
  price: 0,
  currency: "",
  email: "",
  category: ""
}

function CreateCustomer<RouteComponentProps>() {
    const [values, setValues] = useState(defaultValues as Values);

    const history = useHistory();
    
    const handleChange = (event: any) => {
      event.persist();
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
      }));
    }

    const handleSubmit = (event: any) => {
      event.persist();
      axios.post(`http://localhost:5000/listings`, values).then(data => [
        history.goBack()
      ]);
    }

    return ( 
      <form className="w-full max-w-lg mx-auto my-20">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input name="title" onChange={handleChange} defaultValue={values.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-yellow-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Slug
            </label>
            <input name="slug" onChange={handleChange} defaultValue={values.slug} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input name="price" onChange={handleChange} defaultValue={values.price} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Currency
            </label>
            <div className="relative">
              <select name="currency" onChange={handleChange} defaultValue={values.currency} className="block appearance-none w-auto bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="">Select A Currency</option>
                <option value="Furniture">ZAR</option>
                <option value="Electronics">USD</option>
                <option value="Cars">EUR</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input name="email" onChange={handleChange} defaultValue={values.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        <div className="flex flex-wrap mb-2 my-4">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <div className="relative">
              <select name="category" defaultValue={values.category} className="block appearance-none w-auto bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="">Select A Category</option>
                <option value="Furniture">Furniture</option>
                <option value="Electronics">Electronics</option>
                <option value="Cars">Cars</option>
                <option value="Property">Property</option>
              </select>
            </div>
          </div>
        </div>
          <div className="w-full px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea name="description" onChange={handleChange} defaultValue={values.description} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Doe" />
          </div>
        </div>
        <button className="bg-yellow-400 hover:bg-gray-200 text-black font-semibold py-2 px-4 my-6 rounded w-full" onClick={handleSubmit}>
          Save
        </button>
      </form>
)}

export default CreateCustomer;
