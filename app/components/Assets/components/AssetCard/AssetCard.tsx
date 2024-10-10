import { Asset } from "@/app/types/ui/Asset";
import React from "react";
import { copyToClipboard } from "./AssetCard.utils";
import Link from "next/link";

type Props = Asset;

export const AssetCard = ({ fileName, id, size, url }: Props) => (
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
);
