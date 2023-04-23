const { Disponibilty, Day, Timetable, Doctor, Person, Specialty } = require("../../db");

const getAllDisponibiltiesController = async () => {
    const disponibilties = await Disponibilty.findAll({
        attributes: ["id", "date", "status"],
        where: {
            status: true
        },
        include: [
            {
                model: Day,
                attributes: ["id", "day", "status"],
            },
            {
                model: Timetable,
                attributes: ["id", "startTime", "endTime", "status"],
            },
            {
                model: Doctor,
                attributes: ["id", "profileImage", "tuitionCode"],
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