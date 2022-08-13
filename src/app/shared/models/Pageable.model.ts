import {Servidor} from "../../pages/servidores/shared/servidor.model";

export class Page<T> {
  content!: T[];
  pageable!: Pageable;
  last!: boolean;
  totalPages!: number;
  totalElements!: number;
  size!: number;
  number!: number;
  sort!: Sort;
  first!: boolean;
  numberOfElements!: number;
  empty!: boolean
}
interface Sort {
  empty: boolean;
  sorted: boolean,
  unsorted: boolean
}
interface Pageable {
  sort: Sort,
  offset: number,
  pageSize: number,
  pageNumber: number,
  unpaged: false,
  paged: true
}
