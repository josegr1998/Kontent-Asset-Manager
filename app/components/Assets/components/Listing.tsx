"use client";

import { Asset } from "@/app/types/ui/Asset";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  assets: Asset[];
};

const ASSETS_PER_PAGE = 10;

export const Listing = ({ assets }: Props) => {
  const [pagination, setPagination] = useState({
    currentPage: 0,
    isNextPage: true,
    isPrevPage: false,
  });

  const numberOfAssets = assets.length;

  const displayAssets = assets.slice(
    pagination.currentPage * ASSETS_PER_PAGE,
    ASSETS_PER_PAGE * (pagination.currentPage + 1)
  );

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        // Show success toast
        toast.success("Text copied to clipboard!");
      },
      (err) => {
        // Show error toast
        toast.error("Failed to copy text!");
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <>
      <div className="flex justify-between w-full">
        <h2 className="text-2xl">Images</h2>
        <h3 className="text-xl font-bold">
          Page {pagination.currentPage + 1} of 23
        </h3>
      </div>
      {displayAssets.map(({ fileName, size, url, id }) => (
        <div
          key={id}
          className="bg-gray-200 text-black rounded-md p-4 min-w-[400px] w-3/4 mx-auto overflow-scroll"
        >
          <div>
            {" "}
            <span className="font-bold">name :</span>{" "}
            <button
              className="cursor-pointer"
              title="Copy to clipboard"
              onClick={() => copyToClipboard(fileName)}
            >
              {fileName}
            </button>
          </div>
          <div>
            <span className="font-bold">url : </span>
            <Link href={url} target="_blank" className="text-blue-500">
              {url}
            </Link>
          </div>
          <div>
            <span className="font-bold">size : </span>
            {size}
          </div>
        </div>
      ))}
      <div className="flex justify-center gap-x-4 w-full">
        {pagination.isPrevPage ? (
          <button
            className="bg-white text-black p-4 mx-auto rounded-md"
            onClick={onPrevPage}
          >
            Previous Page
          </button>
        ) : null}
        {pagination.isNextPage ? (
          <button
            className="bg-white text-black p-4 mx-auto rounded-md"
            onClick={onNextPage}
          >
            Next Page
          </button>
        ) : null}
      </div>
      <ToastContainer />
    </>
  );
};
