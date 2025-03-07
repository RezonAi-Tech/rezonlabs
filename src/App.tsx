
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add a security-themed console message
    console.log("%c⚠️ Security Warning", "color: #00FFF0; font-size: 24px; font-weight: bold;");
    console.log("%cThis is a secure application by Rezon Security Labs.", "color: white; font-size: 14px;");
    console.log("%cGitHub: https://github.com/RezonAi-Tech/rezonlabs", "color: #00FFF0; font-size: 12px;");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner theme="dark" className="font-mono" />
        <div className="digital-noise fixed inset-0 pointer-events-none z-[-1] opacity-10"></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
