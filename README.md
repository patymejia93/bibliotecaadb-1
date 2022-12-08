## CLI Overview and Command Reference
https://angular.io/cli

## Prime NG
https://www.primefaces.org/primeng/

## Prime Flex
https://www.primefaces.org/primeflex/

## Prime Designer NG
https://primefaces.org/designer-ng/

## Prime NG Icons Library
https://www.primefaces.org/primeng/icons

## How To Bind Specific Keys to the Keyup and Keydown Events in Angular
https://www.digitalocean.com/community/tutorials/angular-binding-keyup-keydown-events


## CONFIGURACIONES ADICIONALES

## Paso 1 Scheme Prime NG
En el angular.json adicionar :

  "styles": [
	  "node_modules/primeng/resources/themes/saga-blue/theme.css",
	  "node_modules/primeng/resources/primeng.min.css",
	  "node_modules/primeflex/primeflex.css",
	  "node_modules/primeicons/primeicons.css",
	  "node_modules/quill/dist/quill.snow.css",
  ],

## Paso 2 ADD tsconfig.app.json
{
    "compilerOptions": {
        "resolveJsonModule": true,
        "esModuleInterop": true,
    }
}

## Paso 3 ADD tsconfig.json
{
    "compilerOptions": {
        "resolveJsonModule": true,
        "esModuleInterop": true,    
    }
}

## Paso 4 ADD angular.json Configuring CommonJS dependencies
{
  "projects": {
    "my-proyect": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "allowedCommonJsDependencies": [
              "quill"
             ],
          },
        },
      }
    }
  },
}

## Paso 5 Modify angular.json
{
  "projects": {
    "my-proyect": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "1mb",
                  "maximumError": "1.5mb"
                }
              ],
            },
          },
        },
      }
    }
  }
}

## RUN ESLint
    ng lint

# RUN ESLint
    ng lint

## Run Proyects
ng serve -o

## Comandos de Angular ##

# generate module
    ng g m [folder]/[folder] --flat

# generate component 
    ng g c components/[nombre_componente] --skip-tests --inline-style
    ng g c components/[nombre_componente] --skip-tests 

# generate servicio
    ng generate s services/[nombre_servicio] --skip-tests

# generate interface
    ng generate interface interfaces/[nombre_interface].interface --prefix=I 

# generate guards
    ng generate guard guards/[nombre_guard] --skip-tests

# generar para Produccion
    ng build --watch --configuration development

