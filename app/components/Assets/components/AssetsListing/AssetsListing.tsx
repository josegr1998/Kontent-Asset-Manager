"use client";

import { Asset } from "@/app/types/ui/Asset";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination } from "../Pagination/Pagination";
import { usePagination } from "./AssetsListing.hooks";
import { filterAssetsList } from "./AssetsListing.utils";
import { AssetCard } from "../AssetCard/AssetCard";

type Props = {
  assets: Asset[];
};

export const AssetsListing = ({ assets }: Props) => {
  const numberOfAssets = assets.length;

  const { onNextPage, onPrevPage, pagination } = usePagination({
    numberOfAssets: numberOfAssets,
  });

  const displayAssets = filterAssetsList({
    assets,
    currentPage: pagination.currentPage,
  });

  return (
    <>
      <div className="flex justify-between w-full">
        <h2 className="text-2xl">Images</h2>
        <h3 className="text-xl font-bold">
          Page {pagination.currentPage + 1} of 23
        </h3>
      </div>
      {displayAssets.map((asset) => (
        <AssetCard {...asset} key={asset.id} />
      ))}
      <Pagination
        isNextPage={pagination.isNextPage}
        isPrevPage={pagination.isPrevPage}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
      <ToastContainer />
    </>
  );
};
