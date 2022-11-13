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
                        <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>
                            Hi there, it&#39;s me <strong><a href="http://somanyu.tech" style={{ color: "var(--fontColor)" }}>Somanyu Samal</a></strong>.
                            Pursuing my majors in the field of Information Technology based in India.
                            I have practical knowledge on Full-stack Development where I am <strong><a href="https://drive.google.com/file/d/1GUMfNj1G4AyY0R4hmIT6Eya79VEDtL68/view?usp=share_link" target="_blank" style={{ color: "var(--fontColor)" }} rel="noreferrer">seeking new opportunities</a></strong> to learn something new.
                            I have done <strong><a href="https://github.com/Somanyu" target="_blank" style={{ color: "var(--fontColor)" }} rel="noreferrer">200+ commits</a></strong> to total <strong><a href="https://github.com/Somanyu?tab=repositories" target="_blank"style={{ color: "var(--fontColor)" }} rel="noreferrer">20+ repos</a></strong> in my GitHub. Did 2 internships on web development.
                            I am <strong><a href="mailto:somanyu.03samal@gmail.com" target="_blank" style={{ color: "var(--fontColor)" }} rel="noreferrer">open to collaborate</a></strong> on projects. <br /><br /> My passion lies in solving business problems with tailored data and algorithms and communicating complex ideas to non-technical stakeholders. I am able to jump across verticals to deliver high-performing solutions.
                        </h4>
                    </div>
                </div>
                <div class="row" style={{ marginTop: "23px" }}>
                    <div class="col-lg-8 offset-lg-2">
                        <h3 style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>Contact me.</h3>
                    </div>
                    <div class="col-lg-8 offset-lg-2">
                        <div>
                            <a href="https://www.linkedin.com/in/somanyusamal/">
                                <i class="grow fab fa-linkedin-in" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                            <a href="https://twitter.com/vadaa_pav">
                                <i class="grow fab fa-twitter" style={{ color: "var(--fontColor)", fontSize: "22px", marginLeft: "13px", marginRight: "13px" }}></i>
                            </a>
                            <a href="https://www.instagram.com/soooo.many/" style={{ marginRight: "13px" }}>
                                <i class="grow fab fa-instagram" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                            <a href="https://github.com/Somanyu" style={{ marginRight: "13px" }}>
                                <i class="grow fab fa-github" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                            <a href="mailto:somanyu.03samal@gmail.com">
                                <i class="grow far fa-envelope" style={{ color: "var(--fontColor)", fontSize: "22px" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}