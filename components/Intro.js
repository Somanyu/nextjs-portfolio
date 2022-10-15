import Image from "next/image"
import somanyu from '../public/images/somanyu.jpg'

export default function Intro() {
    return (
        <div class="container" style={{ marginTop: "2.2rem" }}>
            <div class="row">
                <div class="col-md-6 col-lg-4 offset-lg-0 d-flex d-sm-flex d-md-flex d-lg-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center order-sm-first justify-content-md-center align-items-md-center order-md-first justify-content-lg-center align-items-lg-center order-lg-last">
                    <div class="d-lg-flex justify-content-lg-center align-items-lg-center">
                        <Image class="img-fluid" src={somanyu} alt="Somanyu" width="204" height="221" style={{ borderRadius: "2px" }} />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 offset-lg-2 d-lg-flex order-sm-last order-md-last align-items-lg-center order-lg-first">
                    <div class="box" style={{ background: "rgba(255,255,255,0)" }}>
                        <h1 class="display-4 name" style={{ color: "#ffffff", fontFamily: "Questrial, sans-serif", textAlign: "left", paddingTop: "3px", marginTop: "0px", marginBottom: "0px", lineHeight: "60.8px", marginRight: "0px", paddingRight: "0px", paddingBottom: "0px" }}>Somanyu</h1>
                        <p class="title" style={{ color: "#ededed", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: "12px" }}>Full-stack Developer</p>
                        <p style={{ color: "#ababab", fontFamily: "'IBM Plex Sans', sans-serif", marginLeft: "0px", paddingRight: "0px", marginRight: "0px" }}>Studying computer science, aspiring full-stack developer and artsy type.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}