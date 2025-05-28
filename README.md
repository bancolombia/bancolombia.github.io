# Open Source Site Guidelines

The *Open Source Site Guidelines* project is the website that contains the guide documentation for Contributors and Maintainers within our development community. The goal of this site is to provide clear and concise guidelines to facilitate internal collaboration, promoting transparency and code reuse.

The site is built using [Docusaurus](https://docusaurus.io/), a modern static site generator.


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
