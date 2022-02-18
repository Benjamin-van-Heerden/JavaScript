# Scripts overview

- `npm run start:dev`
Starts the application in development using nodemon and ts-node to do hot reloading.

- `npm run build`
Builds the app at build, cleaning the folder first.

- `npm run start`
Starts the app in production by first building the project with npm run build, and then executing the compiled JavaScript at build/index.js.

- `npm run lint` Runs ESLint

- `npm run lint-and-fix` Run ESLint and tell it to fix things that it's able to fix at the same time.

- `npm run prettier-format` Format everything except those files ignored in .prettierignore

# How to get to here:

## 1. Install packages:

- ```npm init -y```
- ```npm install``` <br />
Uses :
```
"dependencies": {
  "@prisma/client": "^3.8.1",
  "apollo-server": "^3.6.2",
  "bcrypt": "^5.0.1",
  "graphql": "^16.3.0",
  "jsonwebtoken": "^8.5.1",
  "prisma": "^3.8.1",
  "validator": "^13.7.0"
},
"devDependencies": {
  "@types/bcrypt": "^5.0.0",
  "@types/jsonwebtoken": "^8.5.8",
  "@types/node": "^17.0.13",
  "@types/validator": "^13.7.1",
  "@typescript-eslint/eslint-plugin": "^5.10.1",
  "@typescript-eslint/parser": "^5.10.1",
  "eslint": "^8.7.0",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-prettier": "^4.0.0",
  "nodemon": "^2.0.15",
  "prettier": "^2.5.1",
  "rimraf": "^3.0.2",
  "ts-node": "^10.4.0",
  "typescript": "^4.5.5"
}
```

- `npm install -g ts-node nodemon`

## 2. Create .prettierrc with:
```
{
    "semi": true,
    "trailingComma": "none",
    "singleQuote": false,
    "printWidth": 100,
    "tabWidth": 4
}
```

## 3. Create .eslintrc with:
```
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": 1,       // Means warning
    "prettier/prettier": 2 // Means error
  }
}
```

## 4. Create .eslintignore with:
```
node_modules
build
```

## 5. Create nodemon.json with: 
```
{
    "watch": [
        "src"
    ],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}
```

## 6. Create /src and /build folders

## 7. Configure Typescript

```
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

## 8. Add to package.json:
- `"start:dev": "nodemon"`
- `"build": "rimraf ./build && tsc"`
- `"start": "npm run build && node build/index.js"`
- `"lint": "eslint . --ext .ts"`
- `"lint-and-fix": "eslint . --ext .ts --fix"`
- `"prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write"`

# Database

## Getting started
- Initialise prisma with `npx prisma init`
- Run `docker compose up` (make sure docker is properly installed)
- Set .env url to `postgres://example_user:passwordispassword@localhost:54320/example_db?sslmode=disable` (changes to this url should reflect in the docker-compose.yml file)
- Access database through CLI (docker container already up) `psql postgres://example_user:passwordispassword@localhost:54320/example_db?sslmode=disable`

## Migrations
### (prefix with npx!)
Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client) <br />
  $ `prisma migrate dev --name name` <br />

  Reset your database and apply all migrations <br />
  $ `prisma migrate reset` <br />

  Apply pending migrations to the database in production/staging <br />
  $ `prisma migrate deploy` <br />

  Check the status of migrations in the production/staging database <br />
  $ `prisma migrate status` <br />

  Specify a schema <br />
  $ `prisma migrate status --schema=./schema.prisma` <br />

  - Can also manually push to the db via `npx prisma db push`
  - Best feature!!! `npx prisma studio` visualise db
