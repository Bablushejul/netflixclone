import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";

import Movie from "./Movie";

const Row = ({ title, fetchURL,rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const sideLeft=()=>{
    var slider=document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft-500;
  }
  const sideRight=()=>{
    var slider=document.getElementById('slider'+rowId);
    slider.scrollLeft=slider.scrollLeft+500;
  }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={sideLeft}
          className="bg-white left-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"+rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight onClick={sideRight}
          className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
