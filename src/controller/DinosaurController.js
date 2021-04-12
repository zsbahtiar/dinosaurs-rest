import db from "../model";
import Dinosaur from "../model/Dinosaur";
import fs from "fs";

/**
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns array[]
 */
const merge = (arr1 = [], arr2 = []) => {
  let result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0].name < arr2[0].name) result.push(arr1.shift());
    else result.push(arr2.shift());
  }

  return result.concat(arr1.slice().concat(arr2.slice()));
};

/**
 *
 * @param {*} arr
 * @returns  array
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

/**
 *
 * @param {*} arr
 * @returns array
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].name < arr[j].name) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

/**
 *
 * @param {*} arr
 * @param {*} type
 * @returns array
 */
const _sort = (arr, type) => {
  if (arr.length <= 1) return arr; // return arr when length <= 1

  if (type === "asc") {
    return mergeSort(arr); // using merge sort when asc
  } else if (type === "desc") {
    return bubbleSort(arr); // using bubble sort when desc
  } else {
    return arr;
  }
};

export const getDinosaurs = async (req, res) => {
  try {
    // eslint-disable-next-line radix
    const {
      query: { sort },
    } = req || {};

    const dinosaurs = await Dinosaur({ ...db }).findAll();

    if (!dinosaurs) {
      res.send({
        data: {
          message: "Dinosaur is empty",
          isSuccess: false,
        },
      });
    }
    const result = _sort(
      dinosaurs.map((item) => item.dataValues),
      sort
    );
    
    fs.writeFile("results.json", JSON.stringify(result), 'utf8', function(err){
      if(err){
        console.log(`File failed to save: ${err}`)
      }else{
        console.log(`File has been saved on results.json, open on /json/results`);
      }
    })

    res.send({
      data: result,
      isSuccess: true,
      elements: dinosaurs.length,
    });
  } catch (err) {
    res.send({
      data: {
        isSuccess: false,
        message: `Failed to get data dinosaurs ${err}`,
      },
    });
  }
};

export const getDinosaur = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const dinosaur = await Dinosaur({ ...db }).findByPk(id);

    if (!dinosaur) {
      res.status(404).send({
        data: {
          message: "Dinosaur not found",
          isSuccess: false,
        },
      });
    }

    res.status(200).send({
      data: {
        ...dinosaur.dataValues,
      },
      isSuccess: true,
    });
  } catch (err) {
    res.status(500).send({
      data: {
        isSuccess: false,
        message: `Failed to get data Dinosaur ${err}`,
      },
    });
  }
};

export const createDinosaur = async (req, res) => {
  const {
    body: { dinosaur_category_id, name, description, type },
  } = req || {};

  try {
    const dinosaur = await Dinosaur({ ...db }).create({
      dinosaur_category_id,
      name,
      description,
      type,
    });

    if (!dinosaur) {
      res.status(408).send({
        data: {
          message: "Failed to create dinosaur",
          isSuccess: false,
        },
      });
    }

    res.status(201).send({
      message: "Success create dinosaur",
      isSuccess: true,
    });
  } catch (err) {
    res.status(500).send({
      data: {
        isSuccess: false,
        message: `Failed to create dinosaur ${err}`,
      },
    });
  }
};

export const deleteDinosaur = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    const dinosaur = await Dinosaur({ ...db }).destroy({
      where: {
        id: Number.parseInt(id),
      },
    });

    if (!dinosaur) {
      res.status(408).send({
        message: "Failed to delete dinosaur",
        isSuccess: false,
      });
    }

    res.status(201).send({
      message: `Success delete dinosaur ${id}`,
      isSuccess: true,
    });
  } catch (err) {
    res.status(500).send({
      isSuccess: false,
      message: `Failed to dinosaur dinosaur ${err}`,
    });
  }
};

export const updateDinosaur = async (req, res) => {
  const {
    body: { name, description, type },
    params: { id },
  } = req || {};

  try {
    const dinosaur = await Dinosaur({ ...db }).update(
      {
        name,
        description,
        type,
        updatedAt: Date.now(),
      },
      {
        where: {
          id: Number.parseInt(id),
        },
      }
    );

    if (!dinosaur) {
      res.status(404).send({
        data: {
          message: "Failed to update dinosaru",
          isSuccess: false,
        },
      });
    }

    res.status(201).send({
      message: `Success update dinosaur ${id}`,
      isSuccess: true,
    });
  } catch (err) {
    res.status(500).send({
      data: {
        isSuccess: false,
        message: `Failed to update dinosaur ${id}`,
      },
    });
  }
};
