import useSWR from "swr"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { projects } from "../json/projects"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const getStaticProps = async () => {
    return {
        props: {
            project: projects,
        },
    }
}

export default function Dashboard({ project }) {

    const { data } = useSWR('/api/views', fetcher);

    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <h1 class="display-5" style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Dashboard</h1>
                        <p style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Paragraph</p>
                    </div>
                </div>
                <div class="row" style={{ marginTop: "20px" }}>
                    <div class="col-md-12 col-lg-3 offset-lg-2" style={{ borderRadius: "7px", border: "0.1px solid #707070" }}>
                        <h6 style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "4px", marginTop: "13px" }}>All Time Views <i class="la la-external-link"></i></h6>
                        <h2 style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>{data?.views}</h2>
                    </div>
                    <div class="col-md-12 col-lg-4 offset-lg-0"></div>
                </div>
                <div class="row" style={{ marginTop: "21px" }}>
                    <div class="col-lg-7 offset-lg-2" style={{ marginTop: "29px" }}>
                        <h1 style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>All Projects</h1>
                    </div>
                    <div class="col-lg-8 offset-lg-2">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody style={{ color: " var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>

                                    {project.map(projectsList => (
                                        <tr key={projectsList.id}>
                                            <td style={{ padding: "0px", borderBottomStyle: "none" }}>
                                                <a href={projectsList.url} target="_blank" style={{ color: 'var(--fontColor)', textDecoration: "none" }} rel="noreferrer">
                                                    <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{projectsList.name}  <i class="icon-link" style={{ color: "var(--fontColor)", fontSize: "19px" }}></i></h4>
                                                </a>
                                                <p style={{ color: "var(--paraColor)" }}>{projectsList.description}<br /></p>
                                                <hr style={{ marginBottom: "8px" }} />
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </div >

    )
}