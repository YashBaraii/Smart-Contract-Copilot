import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import Components & Pages
import PGNavbar from "./components/PGNavbar";
import MainNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import AuthPage from "@/pages/auth/AuthPage";
import NotFound from "./pages/NotFound";
import Pricing from "./components/Pricing.tsx";
import About from "./pages/About";

import GOIndex from "./pages/GOIndex";
import GOGetStarted from "./pages/GOGetStarted";

import SAIndex from "./pages/SAIndex";  
import SAWhyAutomatedSecurity from "./pages/SAWhyAutomatedSecurity.tsx";
import SAFeatures from "./pages/SAFeatures.tsx";
import SAImplementation from "./pages/SAImplementation.tsx";
import SATesting from "./pages/SATesting.tsx";
import SAResources from "./pages/SAResources.tsx";
import SABlog from "./pages/SABlog.tsx";

import CodeGeneration from "./pages/SC-Index";
// Builder-Specific Pages
import PGIndex from "./pages/PGIndex";
import Templates from "./pages/Templates";
import Docs from "./pages/Docs";
import Community from "./pages/Community";
import PGNotFound from "./pages/PGNotFound";

const queryClient = new QueryClient();

// ✅ Protected Route Wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/auth" />;

  return <>{children}</>;
}

// ✅ Auth Route Wrapper (Redirect if already authenticated)
function AuthRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (isAuthenticated) return <Navigate to="/" />;

  return <>{children}</>;
}


function Layout() {
  const location = useLocation();
  const isBuilderPage = location.pathname.startsWith("/builder");

  return (
    <>
      <MainNavbar />
      {isBuilderPage && <PGNavbar />}  {/* PGNavbar only on /builder routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />

        {/* Auth Routes */}
        <Route path="/auth/*" element={<AuthRoute><AuthPage /></AuthRoute>} />

        {/* Protected Builder Routes */}
        <Route path="/builder" element={<ProtectedRoute><PGIndex /></ProtectedRoute>} />
        <Route path="/builder/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
        <Route path="/builder/docs" element={<ProtectedRoute><Docs /></ProtectedRoute>} />
        <Route path="/builder/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
        <Route path="/builder/*" element={<ProtectedRoute><PGNotFound /></ProtectedRoute>} />

        {/* Gas Optimization */}
        <Route path="/gasOptimization" element={<ProtectedRoute><GOIndex /></ProtectedRoute>} />
        <Route path="/gasOptimization/getStarted" element={<ProtectedRoute><GOGetStarted /></ProtectedRoute>} />

        {/* Security Audit */}
        <Route path="/security-audit" element={<ProtectedRoute><SAIndex /></ProtectedRoute>} />
        <Route path="/security-audit/automated-security" element={<ProtectedRoute><SAWhyAutomatedSecurity /></ProtectedRoute>} />
        <Route path="/security-audit/security-features" element={<ProtectedRoute><SAFeatures /></ProtectedRoute>} />
        <Route path="/security-audit/implementation/access-control" element={<ProtectedRoute><SAImplementation /></ProtectedRoute>} />
        <Route path="/security-audit/implementation/reentrancy" element={<ProtectedRoute><SAImplementation /></ProtectedRoute>} />
        <Route path="/security-audit/implementation/input-validation" element={<ProtectedRoute><SAImplementation /></ProtectedRoute>} />
        <Route path="/security-audit/implementation/transaction-limits" element={<ProtectedRoute><SAImplementation /></ProtectedRoute>} />
        <Route path="/security-audit/implementation/logging" element={<ProtectedRoute><SAImplementation /></ProtectedRoute>} />
        <Route path="/security-audit/testing" element={<ProtectedRoute><SATesting /></ProtectedRoute>} />
        <Route path="/security-audit/resources" element={<ProtectedRoute><SAResources /></ProtectedRoute>} />
        <Route path="/security-audit/blog" element={<ProtectedRoute><SABlog /></ProtectedRoute>} />

        {/* Smart ai code IDE */}
        <Route path="/code-generation" element={<ProtectedRoute><CodeGeneration /></ProtectedRoute>} />


        {/* Redirect /login & /signup to /auth */}
        <Route path="/login" element={<Navigate to="/auth?mode=login" replace />} />
        <Route path="/signup" element={<Navigate to="/auth?mode=signup" replace />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}



// ✅ Main App Component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Router>
            <Layout />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
