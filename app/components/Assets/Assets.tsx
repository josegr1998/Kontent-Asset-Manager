import React from "react";
import { fetchAllAssets } from "./Assets.utils";
import { Listing } from "./components/Listing";

export const Assets = async () => {
  const assets = await fetchAllAssets();

  return (
    <>
      <Listing assets={assets} />
    </>
  );
};
