![Pango](.images/pango.png) 
# Pango Dev

The purpose of this repository is to facilitate building all the components that make up the various aspects of Pango.

# Install
This project is dependent on [Lerna](https://lernajs.io/) and [Yarn](https://yarnpkg.com).

## Yarn Installation
Yarn installation is dependent on your machine. In order to install this packaging framework you should follow the directions for your operating system here:

[Yarn Installation](https://yarnpkg.com/en/docs/install)

## Lerna installation
Open your terminal and execute the following command:
```
> npm install -g lerna
```
# Setup

Now you are ready to clone the repository and execute the following commands:

```
> git clone https://github.com/pango-tz/dev.git pango.dev
> cd pango.dev
> lerna bootstrap
```

This will ensure that if a project depends on anotther project in this repository that it will look as a dependency without having to register the package with npm and then download the package from the npm registry.

# Notes

* Never run `npm install` instead at the root of the cloned repository run the `lerna bootstrap`. This will first link any dependent projects and then go out to npm to seek the rest of the dependencies

