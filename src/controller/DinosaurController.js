import db from "../model";
import Dinosaur from "../model/Dinosaur";
import {
  _sort
} from '../helper';

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
