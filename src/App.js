import cvImage from './cv_image.jpeg';

function App() {
  return (
    <div className='bg-slate-900 text-white pb-4 overflow-hidden md:overflow-auto'>
      <header>
      <div>
        <div>
          <div className='text-5xl text-center mx-4 my-6'>Curriculum vitae</div>
          <div className="flex flex-wrap md:justify-around text-lg md:mx-12 mx-2 md:text-center">
            <div className='md:w-1/3 w-full md:self-center order-2 md:order-1'>
              <strong>Full name </strong>Mikkel Bendix Munk
              <br />
              <strong>Date of birth </strong>05/11/1991
              <br />
              <strong><a className="text-blue-700" href="https://www.linkedin.com/in/mikkel-bendix-munk-27ab4744" target="_blank" rel="noreferrer">LinkedIn</a></strong>
            </div>
            <div className="m-auto w-1/2 md:w-1/3 mb-2 md:m-0 order-1 md:order-2">
              <img src={cvImage} className="rounded-full self-center w-80 mx-auto" alt="This is how I look" />
            </div>
            <div className='md:w-1/3 w-full md:self-center mt-2 md:mt-0 order-3'>
              <strong>Address </strong>Skibhusvej 266C, ST. TV., 5000 Odense C
              <br />
              <strong>Phone </strong>+45 24664701
              <br />
              <strong>E-mail </strong>Mikkelbendixmunk@gmail.com
            </div>
          </div>
        </div>
        <div className="mx-2 md:mx-12 mt-2 md:mt-16">
          <strong>Presentation</strong>
          <br />
          I have been programming since I was 15 years old, and I still love it.
          <br />
          I was seized by the opportunity to create a product relatively quickly,
          and have therefore made larger and smaller projects in connection with the study, in my spare time and professionally.
          <br />
          I am always looking for new challenges and knowledge to develop myself.
          It is almost required, in the industry, to be curious in order to keep up with the fast paced environment.
          <br />
          That's why I read articles and try to be active on blogs like
          {' '}
          <a href='https://news.ycombinator.com/' target="_blank" rel="noreferrer" className="text-blue-400">Hacker News</a>,
          {' '}
          <a href='https://www.reddit.com/' target="_blank" rel="noreferrer" className='text-blue-400'>Reddit</a>,
          {' '}
          <a href='https://www.stackoverflow.com/' target="_blank" rel="noreferrer" className='text-blue-400'>StackOverflow</a>,
          {' '}
          <a href='https://www.twitter.com/' target="_blank" rel="noreferrer" className='text-blue-400'>Twitter</a>,
          {' '}
          etc.
          In addition, I like to try to acquire practical knowledge by testing new code libraries or creating projects.
          <div className='mt-4'>
            <strong>Personal qualifications</strong>
            <br />
            I am a very social person and good at communicating with different types of people. I see myself as
            social intelligent and being good at judging other people’s character.
            <br />
            I am a good learner, and I always strive of being the best version of myself.
            I like to feel good, both physically and mentally. I have a
            good humour and love a nice laugh. I always take responsibility of myself and my actions.
          </div>
          <div className='mt-4'>
            <strong>Spare time</strong>
            <br />
            I like to program and read about technical news in my spare time to keep up to date.
            <br />
            I like to do fitness with my friends, hang out with my fiancé and my little daughter or see my family in the weekends.
            <br />
            I also enjoy video games or a nice movie.
            <br />
            I have a siberian husky, that I love to take for a run, walk or a hike outside the city.
            <br />
            I love spending time outside, in the forest or near the sea.
            The nature is a place where I find peace and a breathing room for clear thoughts and new ideas.
          </div>
          <div className='mt-4'>
            <strong>Professional qualifications</strong>
            <br />
            My primary compentences are within web based applications, where I have knowledge and experience in fullstack development.
            <br />
            I try to not limit myself within specific languages or frameworks, but I have the most experience with the following.

            <table className='table-fixed bg-slate-500 text-white mt-6'>
              <thead>
                <tr>
                <th className='py-3 px-6'>
                  Javascript libraries
                </th>
                <th className='py-3 px-6'>
                  Backend
                </th>
                <th className='py-3 px-6 text-left'>
                  Miscellaneous
                </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-slate-400'>
                  <td className='py-1 px-6'>
                    Next.js
                  </td>
                  <td className='py-1 px-6'>
                    Node.js
                  </td>
                  <td className='py-1 px-6'>
                    Scrum
                  </td>
                </tr>
                <tr>
                  <td className='py-1 px-6'>
                    React
                  </td>
                  <td className='py-1 px-6'>
                    PHP
                  </td>
                  <td className='py-1 px-6'>
                    SAFe
                  </td>
                </tr>
                <tr className='bg-slate-400'>
                  <td className='py-1 px-6'>
                    TypeScript
                  </td>
                  <td className='py-1 px-6'>
                    C#
                  </td>
                  <td className='py-1 px-6'>
                    Product Thinking
                  </td>
                </tr>
                <tr>
                  <td className='py-1 px-6'>
                    Aurelia JS
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className='bg-slate-400'>
                  <td className='py-1 px-6'>
                    VueJS
                  </td>
                  <td className='py-1 px-6'>
                    Rust
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className='py-1 px-6'>
                    Cypress
                  </td>
                </tr>
                <tr className='bg-slate-400'>
                  <td className='py-1 px-6'>
                    Jest
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-4'>
            <strong>Work experience & Education</strong>
            <ol class="relative border-l border-gray-200 mt-6 ml-2">                  
              <li class="mb-10 ml-6">            
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Software Developer - TV 2 Denmark<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Current</span></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2019 - Present</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Frontend developer on <a href="https://play.tv2.dk" target="_blank" rel='noreferrer' className='text-blue-400'>play.tv2.dk</a> - Using a modern tech stack including a variety of libraries, for example: NodeJS, ReactJS, NextJS, TypeScript and GraphQL.</p>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Frontend developer on our SmartTV solutions, using same tech stack as our web platform.</p>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Scrum Master for almost 3 years. Implemented Product Thinking on a new Product Team. Worked to improve an already experienced and well foundated team, regarding ways of working, processes and communication.</p>
              </li>
              <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer - Too Good To Go</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dec 2017 - Apr 2019 · 1 yr 5 mos</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Fullstack working with PHP and AureliaJS (December 2017 - September 2018)</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Frontend working with ReactJS, Redux (Flux architecture), Redux-saga, Testing with Jest, built with Webpack, Babel as transpiler and Material UI as UI framework. </p>
              </li>
              <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg aria-hidden="true" class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer - Ordbogen A/S</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2015 - Nov 2017 · 2 yr 4 mos</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Fullstack developer, using PHP and AngularJS.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Final project - a web application for statistics.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Internship.</p>
              </li>
              <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Computer Science - Erhvervsakademiet Lillebælt, Odense</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2013 - Jan 2016 · 2 yr 5 mos</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Learned all the basics of learning how to develop software for businesses.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">The primary language of choice was C#, which was used in almost all of our classes.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Electives were web and game development.</p>
              </li>
              <li class="mb-10 ml-6">
                  <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Computer Science - University of Southern Denmark, Odense</h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2011 - July 2013 · 1 yr 11 mos (Did not finish)</time>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Learned the basics of programming in different languages, like Java, Python, C, C++, Haskell and Prolog.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Gained knowledge of advanced mathematics.</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Gained knowledge of theory behind computers and programming languages.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
