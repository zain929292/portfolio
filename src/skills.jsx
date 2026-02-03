import React, { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
const skills = [
  {
    name: "Next.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    description: `I have extensive experience working with Next.js, building high-performance and SEO-friendly web applications. I am skilled in server-side rendering (SSR), static site generation (SSG), and dynamic routing, as well as setting up App Router and Pages Router. I can create custom API routes, optimize images, improve performance, and integrate Tailwind CSS to build responsive and modern UIs. I also focus on accessibility and maintainable code structures.`
  },
  {
    name: "React.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    description: `I am highly proficient in React.js, using component-based architecture to build scalable and maintainable web apps. I work with React Hooks such as useState, useEffect, and useContext to manage state effectively. I have experience with state management patterns, performance optimization with memoization, and creating responsive UIs with Tailwind CSS. I emphasize writing clean, reusable components and enhancing user experience through modern React practices.`
  },
  {
    name: "Laravel",
    image: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
    description: `I have solid experience with Laravel for backend development, building RESTful APIs, handling middleware, and implementing authentication systems. I am familiar with role-based access control (RBAC), working with Eloquent ORM for database management, and creating dynamic web applications using Blade templates. My approach ensures secure, efficient, and maintainable code, and I am comfortable integrating Laravel with frontend frameworks like React.`
  },
  {
    name: "React Native",
    image: "https://reactnative.dev/img/header_logo.svg",
    description: `I develop cross-platform mobile applications using React Native, targeting both iOS and Android devices. I work on navigation, routing, and API integration using Axios or Fetch. I implement state management using Context API and optimize app performance. I also focus on responsive designs, clean UI/UX, and using Tailwind CSS or custom components to deliver visually appealing and user-friendly mobile experiences.`
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    description: `I am proficient in Tailwind CSS, creating modern, utility-first designs that are responsive and customizable. I implement dark mode, manage custom configurations, and develop reusable components for consistent design patterns. Tailwind allows me to rapidly prototype designs while maintaining a clean and maintainable codebase, ensuring that web applications look professional on all devices and screen sizes.`
  },
  {
    name: "Bootstrap 5",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    description: `I have experience using Bootstrap 5 to build responsive layouts and UI components. I work with grid systems, utility classes, modals, tabs, tables, and other prebuilt components. I also integrate SCSS for custom theming, ensuring that websites have a consistent look and feel. My knowledge ensures cross-browser compatibility, fast prototyping, and seamless integration with JavaScript and backend frameworks.`
  },
  {
    name: "JavaScript (ES6+)",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    description: `I am proficient in modern JavaScript (ES6+), including let/const, arrow functions, template literals, destructuring, and modules. I work with promises, async/await, array and object methods, DOM manipulation, and event handling. My experience includes writing clean, maintainable code and optimizing scripts for performance, ensuring that web applications are both fast and interactive across all devices.`
  },
  {
    name: "Git",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    description: `I am experienced with Git version control, managing code repositories, branching, merging, and resolving conflicts. I regularly use pull requests and workflows on GitHub or GitLab. My knowledge ensures smooth collaboration in team environments, maintains version history, and enables efficient project management. I focus on clear commit messages and organized repository structures.`
  },
  {
    name: "MySQL",
    image: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    description: `I have strong database skills with MySQL, including writing complex queries, joins, and subqueries. I focus on normalization, indexing for performance, and integrating databases with ORMs. I can design schemas, optimize queries, and manage relational data effectively. My experience ensures that applications can efficiently store, retrieve, and manipulate data while maintaining data integrity and scalability.`
  }
];


const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section
      id="skills"
      className="py-10 px-2 sm:px-6 m-2 sm:m-6 bg-gray-900 rounded-lg relative z-10 scroll-mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-indigo-500/50 transition-shadow duration-500 hover:scale-102"
          >
            <h3 className="text-lg font-semibold mb-2 text-indigo-300 truncate">
              {skill.name}
            </h3>

            {/* Image */}
            <div className="h-24 sm:h-36 w-full mb-3 flex items-center justify-center bg-white rounded-md overflow-hidden">
              <img
                src={skill.image}
                alt={skill.name}
                className="h-20 sm:h-28 object-contain"
              />
            </div>

            {/* Short description */}
<p className="text-gray-300 text-sm">
  <span className="hidden sm:inline">
    {skill.description.slice(0, 80)}...
  </span>
  <span className="inline sm:hidden">
    {skill.description.slice(0, 20)}...
  </span>
</p>


            <button
              onClick={() => setActiveSkill(skill)}
              className="text-indigo-400 hover:text-indigo-300 mt-2 text-sm sm:text-base cursor-pointer"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeSkill &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            onClick={() => setActiveSkill(null)}
          >
            <div
              className="bg-gray-800 max-w-lg sm:max-w-xl w-full rounded-lg p-5 sm:p-6 relative shadow-lg overflow-y-auto max-h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveSkill(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
              </button>

              <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-3">
                {activeSkill.name}
              </h3>
              <p className="text-gray-300 whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {activeSkill.description}
              </p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Skills;
