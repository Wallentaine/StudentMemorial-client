import {$host} from "./index"

export const fetchCommentsById = async (id) => {
    const {data} = await $host.get('api/message/' + id)
    return data
}