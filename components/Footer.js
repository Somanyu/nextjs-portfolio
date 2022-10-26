import Script from "next/script"
import Link from "next/link";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Footer() {
    const { data } = useSWR('/api/now-playing', fetcher);

    return (
        <footer>
            <div class="container py-4 py-lg-5">

                <div class="row">
                    <div class="col-lg-8 offset-lg-2 d-flex justify-center align-items-center justify-sm-center align-items-sm-center justify-md-center align-items-md-center" style={{ paddingBottom: "14px", borderTop: "0.4px solid " }}>
                        <div class="d-flex align-items-center" style={{ paddingTop: "1rem" }}><i class="fab fa-spotify" style={{ color: "#009e60", fontSize: "19px" }}></i>
                            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)", marginBottom: "0px", marginLeft: "14px", fontWeight: "bold", marginRight: "-2px" }}>{data?.isPlaying ? data.title : 'Not Listening'}</p>
                            <p style={{ fontFamily: "'IBM Plex Sans', sans-serif", fontStyle: "italic", color: "var(--fontParaColor)", marginBottom: "0px", marginLeft: "10px", marginRight: "5px" }}>{data?.isPlaying ? data.artist : 'Spotify'}</p>
                            <Script src="https://cdn.lordicon.com/pzdvqjsp.js"></Script>
                            <lord-icon
                                src="https://cdn.lordicon.com/pmkcstki.json"
                                trigger="loop"
                                delay="1000"
                                colors="primary:#009e60"
                                style={{ width: "40px", height: "40px" }}>
                            </lord-icon>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    {/* <hr style={{ background: "var(--fontColor)" }} /> */}
                    <div class="col-sm-4 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column item">
                        <ul class="list-unstyled">
                            <li>
                                <Link href="/">
                                    <a class="link" style={{ color: "var(--link)", textDecoration: "none", fontFamily: "'IBM Plex Sans', sans-serif" }}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a class="link" style={{ color: "var(--link)", textDecoration: "none", fontFamily: "'IBM Plex Sans', sans-serif" }}>About</a>
                                </Link>
                            </li>
                            <li><a class="link" href="#" style={{ color: "var(--link)", textDecoration: "none", fontFamily: "'IBM Plex Sans', sans-serif" }}>Snippets</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 col-lg-3 text-center text-lg-start d-flex flex-column item">
                        <ul class="list-unstyled">
                            <li><a class="link" href="https://twitter.com/vadaa_pav" style={{ textDecoration: "none", color: "var(--link)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Twitter</a></li>
                            <li><a class="link" href="https://www.linkedin.com/in/somanyusamal/" style={{ textDecoration: "none", color: "var(--link)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Linkedin</a></li>
                            <li><a class="link" href="https://www.instagram.com/soooo.many/" style={{ textDecoration: "none", color: "var(--link)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Instagram</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 text-center text-lg-start d-flex flex-column align-items-center order-first justify-content-lg-center align-items-lg-center order-lg-last item social">
                        <a class="btn resume" role="button" target="_blank" style={{ fontFamily: "'IBM Plex Sans', sans-serif", border: "2px solid var(--fontColor)", color: "var(--fontColor)", margin: "3px" }}>Résumé</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}