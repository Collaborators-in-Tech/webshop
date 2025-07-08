import React from "react"
import { NavigationRow } from "../components/NavigationRow"

export const AboutUsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavigationRow links={[{ text: "About Us", to: "/aboutus" }]} />

      <div
        className="
        mt-[30px]
        mx-auto
        lg:mx-[100px]"
      >
        <h2
          className="
      text-[28px] 
      md:text-[40px] 
      font-semibold 
      mb-[60px]"
        >
          About Us
        </h2>

        <div
          className="
      grid 
      grid-cols-1 
      md:grid-cols-2 
      "
        >
          <div
            className="
      p-[16px]
      flex 
      flex-col 
      items-center 
      text-center
      max-w-[450px]
      mx-auto"
          >
            <img
              src="/images/Erika.png"
              alt="Picture of Erika"
              className="w-[100px] 
          h-[100px] 
          md:w-[200px] 
          md:h-[200px] 
          object-cover 
          rounded-full
          mb-[30px]
          "
            />
            <h3
              className="
        text-[24px] 
        md:text-[32px] 
        font-semibold 
        mb-[16px]"
            >
              Erika Wernbro
            </h3>
            <p
              className="
          text-[18px]
          font-light
        md:text-[20px]
        mb-[16px]"
            >
              Frontend developer who loves to combine creativity, and
              organizational skills, to make information more available and
              creating engaging, user-friendly digital experiences.
            </p>
            <a
              href="https://tejpex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[100px]
            hover:scale-103 
            transition-transform 
            duration-150"
            >
              https://tejpex.com/
            </a>
          </div>

          <div
            className="
      p-[16px] 
      flex 
      flex-col 
      md:flex-col-2
      items-center 
      text-center
      max-w-[450px]
      mx-auto
      "
          >
            <img
              src="/images/Juliette.png"
              alt="Profile picture"
              className="
          w-[100px] 
          h-[100px] 
          md:w-[200px] 
          md:h-[200px] 
          object-cover 
          rounded-full
          mb-[30px]"
            />
            <h3
              className="
        text-[24px] 
        md:text-[32px] 
        font-semibold 
        mb-[16px]"
            >
              Juliette Barsomi
            </h3>
            <p
              className="
          text-[18px]
          font-light
        md:text-[20px]
        mb-[16px]"
            >
              An Agile project manager who is passionate about creating
              structure, improving workflows and helping teams develop.
            </p>
            <a
              href="https://www.linkedin.com/in/juliette-barsomi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[100px]
            hover:scale-103 
            transition-transform 
            duration-150"
            >
              https://www.linkedin.com/in/juliette-barsomi/
            </a>
          </div>
          <div
            className="
      p-[16px] 
      flex 
      flex-col 
      md:flex-col-2
      items-center 
      text-center
      max-w-[450px]
      mx-auto
      "
          >
            <img
              src="/images/Lovisa.png"
              alt="Picture of Lovisa"
              className="
          w-[100px] 
          h-[100px] 
          md:w-[200px] 
          md:h-[200px] 
          object-cover 
          rounded-full
          mb-[30px]"
            />
            <h3
              className="
        text-[24px] 
        md:text-[32px] 
        font-semibold 
        mb-[16px]"
            >
              Lovisa Åberg
            </h3>
            <p
              className="
          text-[18px]
          font-light
        md:text-[20px]
        mb-[16px]"
            >
              Frontend developer with a curious mindset and an eye for detail.
              My background in UX design helps me build accessible and
              user-friendly experiences. I enjoy exploring new ideas, learning,
              and collaborating.
            </p>
            <a
              href="https://lovisaaberg.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[100px]
            hover:scale-103 
            transition-transform 
            duration-150"
            >
              https://lovisaaberg.netlify.app/
            </a>
          </div>
          <div
            className="
      p-[16px] 
      flex 
      flex-col 
      md:flex-col-2
      items-center 
      text-center
      max-w-[450px]
      mx-auto
      "
          >
            <img
              src="/images/Patric.png"
              alt="Picture of Patric"
              className="
          w-[100px] 
          h-[100px] 
          md:w-[200px] 
          md:h-[200px] 
          object-cover 
          rounded-full
          mb-[30px]"
            />
            <h3
              className="
        text-[24px] 
        md:text-[32px] 
        font-semibold 
        mb-[16px]"
            >
              Patric Angly
            </h3>
            <p
              className="
          text-[18px]
          font-light
        md:text-[20px]
        mb-[16px]"
            >
              Frontend developer, now focusing on backend development. A
              highlight from this project was implementing Stripe by creating an
              API endpoint to initiate payment sessions, which helped me
              understand how to connect external payment services.
            </p>

            <a
              href="              https://github.com/PatricAngly"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-[80px]
            hover:scale-103 
            transition-transform 
            duration-150"
            >
              https://github.com/PatricAngly
            </a>
          </div>
        </div>

        <div
          className="
      grid
      grid-cols-3
      lg:gap-[55px]
      justify-items-center
      mb-[120px]
      "
        >
          <img
            src="/images/aboutus-plant1.png"
            alt="Picture of a plant"
            className="
          w-[100px] 
          h-[300px] 
          sm:w-[200px] 
          sm:h-[350px] 
          md:w-[280px] 
          md:h-[400px] 
          lg:w-[349px] 
          lg:h-[436px]   
          object-cover"
          />

          <img
            src="/images/aboutus-plant2.png"
            alt="Picture of a plant"
            className="
          w-[100px] 
          h-[300px] 
          sm:w-[200px] 
          sm:h-[350px] 
          md:w-[280px] 
          md:h-[400px] 
          lg:w-[349px] 
          lg:h-[436px]   
          object-cover"
          />

          <img
            src="/images/aboutus-plant3.png"
            alt="Picture of a plant"
            className="
          w-[100px] 
          h-[300px] 
          sm:w-[200px] 
          sm:h-[350px] 
          md:w-[280px] 
          md:h-[400px] 
          lg:w-[349px] 
          lg:h-[436px]   
          object-cover"
          />
        </div>
      </div>
    </div>
  )
}
