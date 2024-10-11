import { client } from "@/app/clients/managmentClient";
import { KontentAsset } from "@/app/types/kontent/Asset";
import { Asset } from "@/app/types/ui/Asset";

type Response = {
  data: {
    items: KontentAsset[];
    pagination: {
      continuationToken?: string;
    };
  };
};

const mapAsset = (asset: KontentAsset): Asset => ({
  ...asset,
  size: `${(asset.size / (1024 * 1024)).toFixed(2)} mb`,
});

export const fetchAllAssets = async (page: number) => {
  let allAssets: Response["data"]["items"] = [];
  let continuationToken: string | undefined = undefined;

  do {
    const response = (await client
      .listAssets()
      .xContinuationToken(continuationToken || "")
      .toPromise()) as Response;

    allAssets = [...allAssets, ...response.data.items];

    continuationToken = response.data.pagination.continuationToken;
  } while (continuationToken);

  const assets = allAssets
    .sort((a, b) => b.size - a.size)
    .map((asset) => JSON.parse(JSON.stringify(mapAsset(asset))) as Asset);

  return assets;
};
