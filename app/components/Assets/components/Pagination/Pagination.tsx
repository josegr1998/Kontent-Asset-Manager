import React from "react";

type Props = {
  isPrevPage: boolean;
  isNextPage: boolean;
  onPrevPage: () => void;
  onNextPage: () => void;
};

export const Pagination = ({
  isNextPage,
  isPrevPage,
  onNextPage,
  onPrevPage,
}: Props) => {
  return (
    <div className="flex justify-center gap-x-4 w-full">
      {isPrevPage ? (
        <button
          className="bg-white text-black p-4 mx-auto rounded-md"
          onClick={onPrevPage}
        >
          Previous Page
        </button>
      ) : null}
      {isNextPage ? (
        <button
          className="bg-white text-black p-4 mx-auto rounded-md"
          onClick={onNextPage}
        >
          Next Page
        </button>
      ) : null}
    </div>
  );
};
