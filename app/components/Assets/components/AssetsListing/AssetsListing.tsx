"use client";

import { Asset } from "@/app/types/ui/Asset";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "../Pagination/Pagination";
import { AssetCard } from "../AssetCard/AssetCard";
import { usePagination } from "../Pagination/Pagination.hooks";

type Props = {
  assets: Asset[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const AssetsListing = ({ assets, hasNextPage, hasPrevPage }: Props) => {
  const numberOfAssets = assets.length;

  const { onNextPage, onPrevPage, pagination } = usePagination({
    numberOfAssets: numberOfAssets,
  });

  return (
    <>
      <div className="flex justify-between w-full">
        <h2 className="text-2xl">Images</h2>
        <h3 className="text-xl font-bold">
          Page {pagination.currentPage} of 23
        </h3>
      </div>
      {assets.map((asset) => (
        <AssetCard {...asset} key={asset.id} />
      ))}
      <Pagination
        isNextPage={hasNextPage}
        isPrevPage={hasPrevPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
      <ToastContainer />
    </>
  );
};
