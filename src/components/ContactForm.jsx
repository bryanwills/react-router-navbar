import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

const ContactForm = () => {
  return (
    <div className="w-full max-w-lg items-center ">
      <div className="flex flex-wrap -mx-3 mb-6 border-red-500">
        <form
          action="https://formspree.io/f/xlevvdav"
          method="POST"
          className="w-full items-center justify-center"
          >
            <div className="mb-6 items-center">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white items-center"
            >
              Your Email:
              <input
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
                type="email" name="email" />
            </label>
            </div>
            <label
              className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
              Your message:
              <textarea
                name="Enter your message here"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                </textarea>
            </label>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white
              font-bold py-2 px-4 ml-6 rounded-full inline-flex items-center"
              type="submit"
                >
              <AiOutlineSend size={20} style={{color: '#d3d3d3', marginRight:'10px' }}/> Send
            </button>
          </form>
        </div>
      </div>
  )
}

export default ContactForm