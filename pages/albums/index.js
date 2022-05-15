import Col from '../../components/Col'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Paragraph from '../../components/Paragraph'
import Row from '../../components/Row'

import { getArtists } from '../../lib/api'

export async function getStaticProps() {
    const albums = await getArtists();
    console.log (artists)
    return {
        props: {
            albums
        }
    }
}

const ArtistsLandingPage = ({ artists }) => {
    console.log({ artists });
    return <Layout>
        <Heading level="1">Artists</Heading>
        <Row> 
        {artists.map((artist, index) => {
            const { title, slug, featuredImage } = artist.node;
            const { sourceURL, altText, mediaDetails } = featuredImage.node;
            return <Col key={index} xs="6" sm="6">
                <Image
                    src={sourceURL}
                    alt={altText}
                    width={mediaDetails.width}
                    height={mediaDetails.height}
                />
                <Heading level="3">{title}</Heading>
                <Paragraph>
                    <Link href={`/albums/${slug}`}>
                    <a>
                        Read more
                    </a>
                    </Link>
                </Paragraph>
                </Col>
        })}
        </Row>
    </Layout>
}
export default ArtistsLandingPage;

const AlbumsPage = ({ albums }) => {
    return <Layout>
        <Container>
        <Heading level="1">Albums</Heading>
        <Row> 
        {albums.map((album, index) => {
            const { featuredImage, title, slug } = album;
            const { src, alt, width, height } = featuredImage;
            return <Col key={index} xs="6" sm="4">
                <Image
                    src={`/images/${src}`}
                    alt={alt}
                    width={width}
                    height={height}
                />
                <Heading level="3">{title}</Heading>
                <Paragraph>
                    <Link href={`/albums/${slug}`}>
                    <a>
                        Read more
                    </a>
                    </Link>
                </Paragraph>
                </Col>
        })}
        </Row>
        </Container>
    </Layout>
}
export default AlbumsPage;