
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rezon-black px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold mb-4 text-rezon-cyan">404</div>
        <h1 className="text-3xl font-space font-bold mb-4 text-white">Page Not Found</h1>
        <p className="text-lg text-white/70 mb-8">
          The page you are looking for does not exist or has been moved to another location.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-rezon-cyan text-rezon-black rounded-md font-medium hover:bg-rezon-cyan/90 transition-colors"
        >
          <Home size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
