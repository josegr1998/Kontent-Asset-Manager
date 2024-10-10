import { Asset } from "@/app/types/ui/Asset";
import { ASSETS_PER_PAGE } from "./AssetsListing.consts";

type Props = {
  assets: Asset[];
  currentPage: number;
};
export const filterAssetsList = ({ assets, currentPage }: Props) => {
  const displayAssets = assets.slice(
    currentPage * ASSETS_PER_PAGE,
    ASSETS_PER_PAGE * (currentPage + 1)
  );

  return displayAssets;
};
