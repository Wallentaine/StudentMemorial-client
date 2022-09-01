import {makeAutoObservable} from "mobx"

export default class MemorialStore {
    constructor() {
        this._memorials = []

        makeAutoObservable(this)
    }

    setMemorials(memorials) {
        this._memorials = memorials
    }

    get memorials() {
        return this._memorials
    }

}