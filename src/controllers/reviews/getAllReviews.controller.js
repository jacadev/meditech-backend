const { Review, Patient, Doctor, Person, Specialty, Rol } = require("../../db");

const getAllReviewsController = async () => {
    const reviews = await Review.findAll({
        attributes:["id", "comment", "rating", "status", "comment_date", "status"],
        include: [
            {
                model: Doctor,
                attributes: ["id", "profileImage", "tuitionCode"],
                through: { attributes: [] },
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name', 'status'],
                        include: [
                            {
                                model: Rol,
                                attributes: ['name_rol'],
                            }
                        ]
                    },
                    {
                        model: Specialty,
                        attributes: ["specialty"],
                        through: { attributes: [] },
                    },
                ],
            },
            {
                model: Patient,
                attributes: ["id"],
                include: [
                    {
                        model: Person,
                        attributes: ['first_name', 'last_name', 'status'],
                        include: [
                            {
                                model: Rol,
                                attributes: ['name_rol'],
                            }
                        ]
                    },
                ],
            },
        ],
    });

    return reviews;
};

module.exports = getAllReviewsController;