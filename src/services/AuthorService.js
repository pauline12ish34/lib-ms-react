import http from '../http-common'



const getAll=()=>{
return http.get("/authors")
};


const get=(id)=>{
    return http.get(`/authors/${id}`)
    };


const create=(data)=>{
    console.log("these are the data from service",data)
    return http.post("/authors",data)
    };

const update=(id,data)=>{
        return http.put(`/authors/${id}`,data)
        };
const remove=(id)=>{
        return http.delete(`/authors/${id}`)
            };

            const AuthorsService={
                getAll,
                get,
                create,
                update,remove
            };
            export default AuthorsService;