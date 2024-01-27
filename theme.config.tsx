import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Cybria Documentation</span>,
  project: {
    link: 'https://github.com/Cybria-Chain/cybria-documentation',
  },
  docsRepositoryBase: 'https://github.com/Cybria-Chain/cybria-documentation',
  footer: {
    text: 'Cybria Technical Documentation',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CybriaChain" />
      <meta property="og:description" content="CybriaChain is a Layer 2 blockchain platform built on top of the Ethereum network." />
    </>
  )
}

export default config
