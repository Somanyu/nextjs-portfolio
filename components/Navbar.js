import Script from "next/script"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function Navbar() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (

        <nav class="navbar navbar-light navbar-expand-md py-3" style={{ marginTop: "-10px" }}>
            <div class="container">
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-3" style={{ background: "#fff" }}>
                    <span class="visually-hidden">Toggle navigation</span>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-3" class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link href="/">
                                <a class="nav-link" style={{ color: "var(--fontParaColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Home</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="/experience">
                                <a class="nav-link" style={{ color: "var(--fontParaColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Experience</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "var(--fontParaColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Dashboard</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link href="#">
                                <a class="nav-link" style={{ color: "var(--fontParaColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Snippets</a>
                            </Link>
                        </li>

                    </ul>
                </div>
                <button type="button" class="btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
                    {mounted && (
                        <div>
                            {theme === "dark" ? (
                                <lord-icon
                                    src="https://cdn.lordicon.com/spgozyor.json"
                                    trigger="loop"
                                    delay="1200"
                                    style={{ width: "70px", height: "70px" }}>
                                </lord-icon>
                            ) : (
                                <lord-icon
                                    src="https://cdn.lordicon.com/qmbxvtja.json"
                                    trigger="loop"
                                    delay="1500"
                                    style={{ width: "70px", height: "70px" }}>
                                </lord-icon>
                            )}
                        </div>
                    )}
                </button>
            </div>
        </nav>

    )
}