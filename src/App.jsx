import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <header className="text-gray-700 border -b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">Kai Portfolio</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href='#home' className="mr-5 hover:text-violet-600 duration-300">Home</a>
          <a href='#about' className="mr-5 hover:text-violet-600 duration-300">About</a>
          <a href='#skills' className="mr-5 hover:text-violet-600 duration-300">Skills</a>
          <a href='#works' className="mr-5 hover:text-violet-600 duration-300">Works</a>
          <a href='#contact' className="hover:text-violet-600 duration-300">Contact</a>
        </nav>
      </div>
    </header>
    <section id="home" className="text-gray-700">
      <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-20">
        <div className="md:w-1/2 flex-grow lg:pr-24 md:pr-16 text-center mb-16 md:text-left">
          <h1 className="sm:text-3xl text-3xl mb-4 font-medium text-gray-800">
            I'm Kai Nakao.
            <br/>Web Developer at Doshisha Univ.
            <br/>I'm a member of <a className="contact-item hover:text-violet-600 duration-300" href="https://doer.vercel.app" target="_blank" rel="noopener">Do'er</a>.
          </h1>
          <button className="text-white bg-violet-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg duration-800">
            Contact
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src = "./img/icon2.jpg" alt = ""></img>
        </div>
      </div>
    </section>

    <section id="about" className="text-gray-800 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-800">
              About
            </h1>
            <p className="pb-10">
              text text text text text text text text text text text text text text
              text text text text text text text text text text text text text text 
              text text text
            </p>
            <p>
             text text text text text text text text text text text text text text
             text text text text text text text text text text text text text text 
             text text text text text text text text text text text text text text
             text text text text text text text text text text text text text text
             text text text text text text text text text text text text text text
            </p>
          </div>
          <div className="flex -m-4 flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg ">
                <div className="flex items-center mb-3">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                   >
                    <path
                      d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C6.40848 3 1.71018 6.82432 0.378052 12C1.71018 17.1757 6.40848 21 12 21C17.5915 21 22.2898 17.1757 23.6219 12C22.2898 6.82432 17.5915 3 12 3ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                   text text text text text text text text text text text text text text
                   text text text text text text text text text text text text text text 
                   text text text
                  </p>
                  <a href="#" className="mt-3 text-violet-600 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C17.5915 3 22.2898 6.82432 23.6219 12C22.2898 17.1757 17.5915 21 12 21C6.40848 21 1.71018 17.1757 0.378052 12C1.71018 6.82432 6.40848 3 12 3ZM12 19C7.52443 19 3.73132 16.0581 2.45723 12C3.73132 7.94186 7.52443 5 12 5C16.4756 5 20.2687 7.94186 21.5428 12C20.2687 16.0581 16.4756 19 12 19Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                   text text text text text text text text text text text text text text
                   text text text text text text text text text text text text text text 
                   text text text
                  </p>
                  <a href="#" className="mt-3 text-violet-600 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-gray-100 h-full p-8 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-violet-600 text-white rounded-full w-8 h-8 flex justify-center items-center mr-3">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div className="#">
                  <p className="leading-relaxed text-base">
                   text text text text text text text text text text text text text text
                   text text text text text text text text text text text text text text 
                   text text text
                  </p>
                  <a href="#" className="mt-3 text-violet-600 flex items-center">
                    もっと見る
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>Golang</h2>
                <div className="shadow w-full bg-violet-100 mt-2">
                  <div
                    className="bg-violet-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "85%" }}
                  >
                    85%
                  </div>
                </div>
                <h2 className="pt-5">JavaScript/React/Next.js</h2>
                <div className="shadow w-full bg-violet-100 mt-2">
                  <div
                    className="bg-violet-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
                <h2 className="pt-5">Rust</h2>
                <div className="shadow w-full bg-violet-100 mt-2">
                  <div
                    className="bg-violet-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
                <h2 className="pt-5">Python</h2>
                <div className="shadow w-full bg-violet-100 mt-2">
                  <div
                    className="bg-violet-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "50%" }}
                  >
                    50%
                  </div>
                </div>
                <h2 className="pt-5">PHP</h2>
                <div className="shadow w-full bg-violet-100 mt-2">
                  <div
                    className="bg-violet-600 text-xs leading-none py-1 text-center text-white"
                    style={{ width: "30%" }}
                  >
                    30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
      
      
    </>
  );
}

export default App
