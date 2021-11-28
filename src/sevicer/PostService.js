import Service from "./Service";

const resource = '/posts'
export default {
    getPost(){
        return Service.get(`${resource}`)
    },
    getById(id){
        return Service.get(`${resource}/${id}`)
    },
    delete(id){
        return Service.delete(`${resource}/${id}`)
    },
    edit(id,payload){
        return Service.put(`${resource}/${id}`,payload)
    },
    create(payload){
        return Service.post(payload)
    }
}
