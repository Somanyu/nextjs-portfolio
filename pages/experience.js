import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Head from "next/head";

export default function Experience() {
    return (
        <div>
            <Head>
                <title>Somanyu Samal</title>
                <meta name="description" content="My portfolio built with Next.js, Bootstrap and Vercel 💡" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <h1 class="display-5" style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Experience</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <section class="py-5">
                            <ul class="timeline">
                                <li class="timeline-item mb-5">
                                    <h5 class="fw-bold" style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Rabvik Innovations</h5>
                                    <p class="text-muted mb-2 fw-bold" style={{ color: "var(--fontSubColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Jan 2022 - Apr 2022</p>
                                    <p class="text-muted" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                        - Responsible for developing front-end of a blog website entirely using Reactjs. <br />
                                        - Facilitated customization and improvement in overall user interface and experience. <br />
                                        - Developed the back-end code for complex financial caluclation from scratch. <br />
                                    </p>
                                </li>

                                <li class="timeline-item mb-5">
                                    <h5 class="fw-bold" style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Zummit Infolabs</h5>
                                    <p class="text-muted mb-2 fw-bold" style={{ color: "var(--fontSubColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Jan 2022 - Apr 2022</p>
                                    <p class="text-muted" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                        - Developed an internal management system for the organization. <br />
                                        - Used ExpressJS and nodeJS for fetching employee details from database and displaying using Handlebars. <br />
                                        - Implemented JWT authentication for login and registration of an employee into the system. <br />
                                    </p>
                                </li>

                                <li class="timeline-item mb-5">
                                    <h5 class="fw-bold" style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>The Sparks Foundation</h5>
                                    <p class="text-muted mb-2 fw-bold" style={{ color: "var(--fontSubColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Jun 2021 - Jul 2021</p>
                                    <p class="text-muted" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                        - Created and developed dynamic websites with various specifications. <br />
                                        - Worked on features such as payment gateway and social media integration. <br />
                                        - Performed various testing methodologies using Selenium. <br />
                                        - Wrote codes to collect, crunch and analyze data from internal and external sources. <br />
                                    </p>
                                </li>

                            </ul>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}
