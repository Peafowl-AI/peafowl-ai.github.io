import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='img/peafowl-ai_logo.jpeg' alt="Peafowl AI Logo"/>
        <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading>
        <p className="hero__subtitle">
        We built open-source AI models
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Projects & Papers - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function MyanmarGPTCard(){
  return <section className="container">
    <h1 className="text--center">Our Projects</h1>
    <div className="row my--5">
      <div className={clsx('col col--4 card')}>
      <h2 className='text--center'>MyanmarGPT</h2>
      <h3 className='text--center'>Myanmar Generative Pretrained Transformer</h3>
        <img src='/img/projects/MyanmarGPT_Logo.jpeg' alt="MyanmarGPT - Github"/>
        <p className="text--center">The very first and largest usable Generative Pretrained Transformer in Myanmar (Burmese) languge.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/MinSiThu/MyanmarGPT" target='blank'>
            View on Github
          </Link>
        </div>
      </div>
    </div>
  </section>
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Non Profit Open Source AI Organization`}
      description="Non Profit Open Source Organization for Research in underrepresented communities - specially focus on Myanmar, Burmese">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <MyanmarGPTCard/>
      </main>
    </Layout>
  );
}
