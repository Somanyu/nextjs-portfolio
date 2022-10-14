import Link from "next/link"

export default function Work() {
    return (
        <div class="container" style={{ marginTop: "68px", marginBottom: "68px" }}>
            <div class="row">
                <div class="col-lg-7 offset-lg-2">
                    <h1 class="display-5" style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>My Works</h1>
                </div>
            </div>

            <div class="row" style={{ marginTop: "12px" }}>
                <Link href="/dashboard" passHref>
                    <a class="boxBorder1 col-md-4 col-lg-2 offset-lg-2" >
                        <div>
                            <h5 style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", paddingBottom: "93px", marginTop: "13px" }}>Library Management System using Node.js and MongoDB.</h5>
                            <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i>
                        </div>
                    </a>
                </Link>

                <Link href="/dashboard" passHref>
                    <a class="boxBorder2 col-md-4 col-lg-2 offset-lg-0">
                        <div>
                            <h5 style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", paddingBottom: "93px", marginTop: "13px" }}>Attachment Downloader using Python, Flask and Kafka.</h5><i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i>
                        </div>
                    </a>
                </Link>

                <Link href="/dashboard" passHref>
                    <a class="boxBorder3 col-md-4 col-lg-2 offset-lg-0">
                        <div>
                            <h5 style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", paddingBottom: "93px", marginTop: "13px" }}>Google Clone using React.js, Google Search API and Firebase.</h5><i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i>
                        </div>
                    </a>
                </Link>
            </div>

            <div class="row" style={{ paddingTop: "16px" }}>
                <div class="col-lg-4 offset-lg-2">
                    <Link href="/dashboard" >
                        <a style={{ color: "#878787", fontFamily: "Rubik, sans-serif", textDecoration: "none" }}>
                            See more&nbsp;
                        </a>
                    </Link>
                    <i class="las la-arrow-right" style={{ color: "#878787" }}></i>
                </div>
            </div>
        </div>
    )
}