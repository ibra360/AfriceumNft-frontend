import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import NFTItem from "../components/NFTItem";
import FilterIcon from "../components/SVGIcon/FilterIcon";
import LeftArrowIcon from "../components/SVGIcon/LeftArrowIcon";
import Sidebar from "../components/SideBar";
import TopFilter from "../components/TopFilter";

import useItems from "../hooks/useItems";
import { classNames } from "../utils/styles";

const Explore = () => {
  const [isShowing, setIsShowing] = useState(true);
  const [showFilter, setShowFilter] = useState(false);

  const [activeView, setActiveView] = useState("grid");
  const handleActiveView = (view) => {
    setActiveView(view);
  };

  // const handleMobileFilter = () => {
  //   setShowFilter(true);
  // }

  const [layout, setLayout] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);
  const [group3, setGroup3] = useState(false);

  const [filterNow, setFilterNow] = useState(false);

  const [filterAuction, setFilterAuction] = useState(false);

  const [filterSold, setFilterSold] = useState(false);

  const [filterGenesis, setFilterGenesis] = useState(false);

  const [filterOffers, setFilterOffers] = useState(false);

  const [fetchParams, setFetchParams] = useState({
    sortBy: "createdAt",
    sortDir: "desc",
    page: 0,
    perPage: 24,
  });

  const { items, hasMore } = useItems(fetchParams);

  const handleSortBy = (value) => {
    if (value == "0") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "createdAt",
        sortDir: "desc",
        page: 0,
      }));
    } else if (value == "1") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "createdAt",
        sortDir: "asc",
        page: 0,
      }));
    } else if (value == "2") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "price",
        sortDir: "desc",
        page: 0,
      }));
    } else if (value == "3") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "price",
        sortDir: "desc",
        page: 0,
      }));
    } else if (value == "4") {
      setFetchParams((prev) => ({
        ...prev,
        sortBy: "views",
        sortDir: "desc",
        page: 0,
      }));
    }
  };

  const handleFilter = (type,position) => {
    console.log('handleFilter:',type,position)
    if(type === 0){
      if (position === 1) {
        setFilterNow(!filterNow);
        setFetchParams((prev) => ({
          ...prev,
          buynow: !filterNow,
        }));
      } else if (position === 2) {
        setFilterAuction(!filterAuction);
        setFetchParams((prev) => ({
          ...prev,
          auctionable: !filterAuction,
        }));
      } else if (position === 3) {
        setFilterSold(!filterSold);
        setFetchParams((prev) => ({
          ...prev,
          isSold: !filterSold,
        }));
      }
    }

  };

  const priceFilterHandle =(asset,from, to)=> {
    console.log('priceHandle',asset,from,to)
    
  }

  const handleLoadMore = () => {
    setFetchParams((prev) => ({
      ...prev,
      page: (prev?.page || 0) + 1,
    }));
  };

  return (
    <div className="App">
      <div className="flex assets-page-wrapper pt-[60px] md:pt-[72px]">
        <div
          className={`side-bar ${
            showFilter ? "show-mobile-filter" : ""
          } w-full sm:w-auto fixed z-10 bg-white transform -translate-x-full lg:translate-x-0 lg:block lg:sticky top-[72px] self-start h-[calc(100vh-72px)] overflow-hidden border-r border-solid border-Grey/20`}
        >
          <button
            className={`hidden lg:flex items-center justify-between w-full p-4 border-b border-solid border-Grey/20 transition ease-in hover:shadow-md ${
              isShowing ? "a" : "b"
            }`}
            onClick={() => setIsShowing((isShowing) => !isShowing)}
          >
            <p
              className={`flex items-center text-base font-semibold text-Dark ${
                isShowing ? "" : "hidden"
              }`}
            >
              <FilterIcon />
              Filter
            </p>
            <p
              className={`icon transition ease-in ${
                isShowing ? "" : "rotate-180"
              }`}
            >
              <LeftArrowIcon />
            </p>
          </button>
          <div className="flex items-center justify-between p-4 border-b border-solid mobile-filter-head lg:hidden border-Grey/20">
            <button className="text-base font-semibold clear-filter text-Blue">
              Clear All
            </button>
            <button
              onClick={() => setShowFilter((showFilter) => !showFilter)}
              className="text-base font-semibold clear-filter text-Blue"
            >
              Done
            </button>
          </div>
          <Transition
            className="transition-left-panel w-full sm:w-[340px]"
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 translate-x-0"
            enterTo="opacity-100"
            leave="transform transition duration-[400ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 -translate-x-full"
          >
            <Sidebar  handleFilter={handleFilter} handlePrice={priceFilterHandle}/>
          </Transition>
        </div>
        <div className="flex-1 px-4 pb-16 main-area lg:px-7">
          <div
            className={classNames(
              "flex items-center justify-between py-4 top-filter lg:py-8 xl:py-10",
              showFilter && "hidden sm:flex"
            )}
          >
            <div className="hidden text-base total-count text-Dark md:block">
              {items?.length} items
            </div>
            <TopFilter
              handleActiveView={handleActiveView}
              activeView={activeView}
              handleShortBy={handleSortBy}
            />
          </div>
          <div
            className={`grid gap-4 ${isShowing ? "" : "sidebar-hidden"} ${
              activeView === "list"
                ? "grid-cols-6 list-view"
                : "grid-cols-3 grid-view"
            }`}
          >
            {items.map((item, index) => (
              <NFTItem postDetails={item} key={item.id} index={index} />
            ))}
          </div>

          {hasMore && (
            <div className="flex items-center justify-center w-full">
              <button
                className="px-6 py-2 mt-6 mb-24 font-bold bg-gray-300 border border-gray-800 rounded-3xl"
                onClick={() => {
                  handleLoadMore();
                }}
              >
                Load More
              </button>
            </div>
          )}
          <div className="fixed left-0 right-0 m-auto text-center mobile-filter-btn lg:hidden bottom-4">
            <button
              onClick={() => setShowFilter((showFilter) => !showFilter)}
              className="h-[45px] w-full max-w-xs m-auto flex items-center justify-center bg-Blue text-white font-semibold rounded-3xl shadow-lg"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
