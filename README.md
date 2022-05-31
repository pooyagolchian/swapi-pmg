# PMG - Swapi API with Vue.js
This project built with:
- Vue.js
- Vuex
- Javascript
- Axios (API factory)
- Github Action
- Cypress for E2E testing

---
### BEM

BEM has been used for methodology with SCSS format to create reusable components for this task. I have followed the structure developed in the dummy files.

### Prettier

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of the formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by adding a pre-commit hook. For more detail check package.json, husky section.


### AXIOS API factory
I used the AXIOS instance for the API factory that I considered `S` in `SOLID` for isolation API folder.

### Husky

Modern native Git hooks made easy. Husky is used for git hook pre-commit to format all code with Prettier.

--- 
## Project setup 
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```
OR

```
yarn cypress open
```

For command-line test I used the below command
```
yarn cypress run
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
