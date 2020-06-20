# Contributing to useWebAnimations

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](https://github.com/wellyshen/use-web-animations/blob/master/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

> Working on your first Pull Request? You can learn how from [this free video series](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## Pull Request Process

1. Fork the repository and create your branch from `master`.
2. Run `yarn` to install dependencies.
3. If you’ve fixed a bug or added code that should be tested.
4. Ensure the test suite passes by running `yarn test`.
5. Update the [README.md](https://github.com/wellyshen/use-web-animations/blob/master/README.md) with details of changes to the interface.
6. Update the [demo app](https://github.com/wellyshen/use-web-animations/tree/master/demo/App) if needed.
7. Format your code with [Prettier](https://prettier.io).
8. Make sure your code lints by running `yarn lint`.
9. Make sure your code passes type check by running `yarn type-check`.

## Development Workflow

After cloning useWebAnimations, run `yarn` to fetch its dependencies. Then, you can run several commands:

- `yarn dev` runs the [demo app](https://github.com/wellyshen/use-web-animations/tree/master/demo/App) as your playground at `localhost:10001`. Support live reloading.
- `yarn lint:code` lints all `.js` and `.tsx?` files.
- `yarn lint` lints `code`.
- `yarn type-check` runs the [Typescript](https://www.typescriptlang.org) typechecks.
- `yarn type-check:watch` runs an interactive typechecks watcher (helpful in development).
- `yarn test` runs the complete test suite.
- `yarn test:watch` runs an interactive test watcher (helpful in development).
- `yarn test:cov` runs the complete test suite with coverage report.
- `yarn build:demo` creates a `public` folder with all the static files.
- `yarn build:dist` creates a `dist` folder with package builds (`CJS` & `ESM`) and type definition file. You can test the package locally via [yarn link](https://yarnpkg.com/lang/en/docs/cli/link).
- `yarn build` creates both `public` and `dist`.
- `yarn clean:dev` deletes the `demo/.dev` build folder.
- `yarn clean:demo` deletes the `public` build folder.
- `yarn clean:dist` deletes the `dist` build folder.
- `yarn clean:cov` deletes the `coverage` report folder.
- `yarn clean` deletes all the build/coverage folders.

## Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io). Run `yarn lint` after making any changes to the code. Then, our linter will catch most issues that may exist in your code.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb’s Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction.

## License

By contributing to useWebAnimations, you agree that your contributions will be licensed under its MIT license.
