# Tormenta20Builder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Install dependencies with `npm ci`, then run `npm run start:dev` for a dev server. Navigate to `http://127.0.0.1:4200/`. The application will automatically reload if you change any of the source files.

On Windows PowerShell, use `npm.cmd ci` and `npm.cmd run start:dev` if script execution is disabled. `npm start` runs the Express server and requires a build in `dist/` first.

## API de Tormenta

Os JSONs ficam em `server/data/` e são servidos pelo Express. O PDF continua em `src/assets/tormenta/`.

Para desenvolver, execute em dois terminais:

```powershell
npm.cmd run start:api
```

```powershell
npm.cmd run start:dev
```

Abra `http://127.0.0.1:4200/`. O proxy do Angular encaminha `/api` para a porta 8080. Reinicie o backend após alterar os JSONs.

Rotas de consulta (GET):

- `/api/health`: estado do servidor.
- `/api/tormenta`: catálogo completo, carregado uma vez ao abrir a aplicação.
- `/api/tormenta/:resource`: `database`, `pericias`, `magics`, `char_export`, `armor`, `weapons` ou `attributes`.

Recursos e rotas de API inexistentes retornam HTTP 404 em JSON. A API é somente de leitura e mantém os dados em arquivos JSON; não há banco de dados ou gravação de fichas no servidor.

O serviço `TormentaDataService` carrega os dados via HTTP antes de montar os componentes. O contrato da resposta fica em `src/app/tormenta-catalog.ts`; mantenha-o alinhado ao formato dos JSONs.

Para verificar a API: `npm.cmd run test:api`. Para servir o frontend compilado e a API juntos: `npm.cmd run build`, depois `npm.cmd start` e abra `http://localhost:8080/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
