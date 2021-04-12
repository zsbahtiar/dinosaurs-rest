# Dinosaurs Rest

## How to
- Install package
`yarn install` or `npm run install`
- environment setting
`cp .env.example .env`
change all
- for development
`yarn dev` or `npm run dev`
- build
`yarn build` or `npm run build`
- for production
`yarn prod` or `npm run prod`


## List Endpoint
- /
`method: GET`
- /create
`method: POST`
```
body: {
  "name": "Brachiosaurus",
  "description": "Brachiosaurus adalah salah satu jenis dinosaurus herbivora dari kelompok Saurischia pinggul dan termasuk ke dalam kelompok Sauropodomorpha (Sauropoda).Brachiosaurus adalah salah satu dinosaurus raksasa yang sudah dikenali dengan sangat baik.nama ilmiah dari Brachiosaurus adalah mentresureo.",
  "type": "Sauropod"
}
```
- /:id
`method: GET`
- /:id/update
`method: PUT`
```
body: {
  "name": "Brachiosaurus",
  "description": "Brachiosaurus adalah salah satu jenis dinosaurus herbivora dari kelompok Saurischia pinggul dan termasuk ke dalam kelompok Sauropodomorpha (Sauropoda).Brachiosaurus adalah salah satu dinosaurus raksasa yang sudah dikenali dengan sangat baik.nama ilmiah dari Brachiosaurus adalah mentresureo.",
  "type": "Sauropod"
}
```
- /:id/delete
`method: DELETE`

Live Demo: 


Made with:
- Express
- Sequelize