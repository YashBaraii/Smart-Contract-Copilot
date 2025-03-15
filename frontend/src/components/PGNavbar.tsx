
import { Link } from "react-router-dom";
import { FileText, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   return (
//     <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full z-50">
//       <div className="flex flex-wrap justify-between items-center">
//         <div className="flex items-center">
//           <Link to="/builder" className="flex items-center mr-8">
//             <span className="self-center text-xl font-semibold whitespace-nowrap ">
//               Builder
//             </span>
//           </Link>
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="builder/templates">
//               <Button variant="ghost" className="flex items-center">
//                 <FileText className="h-4 w-4 mr-2" />
//                 Templates
//               </Button>
//             </Link>
//             <Link to="builder/docs">
//               <Button variant="ghost" className="flex items-center">
//                 <BookOpen className="h-4 w-4 mr-2" />
//                 Docs
//               </Button>
//             </Link>
//             <Link to="builder/community">
//               <Button variant="ghost" className="flex items-center">
//                 <Users className="h-4 w-4 mr-2" />
//                 Community
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed top-[50px] w-full z-40">
      {/* Ensures PGNavbar appears below MainNavbar */}
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/builder" className="flex items-center mr-8">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Builder
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/builder/templates">
              <Button variant="ghost" className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Templates
              </Button>
            </Link>
            <Link to="/builder/docs">
              <Button variant="ghost" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Docs
              </Button>
            </Link>
            <Link to="/builder/community">
              <Button variant="ghost" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Community
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;


