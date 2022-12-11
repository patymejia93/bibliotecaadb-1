export interface LimitePrestamos {
    content:          ContentLimitePrestamos[];
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

export interface ContentLimitePrestamos {
    sgdLimitePrestamosId:     number;
    sgdLimitePrestamosNombre: string;
    sgdLimitePrestamosActivo: string;
}
export interface ContentLimitePrestamosCreate {
    sgdLimitePrestamosNombre: string;
    sgdLimitePrestamosActivo: string;
}

export interface ContentLimitePrestamosDelete {
    sgdLimitePrestamosId: number;
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
