// import { Code2, Shield, Zap, Binary } from "lucide-react";

// const Features = () => {
//   const features = [
//     {
//       icon: <Code2 className="w-8 h-8" />,
//       title: "Drag-and-Drop Builder",
//       description: "Create smart contracts visually with our intuitive builder interface",
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Automated Security Audit",
//       description: "Detect vulnerabilities before they become problems",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Gas Optimization",
//       description: "Reduce deployment costs with our optimization engine",
//     },
//     {
//       icon: <Binary className="w-8 h-8" />,
//       title: "Instant Code Generation",
//       description: "Generate clean, optimized Move code in real-time",
//     },
//   ];

//   return (
//     <section id="features" className="py-20 bg-secondary">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Powerful Features
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Everything you need to create secure and efficient smart contracts
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-300"
//             >
//               <div className="text-primary mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold text-white mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


import { Code2, Shield, Zap, Binary } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Features = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Drag-and-Drop Builder",
      description: "Create smart contracts visually with our intuitive builder interface",
      route: "/builder", // Define the route for this feature
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Security Audit",
      description: "Detect vulnerabilities before they become problems",
      route: "/security-audit", // Define the route for this feature
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Gas Optimization",
      description: "Reduce deployment costs with our optimization engine",
      route: "/gasOptimization", // Define the route for this feature
    },
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Instant Code Generation",
      description: "Generate clean, optimized Move code in real-time",
      route: "/code-generation", // Define the route for this feature
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to create secure and efficient smart contracts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.route} // Use the route defined for each feature
              className="block p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
