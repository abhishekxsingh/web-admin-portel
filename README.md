# admin panel

admin panel to view data and manage users.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```bash
#!/bin/bash
Node@v10.x.x
```

### Installing

A step by step series that will tell you how to get a development env running

```bash
#!/bin/bash
$ cd server
```

```node
#!/.nvm/versions/node/v10.15.3/bin/node
$ pnpm install
```

### Available Scripts

| Script                   | Description                                                                                                               |
| -------------            | ------------------------------------------------------------------------------------------------------------------------- |
| `npm run start:dev`      | Run the dev Server                                                                                                       |
| `pnpm run build`          | Run the prod server. It will create dist folder and under dist folder there is index.html that will be run in production. |
| `pnpm run test`           | Run the all test                                                                                                          |
| `pnpm start`              | Start the app                                                                                                             |
| `pnpm run test-lint`      | Run the linting test                                                                                                      |
| `pnpm run test-nsp`       | Run the validating modules test                                                                                           |
| `pnpm run test-mocha`     | Run test cases with coverage for components                                                                               |

### Export environment variables

| Variable                       | Description                                                                                                               |
| -------------------            | --------------------------------------------------------------------------------------------------------------------------|
| PORT                           | Set this variable to run your app on this port                                                                            |
| IDENTITY_SERVICE_URL           | Base url for Identity Service                                                                                             |

### Run at local server

```bash
http://localhost:8080/
```
# web-admin-portal
