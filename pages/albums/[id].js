import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import Container from "../../components/Container"
import Row from "../../components/Row"
import Col from "../../components/Col"
import Section from '../../components/Section'
import Tracks from '../../components/Tracks'
import Paragraph from "../../components/Paragraph"
import { getAllAlbumSlugs, getSingleAlbumData } from '../../lib.api'

// WATERFALL
// 1. getStaticPaths
export async function getStaticPaths () {
    const paths = await getAllAbumSlugs ();
        return {
            paths,
            fallback: false
            }
        }

// 2. getStaticProps
export async function getStaticProps ({ params }) {
    console.log({params});
    const AlbumData = await getSingleAlbumData(params.id);
    return {
        props: {
            albumData
        }
    }
}
// 3. Use the data
const SingleAlbumPage = ({ albumData }) => {
    const { title, featuredImage, albumInformation } = albumData;
    const { sourceUrl, altText, mediaDetails } = featuredImage.node;
    const { year, songsToAlbums, artistsToAlbums } = albumInformation;
    return <Layout>
        <Image
        src={sourceUrl}
        alt={altText}
        width={mediaDetails.width}
        height={mediaDetails.height}
        />
        <Heading level="1">{title}</Heading>
        <Heading level="2">{year}</Heading>
        {artistsToAlbums && artistsToAlbums.map  ((artist, index) => {
            const {title, slug} = artist;
            return <Heading level="2">
                <Link href={`/artists/${slug}`}>
                <a>
                    {title}
                </a>
                </Link>
            </Heading>
        })}
        {songsToAlbums &&
        <section>
        <Row> 
        {songsToAlbums.map((song, index) => {
            const { title } = song;
            return <Col key ={index} xs="12" sm="12">
             <Heading level="3">{title}</Heading>
            </Col>
        })}
        </Row>
        </section>
}
    </Layout>
}
export default SingleAlbumPage;