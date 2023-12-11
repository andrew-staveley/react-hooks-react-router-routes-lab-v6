import react from "react";
import NavBar from "../components/NavBar.js";

function ErrorPage() {
    return (
        <>
            <header>
                {<NavBar />}
            </header>
            <main>
                <h1>Oops! Looks like something went wrong.</h1>
            </main>
        </>
    )
}

export default ErrorPage;