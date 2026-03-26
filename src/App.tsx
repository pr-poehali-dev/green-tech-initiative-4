
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import MoviePage from "./pages/MoviePage";
import NotFound from "./pages/NotFound";
import { type Movie } from "@/data/movies";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                !user
                  ? <Index onLogin={(name) => setUser(name)} />
                  : selectedMovie
                    ? <MoviePage movie={selectedMovie} onBack={() => setSelectedMovie(null)} />
                    : <Dashboard userName={user} onLogout={() => setUser(null)} onMovieSelect={setSelectedMovie} />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;