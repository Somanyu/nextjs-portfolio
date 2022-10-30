import countapi from 'countapi-js';

export default function views(_, res) {
    countapi.visits('global').then((result) => {
        const finalViews = result.value - 7560;
        res.status(200).json({ views: finalViews })
    })
}