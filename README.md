# Para deployar

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


