import React from "react";
import { fetchAllAssets } from "./Assets.utils";
import { AssetsListing } from "./components/AssetsListing/AssetsListing";

export const Assets = async () => {
  const assets = await fetchAllAssets();

  return (
    <>
      <AssetsListing assets={assets} />
    </>
  );
};
