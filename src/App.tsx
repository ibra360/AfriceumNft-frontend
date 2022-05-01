import React, { lazy } from "react";
// import Header from './components/Header';
import LandingPage from "./pages/LandingPage";
import Discover from "./pages/explorer/index";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Creators from "./pages/creators/index";
import Collectors from "./pages/collectors/index";
import CreatorsArchive from "./pages/creators/Archive";
import CollectorsArchive from "./pages/collectors/Archive";
import NFTsSinglePage from "./pages/explorer/single";
import CreateNFT from "./pages/createNFT";
import ImportNFT from "./pages/importNFT";
// import Footer from './components/Footer';
import EditProfile from "./pages/editProfile";
import CreateNFTs from "./pages/CreateNFTs";

import Footer from "./components/Home/components/Footer/index";

// import Header from "./components/Home/components/Navigation/index";
import Header from "./components/Header";

import "@splidejs/splide/dist/css/splide.min.css";

import { useAxios } from "./hooks/useAxios";
import Search from "./pages/search";
import Home from "./pages/home";
import Explore from "./pages/explore";

function App() {
  const location = useLocation();
  useAxios();
  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/discover" element={<Explore />} />
          <Route path="/discover/:id" element={<NFTsSinglePage />} />
          <Route path="/create" element={<CreateNFT />} />
          <Route path="/import" element={<ImportNFT />} />

          <Route path="/creators" element={<Creators />} />
          <Route path="/profile/:username" element={<CreatorsArchive />} />
          <Route path="/collectors" element={<Collectors />} />
          <Route path="/collectors/archive" element={<CollectorsArchive />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/create-nfts" element={<CreateNFTs />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default React.memo(App);
