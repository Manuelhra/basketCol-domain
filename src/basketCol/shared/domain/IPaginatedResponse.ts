export type IPaginationParams = {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  firstPage: number;
  lastPage: number;
};

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: IPaginationParams;
}
