const { Disponibilty, Day, Timetable, Doctor, Person, Specialty } = require("../../db");

const getAllDisponibiltiesController = async () => {
    const disponibilties = await Disponibilty.findAll({
        attributes: ["id", "date", "status"],
        include: [
            {
                model: Day,
                attributes: ["day", "status"],
            },
            {
                model: Timetable,
                attributes: ["startTime", "endTime", "status"],
            },
            {
                model: Doctor,
                attributes: ["profileImage", "tuitionCode"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name', 'status'],
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