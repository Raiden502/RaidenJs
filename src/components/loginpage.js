import Login from "../sections/login/login.js"

export default function LoginPage() {
    const component = Login()
    return (
        `<>
        ${<Login></Login>}
        </>`
    )
}