
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/SANavigation";
import Button from "@/components/SAButton";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="flex flex-col items-center justify-center h-screen px-4 -mt-16">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 text-5xl font-bold">404</span>
            </div>
          </div>
          <h1 className="heading-lg mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              icon={<Home size={18} />}
              iconPosition="left"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </Button>
            <Button
              variant="outline"
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
