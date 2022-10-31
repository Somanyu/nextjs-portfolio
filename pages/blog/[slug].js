import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
    return (
        <div className='mt-4'>
            <Navbar />
            <h1>{title}</h1>
            <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
            <Footer />
        </div>
    )
}

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
    return {
        props: {
            frontMatter,
            slug,
            mdxSource
        }
    }
}

export { getStaticProps, getStaticPaths }
export default PostPage