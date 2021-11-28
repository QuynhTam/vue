import PostService from "./PostService";

const service = {
    post: PostService
}

export default {
    get: name => service[name]

}
