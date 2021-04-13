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
`yarn start` or `npm run start`


## List Endpoint
- /
`method: GET`
query available: `sort?=asc` or `sort?=desc`
- /create
`method: POST`
```
{
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
{
  "name": "Brachiosaurus",
  "description": "Brachiosaurus adalah salah satu jenis dinosaurus herbivora dari kelompok Saurischia pinggul dan termasuk ke dalam kelompok Sauropodomorpha (Sauropoda).Brachiosaurus adalah salah satu dinosaurus raksasa yang sudah dikenali dengan sangat baik.nama ilmiah dari Brachiosaurus adalah mentresureo.",
  "type": "Sauropod"
}
```
- /:id/delete
`method: DELETE`
- /json/results
`method: GET`

Live Demo: [Click here](https://dinousaurs-rest.herokuapp.com/)


Made with:
- Express
- Sequelize