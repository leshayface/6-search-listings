import React, { useState } from 'react';
import { useForm } from "react-hook-form";

//data value types
export interface Values {
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

//form state types
export interface FormState {
  [key: string]: any;
  values: Values[];
  submitSuccess: boolean;
  loading: boolean;
}

//initial data values
const defaultValues: Values = {
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

function CreateListing<RouteComponentProps>() {
   //useSate hook for values
  const [values, setValues] = useState(defaultValues as Values);

  // method to update values state
  const handleChange = (event: any) => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  // method to display object of inserted data
  const onSubmit = (values: any) => {
    alert("Object to send to backend:" + JSON.stringify(values))
  };

  // react-hook-form used for form validation
  const { handleSubmit, register, errors } = useForm();

  return (
    <div className="w-full max-w-lg mx-auto my-20">
      <h1 className="text-4xl my-6 text-gray-800">Fill Out Your Listing Details</h1>
      {/* onSubmit calls methods */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              // regular expressions used for form validation with react-hook-form
              ref={register({ required: "Required", pattern: {value: /^[A-Za-z0-9_-]*$/, message: "Invalid format. Only letters, numbers, underscores & dashes are allowed."} })}
              name="title" onChange={handleChange} defaultValue={values.title}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="eg. Samsung S8 Plus"
            />
            <p className="text-xs text-red-600">{errors.title && errors.title.message}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Slug
            </label>
            <input
              ref={register({ required: "Required", pattern: {value: /^[A-Za-z0-9_-]*$/, message: "Invalid format. Only letters, numbers, underscores & dashes are allowed."}})}
              name="slug"
              onChange={handleChange}
              defaultValue={values.slug}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="eg.In like new condition"
            />
            <p className="text-xs text-red-600">{errors.slug && errors.slug.message}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date Online
            </label>
            <input
              ref={register({ required: "Required", pattern: {value: /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/-]\d{4}$/, message: "Invalid date format, please use DD/MM/YYYY"}})}
              name="dateOnline"
              onChange={handleChange}
              defaultValue={values.dateOnline}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="DD/MM/YYYY"
            />
            <p className="text-xs text-red-600">{errors.dateOnline && errors.dateOnline.message}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date Offline
            </label>
            <input
              ref={register({ required: "Required", pattern: {value: /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/-]\d{4}$/, message: "Invalid date format, please use DD/MM/YYYY"}})}
              name="dateOffline"
              onChange={handleChange}
              defaultValue={values.dateOffline}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="DD/MM/YYYY"
            />
            <p className="text-xs text-red-600">{errors.dateOffline && errors.dateOffline.message}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              ref={register({ required: "Required", pattern: {value: /^(?!\s*$).+/, message: "You must select an option"}})}
              name="price"
              onChange={handleChange}
              type="number"
              defaultValue={values.price}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              placeholder="eg. 100"
            />
            <p className="text-xs text-red-600">{errors.price && errors.price.message}</p>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Currency
            </label>
            <div className="relative">
              <select
                ref={register({ required: "Required", pattern: {value: /^(?!\s*$).+/, message: "You must select an option"}})}
                name="currency"
                onChange={handleChange}
                defaultValue={values.currency}
                className="block appearance-none w-full bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="">Select A Currency</option>
                <option value="Furniture">ZAR</option>
                <option value="Electronics">USD</option>
                <option value="Cars">EUR</option>
              </select>
            <p className="text-xs text-red-600">{errors.currency && errors.currency.message}</p>
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
              placeholder="eg. person@example.com"
            />
            <p className="text-xs text-red-600">{errors.email && errors.email.message}</p>
          </div>
        <div className="flex flex-wrap mb-2 my-4 w-1/2">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <div className="relative">
              <select
                ref={register({ required: "Required", pattern: {value: /^(?!\s*$).+/, message: "You must select an option"}})}
                name="category"
                defaultValue={values.category}
                className="block appearance-none w-full bg-gray-200 border  border-yellow-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="">Select A Category</option>
                <option value="Furniture">Furniture</option>
                <option value="Electronics">Electronics</option>
                <option value="Cars">Cars</option>
                <option value="Property">Property</option>
              </select>
              <p className="text-xs text-red-600">{errors.category && errors.category.message}</p>
            </div>
          </div>
        </div>
          <div className="w-full px-3 my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              ref={register({ required: "Required", pattern: {value: /^[A-Za-z0-9_-]*$/, message: "Invalid format. Only letters, numbers, underscores & dashes are allowed."} })}
              name="description"
              onChange={handleChange}
              defaultValue={values.description}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-yellow-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              placeholder="Describe your product / service in more depth"
            />
            <p className="text-xs text-red-600">{errors.description && errors.description.message}</p>
          </div>
        </div>
        <button className="bg-yellow-400 hover:bg-gray-200 text-black font-semibold py-2 px-4 my-6 rounded w-full" type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default CreateListing;
