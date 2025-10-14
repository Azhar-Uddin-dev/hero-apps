import React from 'react'
import { useRouteError } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
  {error?.message && (
    <p className="text-red-500 font-medium mb-4">{error.message}</p>
  )}

  <img
    src="/src/assets/error-404.png"
    alt="404 Error"
    className="w-64 h-auto mb-6"
  />

  <h1 className="text-3xl font-bold mb-3">Oops, page not found!</h1>
  <p className="text-gray-600 mb-6">
    The page you are looking for is not available.
  </p>

  <button
    onClick={() => window.history.back()}
    className="bg-[#632EE3] text-white px-6 py-2 rounded-lg shadow hover:bg-[#4f24b3] transition"
  >
    Go Back!
  </button>
</div>

      <Footer />
    </>
  )
}

export default ErrorPage
