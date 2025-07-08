import { Link } from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri"
import { FaFacebook } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="bg-[#E9E2DB] pt-16 pb-6 mt-10 grid grid-cols-1 sm:grid-cols-4 h-120 sm:h-90 content-between">
      <div className="sm:col-start-2 sm:col-end-2">
        <h2 className="text-2xl font-bold mb-4">Links</h2>
        <ul>
          <li className="mb-2">
            <Link to="/products">Plants</Link>
          </li>
          <li className="mb-2">
            <Link to="/plantcare">Plant care tips</Link>
          </li>
          <li className="mb-2">
            <Link to="/aboutus">About us</Link>
          </li>
          <li className="mb-2">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="sm:col-start-3 sm:col-end-4">
        <h2 className="text-2xl font-bold mb-4">Follow us</h2>
        <ul className="flex gap-4 justify-center">
          <li className="pt-[2px]">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <FaFacebook size={36} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <RiInstagramFill size={40} />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-full sm:mt-6 text-xl logo-font">
        &copy; 2024 LÖV. All rights reserved. Product images from Unsplash.
      </div>
    </div>
  )
}
