WARNING! stackblits, which I used to demonstrate code result, somehow rewrite package.json
dependencies list so if during local building you get errors try replace dependencies with

"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"@types/jest": "^24.0.0",
"@types/node": "^12.0.0",
"@types/react": "^16.9.0",
"@types/react-dom": "^16.9.0",
"@types/react-redux": "^7.1.9",
"@types/react-router-bootstrap": "^0.24.5",
"@types/react-router-dom": "^5.1.5",
"@types/react-router-redux": "^5.0.18",
"add": "^2.0.6",
"bootstrap": "^4.5.2",
"cuid": "^2.1.8",
"node-sass": "^4.14.1",
"re-reselect": "^4.0.0",
"react": "^16.13.1",
"react-alice-carousel": "^1.19.3",
"react-bootstrap": "^1.3.0",
"react-dom": "^16.13.1",
"react-redux": "^7.2.1",
"react-redux-typescript-scripts": "^1.6.2",
"react-router-bootstrap": "^0.25.0",
"react-router-dom": "^5.2.0",
"react-router-redux": "^4.0.8",
"react-scripts": "3.4.3",
"redux": "^4.0.5",
"redux-observable": "^1.2.0",
"reselect": "^4.0.0",
"rxjs": "^6.6.3",
"typesafe-actions": "^5.1.0",
"typescript": "~3.7.2",
"utility-types": "^3.10.0",
"yarn": "^1.22.5"


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
