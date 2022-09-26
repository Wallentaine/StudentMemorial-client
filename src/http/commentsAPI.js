import {$authHost, $host} from "./index"

export const fetchCommentsById = async (id) => {
    const {data} = await $host.get('api/message/' + id)
    return data
}

export const createNewComment = async (userId, memorialId, message) => {
    const {data} = await $authHost.post('api/message/', {userId, memorialId, message})
    return data
}