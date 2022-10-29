import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function About() {
    return (
        <div>
            <Navbar />

            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <h1 class="display-3 fw-bold" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>About me.</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>Hi there, it&#39;s me <strong><a href="http://somanyu.tech" style={{color: "var(--fontColor)"}}>Somanyu Samal</a></strong>. Pursuing my majors in the field of <strong>Information Technology</strong> based in India. I have practical knowledge on Full-stack Development where I am <strong><a href="www.google.com" style={{color: "var(--fontColor)"}}>seeking new opportunities</a></strong>. I have done 230 commits to my GitHub account. Did 2 internships on web development. I am open to collaborate on projects. </h4>
                    </div>
                </div>
                <div class="row" style={{ marginTop: "23px" }}>
                    <div class="col-lg-8 offset-lg-2">
                        <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>Contact me.</h3>
                    </div>
                    <div class="col-lg-8 offset-lg-2">
                        <div>
                            <a href="#">
                                <i class="fab fa-linkedin-in" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-twitter" style={{ color: "var(--fontColor)", fontSize: "22px", marginLeft: "13px", marginRight: "13px" }}></i>
                            </a>
                            <a href="#" style={{ marginRight: "13px" }}>
                                <i class="fab fa-github" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                            <a href="#">
                                <i class="far fa-envelope" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}