import ProfileIcon from "./SVGIcon/ProfileIcon";
import SearchIcon from "./SVGIcon/SearchIcon";
import WalletIcon from "./SVGIcon/WalletIcon";
import { Popover, Transition } from "@headlessui/react";
import MobileMenu from "./MobileMenu";
import HamburgerIcon from "./SVGIcon/HamburgerIcon";
import CloseIcon from "./SVGIcon/CloseIcon";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "../contexts/AuthContext";
import { useActiveWeb3React } from "../hooks";
import useAuth from "../hooks/useAuth";
import useLink from "../hooks/useLink";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";

import { FaUserEdit } from "react-icons/fa";

import ConnectModal from "./WalletConnect/ConnectModal";
import Backdrop from "./Utilities/Backdrop";
import { shortenHex } from "../utils/helper";
import { DefaultAvatar } from "../config/constants";
import { toast } from "react-toastify";

const Header = () => {
  const [query, setQuery] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showConnectOptions, setShowConnectOptions] = useState(false);

  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const { user } = useAuthState();
  const { linkToUser } = useLink();

  const handleSearch = (value) => {
    navigate(`/search?q=${value}`);
  };

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location]);

  useEffect(() => {
    if (
      location.pathname === "/search" ||
      (location.pathname !== "/search" && query !== "")
    ) {
      //handleSearch(query);
    }
  }, [query]);

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      if (
        location.pathname === "/search" ||
        (location.pathname !== "/search" && query !== "")
      ) {
        handleSearch(query);
      }
    }
  };

  const [menuExpanded, setMenuExpanded] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [loginNav, setLoginNav] = useState(false);

  return (
    <>
      <header className="App-header fixed top-0 w-full h-[60px] md:h-[72px] px-4 md:px-7 flex items-center justify-between shadow-lg bg-white z-[9999]">
        <a
          href="/"
          className="flex items-center justify-start pr-16 text-2xl font-bold logo xl:pr-44 text-Dark"
        >
          <img className="w-10 mr-2" src="/logos.png" />
          <span className="ml-1 text-xl uppercase color-black">Africeum</span>
          {/* <img src="https://opensea.io/static/images/logos/opensea.svg" alt="logo" className="w-10 mr-2" /> */}
          {/* Africeum */}
        </a>
        <div className="search-wrap hidden md:inline-block relative w-full xl:mr-10 h-[45px]">
          <div className="icon absolute top-[13px] left-4 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={(e) => handleKeypress(e)}
            className="w-full h-full pl-12 border border-solid rounded-lg outline-none border-Grey/40"
            name="search"
            id="search"
            placeholder="Search items, collections, and accounts"
          />
        </div>
        <div className="hidden menu-wrap md:inline-block">
          <ul className="flex items-center justify-end">
            <li className="ml-5 xl:ml-10">
              <a
                href="/explore"
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">
                  Explore
                </span>
                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                  <li>
                    <a
                      href="/explore"
                      className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      <img
                        src="https://opensea.io/static/images/icons/allnfts-light.svg"
                        alt="logo"
                        className="w-8 h-8 mr-2"
                      />{" "}
                      All NFTs
                    </a>
                  </li>
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Arts</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Collectibles</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Domain Names</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Music</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Photography</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Sports</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Trading Cards</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Utility</a></li> */}
                  {/* <li><a href="/" className="flex items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"><img src="https://opensea.io/static/images/icons/allnfts-light.svg" alt="logo" className="w-8 h-8 mr-2" /> Virtual Worlds</a></li> */}
                </ul>
              </a>
            </li>
            {/* <li className="ml-5 xl:ml-10">
              <a
                href="/creators"
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">
                  Creators
                </span>
                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Rankings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Activity
                    </a>
                  </li>
                </ul>
              </a>
            </li> */}
            {/* <li className="ml-5 xl:ml-10">
              <a
                href="/"
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">
                  Resources
                </span>
                <ul className="absolute top-[45px] -left-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Platform Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Gas-free Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Taxes
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      Newsletter
                    </a>
                  </li>
                </ul>
              </a>
            </li> */}
            <li className="ml-5 xl:ml-10" style={{ cursor: "pointer" }}>
              <a
                onClick={() => {
                  if (user && user.image) {
                    navigate("/create");
                  }
                  if (account && !user?.image) {
                    toast.error("Profile is not complete!");
                    navigate("/edit-profile");
                  }
                  if (!account) {
                    toast.error("Wallet not Connected!");
                    setShowConnectOptions(true);
                  } else {
                  }
                }}
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center transition ease-in text-black/70 hover:text-black">
                  Create
                </span>
              </a>
            </li>
            <li className="ml-5 xl:ml-10">
              <a
                // href="/"
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center">
                  <ProfileIcon color={account ? "#ff0022" : "#000"} />
                </span>
                <ul className="absolute top-[35px] -right-4 w-60 bg-white shadow-NFT opacity-0 invisible overflow-hidden rounded-lg transition ease-in group-hover:opacity-100 group-hover:visible">
                  <li>
                    <a
                      className="flex flex-row items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                      onClick={() => {
                        setLoginNav(!loginNav);
                        if (account) {
                          if (user?.username) {
                            navigate(`/profile/${user.username}`);
                          } else {
                            toast.error("Profile is not complete!");
                            navigate("/edit-profile");
                          }
                        } else {
                          toast.error("Wallet is not connected!");
                          setShowConnectOptions(true);
                        }
                      }}
                    >
                      <BsFillPersonFill />

                      <div className="ml-2">Profile</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex flex-row items-center w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                      onClick={() => {
                        setLoginNav(!loginNav);
                        if (account) {
                          navigate("/edit-profile");
                        } else {
                          toast.error("Wallet is not connected!");
                          setShowConnectOptions(true);
                        }
                      }}
                    >
                      <FaUserEdit />
                      <div className="ml-2">Edit</div>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/"
                      className="inline-block w-full p-3 transition ease-in border-b border-solid border-Grey/30 hover:shadow-lg"
                    >
                      All NFTs
                    </a>
                  </li> */}
                </ul>
              </a>
            </li>
            <li className="ml-5 xl:ml-10">
              <button
                onClick={() => {
                  if (!account) {
                    setShowConnectOptions(true);
                  } else {
                    setLoginNav(!loginNav);
                    logout();
                  }
                }}
                className="relative text-sm font-semibold group xl:text-base"
              >
                <span className="h-[72px] inline-flex items-center">
                  <WalletIcon />
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="relative hamburger-nav md:hidden">
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className="outline-none">
                  {open ? <CloseIcon /> : <HamburgerIcon />}
                </Popover.Button>
                <Transition
                  show={open}
                  className="fixed border-t border-solid border-Grey/40 top-[60px] w-full bg-white left-0"
                  enter="transition duration-300 ease-out"
                  enterFrom="transform translate-x-full opacity-0"
                  enterTo="transform translate-x-0 opacity-100"
                  leave="transition duration-300 ease-in"
                  leaveFrom="transform translate-x-0 opacity-100"
                  leaveTo="transform -translate-x-full opacity-0"
                >
                  <Popover.Panel>
                    <MobileMenu
                      clickWallet={() => {
                        setShowConnectOptions(true);
                      }}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      onKeyPress={(e) => handleKeypress(e)}
                    />
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>

        {showConnectOptions && (
          <Backdrop>
            <ConnectModal
              login={login}
              onDismiss={() => setShowConnectOptions(false)}
            />
          </Backdrop>
        )}
      </header>
    </>
  );
};

export default Header;
