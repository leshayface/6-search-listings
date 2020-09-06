import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

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

    const onSubmit = (event: any) => {
      event.persist();
      axios.post(`http://localhost:5000/listings`, values).then(data => [
        history.goBack()
      ]);
    }

    const { handleSubmit, register, errors } = useForm();

    return ( 
      <div className="w-full max-w-lg mx-auto my-20">
        <h1 className="text-4xl my-6 text-gray-800">Fill Out Your Listing Details</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
              </label>
              <input ref={register({ required: "Required", pattern: {value: /^[A-Za-z]+$/i, message: "invalid title"} })} name="title" onChange={handleChange} defaultValue={values.title} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              <p className="text-xs text-red-600">{errors.title && errors.title.message}</p>
            </div>
            <div className="w-full md:w-1/2 px-3 my-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Slug
              </label>
              <input ref={register({ required: "Required", pattern: {value: /^[A-Za-z]+$/i, message: "invalid slug"}})} name="slug" onChange={handleChange} defaultValue={values.slug} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
              <p className="text-xs text-red-600">{errors.slug && errors.slug.message}</p>
            </div>
            <div className="w-full md:w-1/2 px-3 my-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Price
              </label>
              <input name="price" onChange={handleChange} type="number" defaultValue={values.price} className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Doe" />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Currency
              </label>
              <div className="relative">
                <select name="currency" onChange={handleChange} defaultValue={values.currency} className="block appearance-none w-full bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
              <input
                ref={register({ required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }})}
                name="email"
                onChange={handleChange}
                defaultValue={values.email}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
              <p className="text-xs text-red-600">{errors.email && errors.email.message}</p>
            </div>
          <div className="flex flex-wrap mb-2 my-4 w-1/2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Category
              </label>
              <div className="relative">
                <select name="category" defaultValue={values.category} className="block appearance-none w-full bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
          <button className="bg-yellow-400 hover:bg-gray-200 text-black font-semibold py-2 px-4 my-6 rounded w-full" type="submit">
            Save
          </button>
        </form>
      </div>
)}

export default CreateCustomer;
