export interface MaterialAudiovisual {
    content:          ContentMaterialAudiovisual[];
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

export interface ContentMaterialAudiovisual {
    ctgMaterialAudiovisualId:     number;
    ctgMaterialAudiovisualCorrelativo: string;
    ctgMaterialAudiovisualTitulo: string;
    ctgMaterialAudiovisualDirector: string;
    ctgMaterialAudiovisualDuracion: string;
    ctgMaterialAudiovisualGenero: string;
    ctgMaterialAudiovisualIsbn: string;
    ctgMaterialAudiovisualAutor: string;
    ctgMaterialAudiovisualUnidadesDisponibles: number;
    ctgTipoArticulo : ContentTipoArt;
    ctgMaterialAudiovisualIdioma: string;
}

export interface ContentTipoArt {
    ctgTipoArticuloId: number;
    ctgTipoarticuloDescripcion: string;
    ctgTIpoArticuloActivo: string;
}

export interface ContentMaterialAudiovisualCreate {
    ctgMaterialAudiovisualCorrelativo: string;
    ctgMaterialAudiovisualTitulo: string;
    ctgMaterialAudiovisualDirector: string;
    ctgMaterialAudiovisualDuracion: string;
    ctgMaterialAudiovisualGenero: string;
    ctgMaterialAudiovisualIsbn: string;
    ctgMaterialAudiovisualAutor: string;
    ctgMaterialAudiovisualUnidadesDisponibles: number;
    ctgTipoArticulo : ContentTipoArt;
    ctgMaterialAudiovisualIdioma: string;
}

export interface ContentMaterialAudiovisualDelete {
    ctgMaterialAudiovisualCorrelativo: number;
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
