# simple_app_express_react_redux

Version 1.0.0

---------------------

IS IS STILL NOT WORKING, JUST NEED TO FIX ISSUE ON SCROLL ON SERVERSIDE AND LOOK AROUND CONTAINER.

Based on https://github.com/erikras/react-redux-universal-hot-example.
Erikras tryed to add the best practice and best tools.
I added vhosts, loadbalancing, intern traduction with i18n and fix different bug.
Script are a bit broken, need to improve it.
React is still in 15.6.1, i have to change it.

---------------------

Working on node 8.9.3 and npm 5.5.1.

To start using the project you have to install node and npm.

---------------------

Install dependencies :

npm install

Compile the project (production):

npm run build

Start the project (production):

npm start

pm2 start ecosystem.js (for loadbalancing)

Start the project, do not need compilation (development):

npm run dev

See the results :

(dev) http://localhost:3000

(prod) http://localhost:8080

---------------------

Enjoy,

Eddy.
