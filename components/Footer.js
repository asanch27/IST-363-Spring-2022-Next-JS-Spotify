import styles from './footer.module.scss'
import Col from './Col'
import Container from "./Container"
import Logo from "./Logo"
import Nav from './Nav'
import Row from './Row'

const Footer = () => {
    return <footer className={styles.footer}> 
        <Container>
            <Row alignItems="center">
                <Col xs="12" md="3">
                    <Logo color="white" />
                </Col>
                <Col xs="12" md="6">
                    <Nav />
                </Col>
            </Row>
            <Row>
                <Col>
                    Copyright 2022 Spotify, Inc.
                </Col>
            </Row>
        </Container>
    </footer>
}
export default Footer;