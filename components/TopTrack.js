import useSWR from "swr";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TopTrack() {
    const { data: topTracks, error } = useSWR('/api/top-tracks', fetcher);

    // there should be no `undefined` state
    console.log("Is data ready?", !!topTracks);

    if (error) return "An error as occurred";
    if (!topTracks) return "Loading..."

    return (
        <div>
            <div class="container" style={{ marginTop: "35px" }}>
                <div class="row">
                    <div class="col-lg-8 offset-lg-2" style={{ fontFamily: "'IBM Plex Sans', sans-serif", color: "var(--fontColor)" }}>
                        <h1><i class="fab fa-spotify" style={{ color: "#009e60", fontSize: "36px", marginRight: "9px" }}></i>Top Tracks</h1>
                    </div>
                </div>
                <div class="row" style={{ marginTop: "6px" }}>
                    <div class="col-md-12 col-lg-6 offset-lg-2">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody style={{ color: "var(--fontColor)", fontFamily: "'IBM Plex Sans', sans-serif" }}>
                                    <tr>
                                    {Array.from(Array(5), (e, i) => {
                                        return <td key={topTracks?.tracks[i].artist} class="d-flex d-lg-flex justify-content-start align-items-center justify-content-sm-start align-items-sm-center justify-content-md-start align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-start align-items-xl-center justify-content-xxl-start align-items-xxl-center" style={{ marginLeft: "15px" }}>
                                            <div><Image class="img-fluid" alt={topTracks?.tracks[i].title} src={topTracks?.tracks[i].coverImage.url} width="65" height="65" /></div>
                                            <div style={{ marginLeft: "27px" }}>
                                                <h5 style={{ marginBottom: "0px" }}>{topTracks?.tracks[i].title}</h5>
                                                <p style={{ fontStyle: "italic", color: "var(--fontParaColor)" }}>{topTracks?.tracks[i].artist}</p>
                                            </div>
                                        </td>
                                    })}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
