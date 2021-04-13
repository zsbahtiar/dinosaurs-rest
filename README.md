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

## about sorting
- ascending
`sort?=asc`
when use ascending, I'm implement with merge sort. And time complexity of merge sort is *`O(n log(n))`*.
With merge sort, separate element to two element right and left and final result join the array
- descending
`sort?=desc`. I'm implement with bubble sort with time complexity if smallest data *`O(n)`* may be can up to *`O(n²)`*
With bubble sort, each array compared like  element[i] > element[i+1] and swap the array

**PLEASE, CORRECT ME IF I'M WRONG :D**

Live Demo: [Click here](https://dinousaurs-rest.herokuapp.com/)


Made with:
- Express
- Sequelize