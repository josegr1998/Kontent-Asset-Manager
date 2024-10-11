export type PaginationResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export type NetworkResponse<T> = {
  data?: T;
  error?: Error;
} & PaginationResponse;
