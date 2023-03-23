import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { comicsSelector, getComics } from "@/store/comics";

import CardComics from "@/components/CardComics";
import Loading from "@/components/Loading";

import { scrollToTopAnimated } from "@/utils/scrollToTopAnimated";

import { ContainerHome } from "./styles";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  const { comics, isLoading } = useSelector(comicsSelector);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = comics.slice(startIndex, endIndex);
  const totalItems = comics.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    scrollToTopAnimated();
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    scrollToTopAnimated();
    setCurrentPage(currentPage + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ContainerHome>
      {currentItems.map((item) => (
        <CardComics item={item} key={item.id} />
      ))}

      <div>
        {currentPage > 1 && <button onClick={handlePrev}>Anterior</button>}

        {currentPage < totalPages && (
          <button onClick={handleNext}>Próxima</button>
        )}
      </div>
    </ContainerHome>
  );
}
