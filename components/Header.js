import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };
  return (
    <header className="sticky top:0 z-50 bg-white grid grid-cols-3 shadow-md p-5 md:px-10">
      {/* left */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => {
          router.push("/");
        }}
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex flex-row items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder={placeholder ? placeholder : "Start you search"}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className=" flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Becoma a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex bg-white shadow-md border-2 p-2 rounded-full items-center space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold ">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => {
                setNumberOfGuests(e.target.value);
              }}
              min={1}
              type="number"
              className="w-12 pl-2 outline-none text-lg text-red-400"
            />
          </div>
          <div className="flex ">
            <button
              className="flex-grow text-gray-500"
              onClick={() => {
                setSearchInput("");
              }}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-400"
              onClick={() => {
                search();
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
