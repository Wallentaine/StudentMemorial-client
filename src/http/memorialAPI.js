import {$authHost, $host} from "./index"

export const fetchMemorials = async () => {
    const {data} = await $host.get('api/memorial')
    return data
}

export const searchMemorials = async (desired) => {
    const {data} = await $host.get(`api/memorial/search/` + desired)
    return data
}

export const fetchOneMemorial = async (id) => {
    const {data} = await $host.get('api/memorial/' + id)
    return data
}

export const fetchMemorialByUserId = async (userId) => {
    const {data} = await $authHost.get('api/memorial/user/' + userId)
    return data
}

export const createMemorial = async (userId, name, date, description, form) => {
    const {data} = await $authHost.post('api/memorial/', {userId, name, date, description, form})
    return data
}