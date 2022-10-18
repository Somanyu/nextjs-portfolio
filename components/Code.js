import Link from 'next/link'
import Script from 'next/script'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Code() {
    const { data, error } = useSWR('https://api.github.com/search/repositories?q=user:Somanyu+sort:updated', fetcher)

    if (error) return <div>Failed to load!</div>
    if (!data) return <div>Loading...</div>

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

                                <a href={[data.items[0].html_url]} target="_blank" style={{ color: 'white', textDecoration: "none" }} rel="noreferrer">
                                    <tr>
                                        <td style={{ padding: "0px", borderBottomStyle: "none" }}>
                                            <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data.items[0].name]}  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                            <p style={{ color: "#c8c8c8", marginBottom: "1px" }}>{[data.items[0].description]}<br /></p>
                                        </td>
                                    </tr>
                                    <hr style={{ marginBottom: "8px" }} />
                                </a>

                                <a href={[data.items[1].html_url]} target="_blank" style={{ color: 'white', textDecoration: "none" }} rel="noreferrer">
                                    <tr>
                                        <td style={{ padding: "0px", borderStyle: "none" }}>
                                            <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data.items[1].name]}  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                            <p style={{ color: "#c8c8c8", marginBottom: "1px" }}>{[data.items[1].description]}<br /></p>
                                        </td>
                                    </tr>
                                    <hr style={{ marginBottom: "8px" }} />
                                </a>

                                <a href={[data.items[2].html_url]} target="_blank" style={{ color: 'white', textDecoration: "none" }} rel="noreferrer">
                                    <tr>
                                        <td style={{ padding: "0px", borderStyle: "none" }}>
                                            <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data.items[2].name]}  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                            <p style={{ color: "#c8c8c8", marginBottom: "1px" }}>{[data.items[2].description]}<br /></p>
                                        </td>
                                    </tr>
                                    <hr style={{ marginBottom: "8px" }} />
                                </a>
                                
                                <a href={[data.items[3].html_url]} target="_blank" style={{ color: 'white', textDecoration: "none" }} rel="noreferrer">
                                    <tr>
                                        <td style={{ padding: "0px", borderStyle: "none" }}>
                                            <h4 style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{[data.items[3].name]}  <i class="icon-link" style={{ color: "#ffffff", fontSize: "19px" }}></i></h4>
                                            <p style={{ color: "#c8c8c8", marginBottom: "1px" }}>{[data.items[3].description]}<br /></p>
                                        </td>
                                    </tr>
                                    <hr style={{ marginBottom: "8px" }} />
                                </a>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row" style={{ paddingTop: "16px" }}>
                <div class="col-lg-4 offset-lg-2">
                    <a href="https://github.com/Somanyu" target="_blank" style={{ color: "#878787", fontFamily: "Rubik, sans-serif", textDecoration: "none" }} rel="noreferrer">View GitHub  </a>
                    <i class="las la-arrow-right" style={{ color: "#878787" }}></i>
                </div>
            </div>
        </div>
    )
}

// import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

// export default function Code() {
//   const { data, error } = useSWR('https://api.github.com/users/Somanyu/repos', fetcher)

//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>

//   return (
//     <div>
//       <h1>{data[0].name}</h1>
//     </div>
//   )
// }
