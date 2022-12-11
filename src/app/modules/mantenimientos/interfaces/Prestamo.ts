export interface Prestamo {
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

export interface ContentPrestamo {
    gstPrestamoId:     number;
    gstPrestamoFechaInicial: string;
    gstPrestamoFechaFinal: string;
    sgdUsuario: ContentUsuario;
    ctgMaterialEscrito: ContentMaterialEscrito;
    gstPrestamoMora: number;
    ctgEstadoPrestamo: ContentEstadoPrestamo;
    ctgMaterialAudiovisual: ContentMaterialAudiovisual;
    
}

export interface ContentPrestamoCreate {
    sgdUsuario: ContentUsuario;
    ctgMaterialEscrito: ContentMaterialEscrito;
    gstPrestamoMora: number;
    ctgEstadoPrestamo: ContentEstadoPrestamo;
    
}

export interface ContentEstadoPrestamo {
    ctgEstadoPrestamoId:     number;
    ctgEstadoPrestamoEstado: string;
    ctgEstadoPrestamoActivo: string;
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

export interface ContentUsuario {
    sgdUsuarioId:     number;
    sgdUsuarioPrimerNombre: string;
    sgdUsuarioPrimerApellido: string;
    sgdCorreo: string;
    sgdUsuarioTelefono: string;
    sgdUsuarioUsuario: string;
    sgdUsuarioPassword: string;
    sgdRoles: ContentRol;
    sgdUsuarioActivo: string;
}

export interface ContentRol {
    sgdRolId:     number;
    sgdRolNombre: string;
    sgdRolActivo: string;
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
