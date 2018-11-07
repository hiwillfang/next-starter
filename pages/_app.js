import App, { Container } from 'next/app';
import Page from '../components/Page/Page';

class NextApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </Container>
        );
    }
}

export default NextApp;