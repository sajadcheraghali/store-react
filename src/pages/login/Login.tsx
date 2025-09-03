import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useLoginContext } from "../../context/loginContext/loginContext";
import { Link } from "react-router-dom";


function Login() {

    const { handleLogin } = useLoginContext();

    return (
        <Container>
            <div className="flex bg-violet-400 shadow rounded-2xl flex-col gap-4 p-8 m-auto mt-20 w-96 h-90 justify-space-around justify-center">
                <input className="border rounded-4xl text-center h-15" type="text" placeholder="username" />
                <input className="border rounded-4xl text-center h-15" type="password" placeholder="password" />
                <Link to="/">
                    <Button className="rounded-4xl w-full" onClick={handleLogin} variant="primary">Login</Button>
                </Link>
            </div>
        </Container >
    )
}

export default Login