export interface MaterialEscrito {
    content:          ContentMaterialEscrito[];
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

export interface ContentMaterialEscrito {
    ctgMaterialEscritoId:     number;
    ctgMaterialEscritoCorrelativo: string;
    ctgMaterialEscritoTitulo: string;
    ctgMaterialEscritoAutor: string;
    ctgMaterialEscritoNumeroPaginas: number;
    ctgMaterialEscritoEditorial: string;
    ctgMaterialEscritoIsbn: string;
    ctgMaterialEscritoAnioPublicacion: number;
    ctgMaterialEscritoUnidadesDisponibles: number;
    ctgTipoArticulo : ContentTipoArt;
    ctgMaterialEscritoPeriodicidad: string;
    ctgMaterialEscritoFechaPublicacion: string;
    ctgMaterialEscritoTema: string;
    ctgMaterialEscritoIdioma: string;
    ctgMaterialEscritoInformacionAdicional: string;

}

export interface ContentTipoArt {
    ctgTipoArticuloId: number;
    ctgTipoarticuloDescripcion: string;
    ctgTIpoArticuloActivo: string;
}

export interface ContentMaterialEscritoCreate {
    ctgMaterialEscritoTitulo: string;
    ctgMaterialEscritoAutor: string;
    ctgMaterialEscritoNumeroPaginas: number;
    ctgMaterialEscritoEditorial: string;
    ctgMaterialEscritoIsbn: string;
    ctgMaterialEscritoAnioPublicacion: number;
    ctgMaterialEscritoUnidadesDisponibles: number;
    ctgTipoArticulo : ContentTipoArt;
    ctgMaterialEscritoPeriodicidad: string;
    ctgMaterialEscritoFechaPublicacion: string;
    ctgMaterialEscritoTema: string;
    ctgMaterialEscritoIdioma: string;
    ctgMaterialEscritoInformacionAdicional: string;
}

export interface ContentMaterialEscritoDelete {
    ctgMaterialEscritoCorrelativo: number;
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
