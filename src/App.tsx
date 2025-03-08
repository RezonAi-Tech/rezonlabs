
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Configure React Query client with performance optimizations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1
    }
  }
});

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-rezon-black">
    <div className="animate-pulse-slow">
      <div className="h-2 w-40 bg-rezon-cyan/50 rounded mb-3"></div>
      <div className="h-2 w-28 bg-rezon-cyan/30 rounded"></div>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    // Add a security-themed console message
    console.log("%c⚠️ Security Warning", "color: #00FFF0; font-size: 24px; font-weight: bold;");
    console.log("%cThis is a secure application by Rezon Security Labs.", "color: white; font-size: 14px;");
    console.log("%cPowered by advanced Python security algorithms", "color: #00FFF0; font-size: 14px;");
    console.log("%cGitHub: https://github.com/RezonAi-Tech/rezonlabs", "color: #00FFF0; font-size: 12px;");
    console.log("%cTwitter: https://x.com/PrakharYud", "color: #00FFF0; font-size: 12px;");
    console.log("%cBuilt by RezonAi Tech", "color: white; font-size: 12px;");
    
    // Pre-connect to external domains
    const links = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
    ];
    
    links.forEach(linkData => {
      const link = document.createElement('link');
      Object.entries(linkData).forEach(([key, value]) => {
        if (value !== undefined) {
          link.setAttribute(key, value);
        }
      });
      document.head.appendChild(link);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" className="font-mono" />
        <div className="digital-noise fixed inset-0 pointer-events-none z-[-1] opacity-10"></div>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/index" element={<Navigate to="/" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
