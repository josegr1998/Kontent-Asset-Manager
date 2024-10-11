import { AssetsListing } from "./components/AssetsListing/AssetsListing";
import { Asset } from "@/app/types/ui/Asset";
import { NetworkResponse } from "@/app/network/types/NetworkResponse";
import { headers } from "next/headers";

export const Assets = async ({ page }: { page?: string }) => {
  const headersList = headers();
  const host = headersList.get("host");

  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;
  const response = await fetch(`${baseUrl}/api/assets?page=${page || "1"}`, {
    next: { revalidate: 3600 },
  });

  const { data, error, hasNextPage, hasPrevPage } =
    (await response.json()) as NetworkResponse<Asset[]>;

  if (error) return <div>Error getting assets</div>;
  if (!data?.length) return <div>No assets found!</div>;

  return (
    <>
      <AssetsListing
        assets={data}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
      />
    </>
  );
};
