# Para deployar

O una o la otra, no se pueden hacer ambas 

## Con Github Pages

1. crear repo en github y hacer push
2. npm install gh-pages
3. modificar package .json:
3. 1. "homepage": "https://NOMBRE-DE-USUARIO.github.io/NOMBRE-DEL-REPO",
3. 2.  "predeploy": "npm run build", 
         "deploy": "gh-pages -d build"

4. hacer un git push
5. npm run build
6. npm run deploy

Ojo con las rutas! Debemos modificarlas para que comiencen con nuestro repo. Eso no pasa en netlify.

### Con Netlify

1. Crear repo en github y hacer push. El proyecto no debe tener warnings en la consola. 
2. Ir a netlify.com
3. Ir a "sites"
4. Ir a "add new site" y elegir "import an existing project"
5. Elegir github
6. Elegir nuestro repo
7. Hacer click en "deploy site" al final
8. Para cambiar la url: hacer click en "domain settings", luego en "options" y ahi modificar la url.

Esperar un rato y si no anda chequear "deploy". En verde, salio bien. En rojo, salio mal. 
