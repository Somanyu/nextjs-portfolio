import countapi from 'countapi-js';

export default function views (req, res) {
    countapi.visits('global').then((result) => {
        const finalViews = result.value-7268;
        res.status(200).json({ views: finalViews })
    })
}