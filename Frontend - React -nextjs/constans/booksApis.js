
/**
       * @description Urls Apis Backend core
       */
export default {
    auth:
    {
        /**
           * @description para autenticar al usuario
        */
       get_permisos: (idPerfil ='', rucEntidad = '') => `/administracion/recursos/${rucEntidad}/${idPerfil}`,
       /**
           * @description para autenticar al usuario
        */
        post_login: '/auth/login',
    },
    users:
    {
        get_users:() => `/v1/users`
    }
}

export const apisApp = {
    auth:
    {
        /**
           * @description permit handler
        */
        get_permisos: (idPerfil = '', rucEntidad = '') => `/adm_permisos/${idPerfil}/${rucEntidad}/admin`,
        /**
           * @description handler auth user
        */
        post_login: '/auth/login' 
    }

}