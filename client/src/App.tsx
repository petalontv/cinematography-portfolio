import { Switch, Route, Link } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/home";
import FilmDetail from "./pages/film-detail";
import Contact from "./pages/contact";
import GradingPage from "./pages/GradingPage";
import AutumnPage from "./pages/AutumnPage";
import CyberpunkPage from "./pages/CyberpunkPage";
import FogPage from "./pages/FogPage";
import SocialsDemo from "./pages/SocialsDemo";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/grading" component={GradingPage} />
      <Route path="/autumn" component={AutumnPage} />
      <Route path="/cyberpunk" component={CyberpunkPage} />
      <Route path="/fog" component={FogPage} />
      <Route path="/film/:id" component={FilmDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/socials-demo" component={SocialsDemo} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
