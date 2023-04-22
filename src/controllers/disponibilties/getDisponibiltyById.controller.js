const { Disponibilty, Day, Timetable, Doctor, Person, Specialty } = require("../../db");

const getDisponibiltyByIdController = async (disponibilty_id) => {
    const disponibilty = await Disponibilty.findOne({
        where: {
            id: disponibilty_id
        },
        attributes: ["id", "date", "status"],
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
    });

    if (!disponibilty) throw new Error(`Hubo un problema la obtener la disponibilidad con el id: ${disponibilty_id}`);

    return disponibilty
};

module.exports = getDisponibiltyByIdController;