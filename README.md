
![react-tasks](https://user-images.githubusercontent.com/79156846/164283358-f2664114-940d-47d4-be74-d92685c4e43c.PNG)
## React-tasks est un petit projet pour debuter avec React, mais qui traite plusieurs aspect de cette bibliotheque :
- construire des composants  : decouper l'interface utilisateur en plusieurs parties, code plus visible, reutilisable et facile à maintenir 
- props : envoyer des propriétés d'un composant à un autre (parent vers enfants en principe) mais l'invers peut se faire selon d'autres methodes exemple: context-Api, Redux
- state: état initial du composant qui peut evoluer avec le temps ou sur une action de l'utilisateur
- cycle de vie : useEffect : s'execute aprés le rendu pour éliminer des effets secondaires injustifiés (la mise à jour du DOM, la récupération de données à parti d'une   API...
- Routes: naviguer d'une page à une autre, personaliser l'affichage selon les besoins de l'pplication

 ##### Pour simuler un back-end sans avoir à le coder, on a utilisé Json-server pour pouvoir réagir avec une Bdd(base de donnée), et puis effectuer nos CRUD(Create,       Read, Update, Delete) en temps réel, ainsi on a pu tester nos methodes comme avec n'imporet quel Api ou Bdd
 
 ##### L'application a été deployé certe sur un server local avec serve, mais s'était juste pour decouvrir la version à deployer et ainsi découvrir la compelation faites au moment du Build, pour servir nos fichiers static 
 
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
