const { Review, Patient, Doctor, Person, Specialty, Rol } = require("../../db");

const getReviewByIdController = async (review_id) => {
    const review = await Review.findOne({
        where: {
            id: review_id
        },
        attributes: ["id", "comment", "rating", "status", "comment_date", "status"],
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
        ]
    });

    if (!review) throw new Error(`Hubo un problema la obtener el review con el id: ${review_id}`);

    return review;
};

module.exports = getReviewByIdController;