import config from "../docusaurus.config.js";

export default function mockDocusaurusContext() {
  return {
    siteConfig: config,
  };
}