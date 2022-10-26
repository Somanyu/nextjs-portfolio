import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TopTrack() {
    // const { data, error } = useSWR('/api/top-tracks');
    const { data, error } = useSWR(
        "/api/top-tracks",
        fetcher
      );

    // there should be no `undefined` state
    console.log("Is data ready?", !!data);

    if(error) return "An error as occurred";
    if(!data) return "Loading..."

    return (
        <div>
            <h1>{data.name}</h1>
            {/* <div class="container">
                <div class="row" style={{ marginTop: "34px" }}>
                    <div class="col-lg-9 offset-lg-2">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody style={{ color: "var(--fontColor)", fontFamily: "Rubik, sans-serif" }}>
                                    <tr>
                                        <td style={{ padding: "0px", borderBottomStyle: "none" }}>
                                            <div class="d-flex d-lg-flex justify-content-evenly align-items-center justify-content-sm-evenly align-items-sm-center justify-content-md-start align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-evenly align-items-xl-center justify-content-xxl-evenly align-items-xxl-center">
                                                <div>
                                                    <Image class="img-fluid" alt="album" src={[data?.coverImage.url]} width="100" height="100" style={{ marginLeft: "1px", marginRight: "18px" }} />
                                                </div>
                                                <div style={{ marginLeft: "0px", marginTop: "9px" }}>
                                                    <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data[0].title]}</h4>
                                                    <p style={{ color: "var(--fontPara)", fontStyle: "italic", fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data[0].artist]}<br /></p>
                                                </div>
                                            </div>
                                            <hr style={{ marginBottom: "8px" }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
