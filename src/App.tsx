import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Hackathons from "./pages/Hackathons";
import Students from "./pages/Students";
import Host from "./pages/Host";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SubmissionGuidelines from "./pages/SubmissionGuidelines";
import JudgesMentors from "./pages/JudgesMentors";
import DiscordGuidelines from "./pages/DiscordGuidelines";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Commitment from "./pages/Commitment";
import { Helmet } from 'react-helmet-async';
import SEO from '@/components/SEO';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SEO />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/students" element={<Students />} />
            <Route path="/host" element={<Host />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/judges-mentors" element={<JudgesMentors />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submission-guidelines" element={<SubmissionGuidelines />} />
            <Route path="/discord-guidelines" element={<DiscordGuidelines />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/our-commitment" element={<Commitment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;