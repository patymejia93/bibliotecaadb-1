export interface Usuario {
    content:          ContentUsuario[];
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

export interface ContentUsuario {
    sgdUsuarioId:     number;
    sgdUsuarioPrimerNombre: string;
 //   sgdUsuarioSegundoNombre: string;
    sgdUsuarioPrimerApellido: string;
 //   sgdUsuarioSegundoApellido: string;
    sgdCorreo: string;
    sgdUsuarioTelefono: string;
    sgdUsuarioUsuario: string;
    sgdUsuarioPassword: string;
    sgdRoles: ContentRol;
    sgdUsuarioActivo: string;
}

export interface ContentUsuarioCreate {
    sgdUsuarioId:     number;
    sgdUsuarioPrimerNombre: string;
  //  sgdUsuarioSegundoNombre: string;
    sgdUsuarioPrimerApellido: string;
 //   sgdUsuarioSegundoApellido: string;
    sgdCorreo: string;
    sgdUsuarioTelefono: string;
    sgdUsuarioUsuario: string;
    sgdUsuarioPassword: string;
    sgdRoles: ContentRol;
    sgdUsuarioActivo: string;
}

export interface ContentUsuarioDelete {
    sgdUsuarioId: number;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    unpaged:    boolean;
    paged:      boolean;
}

export interface ContentRol {
    sgdRolId:     number;
    sgdRolNombre: string;
    sgdRolActivo: string;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
