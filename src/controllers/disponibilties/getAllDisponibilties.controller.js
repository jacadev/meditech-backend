const { Disponibilty, Day, Timetable, Doctor, Person, Specialty } = require("../../db");

const getAllDisponibiltiesController = async () => {
    const disponibilties = await Disponibilty.findAll({
        attributes: ["id", "date"],
        include: [
            {
                model: Day,
                attributes: ["day"],
            },
            {
                model: Timetable,
                attributes: ["startTime", "endTime"],
            },
            {
                model: Doctor,
                attributes: ["profileImage", "tuitionCode"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name'],
                    },
                    {
                        model: Specialty,
                        attributes: ["specialty"],
                        through: { attributes: [] },
                    },
                ],
            }
        ]
    })

    return disponibilties;
};

module.exports = getAllDisponibiltiesController;