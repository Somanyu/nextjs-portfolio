import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from 'next/link';
import Image from 'next/image';
import images from '../public/images/javascript-functions-thumbnail.jpeg'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('posts'))
    const posts = files.map(fileName => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: fileName.split('.')[0]
        }
    })

    return {
        props: {
            posts
        }
    }
}

export default function Snippets({ posts }) {
    return (
        <>
            <Navbar />

            <div class="container py-4 py-xl-5">
                <div class="row mb-5" style={{ marginBottom: "32px" }}>
                    <div class="col-md-12 col-lg-8 offset-lg-2">
                        <h1 style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Code Snippets</h1>
                        <p style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>Paragraph</p>
                    </div>
                </div>
                <div class="row">
                    {posts.map((post, index) => (
                        <Link href={'/blog/' + post.slug} passHref key={index}>
                            <a style={{textDecoration: "none"}}>
                                <div class="col-lg-5 offset-lg-2">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tbody style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                                <tr style={{ borderStyle: "none" }}>
                                                    <td class="align-items-start" style={{ borderStyle: "none", background: "var(--cardBackground)", borderRadius: "7px" }}>
                                                        <div class="d-flex d-lg-flex justify-content-center align-items-start justify-content-sm-start align-items-sm-center justify-content-md-start align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center justify-content-xxl-start align-items-xxl-center">
                                                            <div style={{ paddingTop: "7px", paddingLeft: "7px", paddingRight: "7px", paddingBottom: "7px", marginRight: "7px" }}>
                                                                <Image class="img-fluid" alt="thubmnail" src={images} width="100" height="100" style={{ borderRadius: "7px" }} />
                                                            </div>
                                                            <div>
                                                                <h4 style={{ color: "var(--fontColor)", fontWeight: "bold" }}>{post.frontMatter.title}</h4>
                                                                <p style={{ color: "var(--fontParaColor)" }}>{post.frontMatter.description}</p>
                                                                <div style={{ color: "var(--link)" }}>
                                                                    {/* <i class="icon-eye"></i> */}
                                                                    <small style={{ paddingLeft: "0px" }}>{post.frontMatter.date}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}