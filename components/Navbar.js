import Script from "next/script"
import Link from "next/link"
import styles from './Navbar.module.css'

export default function Navbar() {
    return (

        <nav class="navbar navbar-light navbar-expand-md py-3">
            <div class="container">
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3" style={{ background: "#fff" }}>
                    <span class="visually-hidden">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-3" class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'IBM Plex Sans', sans-serif"}}>Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'IBM Plex Sans', sans-serif"}}>Experience</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'IBM Plex Sans', sans-serif"}}>Dashboard</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'IBM Plex Sans', sans-serif"}}>Snippets</a>
                            </Link>
                        </li>

                    </ul>
                </div>
                <button class="btn" type="button" style={{ color: "rgb(255,255,255)" }}>
                    <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
                    <lord-icon
                        src="https://cdn.lordicon.com/spgozyor.json"
                        trigger="hover"
                        style={{ width: "70px", height: "70px" }}>
                    </lord-icon>
                </button>
            </div>
        </nav>

    )
}