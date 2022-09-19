import {$host} from "./index"

export const fetchMemorials = async () => {
    const {data} = await $host.get('api/memorial')
    return data
}

export const fetchOneMemorial = async (id) => {
    const {data} = await $host.get('api/memorial/' + id)
    return data
}