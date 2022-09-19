
/**
       * @description Urls Apis Backend core
       */
export default {
    users:
    {
        get_users:() => `/v1/users`,
        get_user:(id='') => `/v1/users/${id}`,
        post_addUser:() => `/v1/users`,
        put_editUser:(id='') => `/v1/users/${id}`,
        delete_User: (id = '') => `/v1/users/${id}`,


    },
    auth:
    {
       
       /**
           * @description para autenticar al usuario
        */
        post_login: '/auth/login',
    }
    
}

export const apisApp = {
    auth:
    {
        /**
           * @description permit handler
        */
        get_info_user: '/auth/info',
        /**
           * @description handler auth user
        */
        post_login: '/auth/login' 
    }

}