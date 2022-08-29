import './styles/app.css'
import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import {observer} from "mobx-react-lite"
import {useContext, useEffect} from "react"
import {Context} from "./index"
import {check} from "./http/userAPI"

const App = observer(() => {

    const {user} = useContext(Context)

    useEffect(() => {
        check().then((data) => {
            if (data) {
                user.setUser(true)
                user.setIsAuth(true)
            }
        }).finally()
    }, [user])

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
