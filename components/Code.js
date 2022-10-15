export default function Code() {
    return (
        <div class="container" style={{ marginTop: "68px", marginBottom: "68px" }}>
            <div class="row" style={{ marginBottom: "9px" }}>
                <div class="col-lg-7 offset-lg-2">
                    <h1 class="display-5" style={{ color: "#ffffff", fontFamily: "'IBM Plex Sans', sans-serif", fontWeight: "bold" }}>Latest Code</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody style={{ color: "#ffffff", fontFamily: "Rubik, sans-serif" }}>
                                <tr>
                                    <td style={{ padding: "0px", borderBottomStyle: "none" }}>
                                        <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>attachment-downloader  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                        <p style={{ color: "#c8c8c8" }}>Download attachments from mail using python&#39,s Imap and email library.<br /></p>
                                        <hr style={{ marginBottom: "8px" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "0px", borderBottomStyle: "none" }}>
                                        <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>librarymgmt  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                        <p style={{ color: "#c8c8c8" }}>Management system using nodeJs, ExpressJS and mongoDB for library.<br /></p>
                                        <hr style={{ marginBottom: "8px" }} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row" style={{ paddingTop: "16px" }}>
                <div class="col-lg-4 offset-lg-2">
                    <a href="#" style={{ color: "#878787", fontFamily: "Rubik, sans-serif", textDecoration: "none" }}>View GitHub  </a>
                    <i class="las la-arrow-right" style={{ color: "#878787" }}></i>
                </div>
            </div>
        </div>
    )
}