# Next.js Template

## 📓 Commands

```bash
# install dependency
yarn install

# run in production mode
yarn start

# run in development mode
yarn dev

# build the app and run in production mode
yarn start:prod

# test both unit test and e2e test
yarn test

# test all the unit test
yarn test:unit

# test all the e2e test
yarn test:e2e
```

### Running the app for development

```bash
git clone <repo>

yarn install

cp .env.example .env

chmod +x .husky -R    # Linux / Mac user need (allow git hook script executable)

yarn husky install    # add husky git hook to the repo

git checkout -B dev   # create and checkout to a development branch (optional)

yarn dev
```

## ⭐ Enhance Coding Quality Tools Used

### ESLint

It statically analyzes your code to help you detect formatting issues and find code inconsistencies, here we also extend the ESLint Typescript recommend rules and the most popular JavaScript style [Airbnb](https://github.com/airbnb/javascript).

```text
# Config File
├── .eslintignore
├── .eslintrc.js
```

Other popular JavaScript style:

- [Standard](https://standardjs.com)
- [Google](https://google.github.io/styleguide/jsguide.html)

### Prettier

Similar to ESLint, but mainly focus on auto-formatting your code, does not check the code quality. Actually, ESLint can do all the jobs that Prettier can do, but for the formatting part, Prettier does better, so we import both and achieve each of the advantages. About the conflict of the formatting part, we can import `plugin:prettier/recommended` to solve this, but keep in mind that this plugin should extend at the last.

```text
# Config File
├── .prettierignore
├── .prettierrc.js
```

### Editorconfig

It defines a standard code formatting style guide among all the IDEs and editors used within a team of developers. Basically, all the rules in the Editorconfig should sync with Prettier, Editorconfig focus on newly created files, ESLint and Prettier focus on existing files.

```text
# Config File
├── .editorconfig
```

### Husky + CommitLint + Lint-staged

These tools are the wrapper of [Git Hook](https://git-scm.com/book/zh-tw/v2/Customizing-Git-Git-Hooks). Lint-staged enforces you to format your code (run `yarn lint`) before committing, but the tools will cache the file the already formatted, improve performance. CommitLint enforces your commit message to fit a specific format, here we extend [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) (officially recommend setting).

```text
# Type: build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
# CommitLint Format:

<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

```text
# Config File for Lint-staged
├── .lintstagedrc.js

# Config File for CommitLint
├── .commitlintrc.js

# Config File for Husky
├── .husky
|   ├── commit-msg  # call CommitLint to check commit msg
|   ├── pre-commit  # call Eslint to lint the coding issue
|   ├── pre-push    # call Jest to do the unit + e2e test
```

### Git Attributes

To synchronize the end-of-line of the git repository.

```text
# Config File
├── .gitattributes
```

_Reference:_

- [Why You Should Use ESLint, Prettier & EditorConfig](https://blog.theodo.com/2019/08/why-you-should-use-eslint-prettier-and-editorconfig-together)
- [代碼規範最佳實踐](https://codeleading.com/article/47374147761)
- [代碼提交規範](https://segmentfault.com/a/1190000040615432)

## ⚙️ Other Configuration

### Alias Path

In the tsconfig.json file, there has a 'paths' attribute that can setup alias path, using alias path can prevent dirty relative path (e.g. ../../../), also it is easier to import files that in the deep directory (e.g. src/assets/img/testing/...). Below is the default alias path:

```js
"compilerOptions": {
  ...
  "paths": {
    "@/*": ["src/*"],
    "@com/*": ["src/components/*"],
    "@share/*": ["src/shared/*"],
    "@style/*": ["src/styles/*"],
    "@utils/*": ["src/utils/*"],
  },
  ...
}
```

For Jest, it does not recognize tsconfig.json, so we have declare the alias path in `jest.config.js` and `test/jest-e2e.json` file.

```js
moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1',
  '^@com/(.*)$': '<rootDir>/src/components/$1',
  '^@share/(.*)$': '<rootDir>/src/shared/$1',
  '^@style/(.*)$': '<rootDir>/src/styles/$1',
  '^@util/(.*)$': '<rootDir>/src/utils/$1',
},
```

## ☑️ Style Guide / Naming Convention

`JS variable / function:` lower camel case [e.g. twoWords]

`JS global const + enum's member:` upper case [e.g. TWO_WORDS]

`JS class / interface / enum:` pascal case [e.g. TwoWords]

`i18n's key:` snake case [e.g. two_words]

`Asset name (e.g. image):` kebab case [e.g. two-words]
