"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export const usePagination = () => {
  const searchParams = useSearchParams();

  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const onNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPrevPage = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  useEffect(() => {
    router.push(`?page=${currentPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return {
    currentPage,
    onPrevPage,
    onNextPage,
  };
};
