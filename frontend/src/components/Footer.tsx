// import { Link } from "react-router-dom";
// import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

// const navigation = {
//   main: [
//     { name: "About", href: "/about" },
//     { name: "Pricing", href: "/pricing" },
//     { name: "Documentation", href: "/builder/docs" },
//     { name: "Community", href: "/builder/community" },
//     { name: "Blog", href: "/security-audit/blog" },
//   ],
//   social: [
//     { name: "Twitter", href: "#", icon: Twitter },
//     { name: "GitHub", href: "#", icon: Github },
//     { name: "LinkedIn", href: "#", icon: Linkedin },
//   ],
//   legal: [
//     { name: "Privacy", href: "/privacy" },
//     { name: "Terms", href: "/terms" },
//     { name: "Cookie Policy", href: "/cookies" },
//   ],
// };

// // Team Members Section
// const teamMembers = [
//   {
//     name: "Yash Barai",
//     role: "AI/ML Engineer",
//     image: "https://avatars.githubusercontent.com/u/166858346?v=4",
//     portfolio: "https://yashbarai.netlify.app", // Portfolio link
//     socials: {
//       github: "https://github.com/YashBaraii",
//       twitter: "https://x.com/yashbaraii",
//       linkedin: "https://www.linkedin.com/in/yash-baraii/",
//       instagram: "https://instagram.com/yashbaraii",
//     },
//   },
//   {
//     name: "Sahil Giri",
//     role: "UI/UX Designer",
//     image: "https://avatars.githubusercontent.com/u/187351491?v=4",
//     portfolio: "#",
//     socials: {
//       github: "#",
//       twitter: "#",
//       linkedin: "#",
//       instagram: "#",
//     },
//   },
//   {
//     name: "Farhan Sheikh",
//     role: "UI/UX Designer",
//     image: "https://avatars.githubusercontent.com/u/170020578?v=4",
//     portfolio: "#",
//     socials: {
//       github: "#",
//       twitter: "#",
//       linkedin: "#",
//       instagram: "#",
//     },
//   },
//   {
//     name: "Swaraj Shrivatra",
//     role: "UI/UX Designer",
//     image: "https://via.placeholder.com/100", // Replace with actual profile picture URL
//     socials: {
//       github: "#",
//       twitter: "#",
//       linkedin: "#",
//       instagram: "#",
//     },
//   },
//   {
//     name: "Soham Deshpande",
//     role: "UI/UX Designer",
//     image: "https://via.placeholder.com/100", // Replace with actual profile picture URL
//     socials: {
//       github: "#",
//       twitter: "#",
//       linkedin: "#",
//       instagram: "#",
//     },
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-800">
//       <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
//         <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
//           {navigation.main.map((item) => (
//             <div key={item.name} className="pb-6">
//               <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200">
//                 {item.name}
//               </Link>
//             </div>
//           ))}
//         </nav>

//         {/* Social Icons */}
//         <div className="mt-10 flex justify-center space-x-10">
//           {navigation.social.map((item) => (
//             <Link key={item.name} to={item.href} className="text-gray-400 hover:text-primary transition-colors duration-200">
//               <span className="sr-only">{item.name}</span>
//               <item.icon className="h-6 w-6" aria-hidden="true" />
//             </Link>
//           ))}
//         </div>

//         {/* Credits Section */}
//         <div className="mt-16">
//           <h2 className="text-center text-lg font-semibold text-gray-300">Meet the Team</h2>
//           <div className="mt-6 flex flex-wrap justify-center gap-8">
//             {teamMembers.map((member) => (
//               <div key={member.name} className="flex flex-col items-center text-center">
//                 {/* Glowing Hover Effect */}
//                 <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
//                   <img
//                     className="h-20 w-20 rounded-full border-2 border-gray-700 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-primary/50 hover:shadow-lg"
//                     src={member.image}
//                     alt={member.name}
//                   />
//                 </a>
//                 <h3 className="mt-3 text-sm font-medium text-white">{member.name}</h3>
//                 <p className="text-xs text-gray-400">{member.role}</p>
//                 <div className="mt-2 flex space-x-4">
//                   <Link to={member.socials.github} className="text-gray-400 hover:text-primary transition-colors duration-200">
//                     <Github className="h-5 w-5" />
//                   </Link>
//                   <Link to={member.socials.twitter} className="text-gray-400 hover:text-primary transition-colors duration-200">
//                     <Twitter className="h-5 w-5" />
//                   </Link>
//                   <Link to={member.socials.linkedin} className="text-gray-400 hover:text-primary transition-colors duration-200">
//                     <Linkedin className="h-5 w-5" />
//                   </Link>
//                   <Link to={member.socials.instagram} className="text-gray-400 hover:text-primary transition-colors duration-200">
//                     <Instagram className="h-5 w-5" />
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Copyright */}
//         <p className="mt-10 text-center text-xs leading-5 text-gray-400">
//           &copy; {new Date().getFullYear()} Team Conquerors ⚓. All rights reserved.
//         </p>

//         {/* Legal Links */}
//         <div className="mt-10 flex justify-center space-x-8">
//           {navigation.legal.map((item) => (
//             <Link key={item.name} to={item.href} className="text-xs leading-5 text-gray-400 hover:text-primary transition-colors duration-200">
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/builder/docs" },
    { name: "Community", href: "/builder/community" },
    { name: "Blog", href: "/security-audit/blog" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

// Team Members (Portfolio Only)
const teamMembers = [
  {
    name: "Yash Barai",
    role: "AI/ML Engineer",
    image: "https://avatars.githubusercontent.com/u/166858346?v=4",
    portfolio: "https://yashbarai.github.io", // Portfolio link
  },
  {
    name: "Sahil Giri",
    role: "UI/UX Designer",
    image: "https://avatars.githubusercontent.com/u/187351491?v=4",
    portfolio: "https://www.linkedin.com/in/sahil-g-773989279/",
  },
  {
    name: "Farhan Sheikh",
    role: "UI/UX Designer",
    image: "https://avatars.githubusercontent.com/u/170020578?v=4",
    portfolio: "#",
  },
  {
    name: "Swaraj Shrivatra",
    role: "UI/UX Designer",
    image: "#",
    portfolio: "#",
  },
  {
    name: "Soham Deshpande",
    role: "UI/UX Designer",
    image: "#",
    portfolio: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-primary transition-colors duration-200">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link key={item.name} to={item.href} className="text-gray-400 hover:text-primary transition-colors duration-200">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Credits Section */}
        <div className="mt-16">
          <h2 className="text-center text-lg font-semibold text-gray-300">Meet the Team</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                {/* Image links to portfolio */}
                <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-20 w-20 rounded-full border-2 border-gray-700 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-primary/50 hover:shadow-lg"
                    src={member.image}
                    alt={member.name}
                  />
                </a>
                <h3 className="mt-3 text-sm font-medium text-white">{member.name}</h3>
                <p className="text-xs text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs leading-5 text-gray-400">
          &copy; {new Date().getFullYear()} Team Conquerors ⚓. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="mt-10 flex justify-center space-x-8">
          {navigation.legal.map((item) => (
            <Link key={item.name} to={item.href} className="text-xs leading-5 text-gray-400 hover:text-primary transition-colors duration-200">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

