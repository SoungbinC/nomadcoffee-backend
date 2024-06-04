# nomadcoffee-backend

## Days

-   [x] Day 1: Set up the project

# Day 1: Set up the project

-   [x] Download apollo server

```
npm i apollo-server@2.25.2
```

-   [x] Download nodemon for convenience

```
npm i nodemon --save-dev
```

-   [x] Download babel for javascript compiler (Not typescript, just javascript)

```
npm i @babel/core @babel/preset-env @babel/node --save-dev
```

Insdie of babel.config.json

```json
{
    "presets": ["@babel/preset-env"]
}
```

-   [x] Download prisma for ORM

[Prisma](https://www.prisma.io/docs/getting-started)

```
npm install @prisma/client@latest @prisma/extension-accelerate
```

after that

```
npx prisma init
```

-   [x] Download graphql

```
npm i @graphql-tools/schema @graphql-tools/load-files @graphql-tools/merge
```

-   [x] Download dotenv for environment variables

```
npm i dotenv
```
