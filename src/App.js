import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./App.css";
import Navbar from "./components/Navbar";
import VideoCards from "./components/VideoCards";
import useDebounce from "./customhooks/useDebounce";

function App() {
  const [loading, setloading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    async function fetchPost() {
      setloading(true);
      const response = await fetch(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${debouncedSearchValue}=&numResults=10`
      );
      const data = await response.json();
      setSearchResults(data);
      setloading(false);
    }
    fetchPost();
  }, [debouncedSearchValue]);

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchResults === [] || searchValue === "" ? (
        <div className="flex justify-center my-64 lg:my-72">
          <h1 className="text-white text-lg font-thin md:text-2xl lg:text-3xl">
            Search Your Desired Videos by Typing in the Above Search Bar
          </h1>
        </div>
      ) : loading ? (
        <div className="flex justify-center my-60">
          <ClipLoader size={80} color="#FD413C" />
        </div>
      ) : (
        <VideoCards results={searchResults.results} />
      )}
    </>
  );
}

export default App;
