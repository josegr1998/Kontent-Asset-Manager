"use client";

import { useEffect, useState } from "react";
import { ASSETS_PER_PAGE } from "../../Assets.consts";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  numberOfAssets: number;
};

export const usePagination = ({ numberOfAssets }: Props) => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const [pagination, setPagination] = useState({
    currentPage: Number(searchParams.get("page")) || 1,
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

  useEffect(() => {
    router.push(`?page=${pagination.currentPage}`);
  }, [pagination.currentPage]);

  return {
    pagination,
    onPrevPage,
    onNextPage,
  };
};
