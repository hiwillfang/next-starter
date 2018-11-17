import App, { Container } from "next/app";
import React from "react";
import Page from "../components/Page/Page";

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default NextApp;
