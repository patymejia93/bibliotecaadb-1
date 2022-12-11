export interface Rol {
    content:          ContentRol[];
    pageable:         Pageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface ContentRol {
    sgdRolId:     number;
    sgdRolNombre: string;
    sgdRolActivo: string;
}
export interface ContentRolCreate {
    sgdRolNombre: string;
    sgdRolActivo: string;
}

export interface ContentRolDelete {
    sgdRolId: number;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
