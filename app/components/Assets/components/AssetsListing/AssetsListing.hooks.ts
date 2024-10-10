"use client";

import { useState } from "react";
import { ASSETS_PER_PAGE } from "./AssetsListing.consts";

type Props = {
  numberOfAssets: number;
};

export const usePagination = ({ numberOfAssets }: Props) => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    isNextPage: true,
    isPrevPage: false,
  });

  const onNextPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
      isPrevPage: true,
      isNextPage: ASSETS_PER_PAGE * pagination.currentPage <= numberOfAssets,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPrevPage = () => {
    setPagination((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage - 1,
      isPrevPage: prevState.currentPage - 1 > 0,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    pagination,
    onPrevPage,
    onNextPage,
  };
};
