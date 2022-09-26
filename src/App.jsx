import './styles/app.css'
import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import {observer} from "mobx-react-lite"
import {useContext, useEffect, useState} from "react"
import {Context} from "./index"
import {check} from "./http/userAPI"
import Spinner from "./components/UI/loaders/Spinner"

const App = observer(() => {

    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then((data) => {
            if (data) {
                user.setUser(data)
                user.setIsAuth(true)
            }
        }).finally(() => setLoading(false))
    }, [user])

    if (loading)
        return <div className="loader"><Spinner/></div>

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Content/>
            </BrowserRouter>
        </div>
    )
})

export default App
