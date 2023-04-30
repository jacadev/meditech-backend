const { Op, literal } = require('sequelize');
const { Doctor, Specialty, Person, Rol, Patient } = require("../../db");

const getPersonByNameController = async (name) => {
    const nameFilter = name.toLowerCase();

    const personFilter = await Person.findAll({
        attributes: ['userName', 'email', 'first_name', 'last_name', 'phone', 'age', 'gender', 'rol_id'],
        where: {
            [Op.or]: [
                { first_name: { [Op.iLike]: `%${nameFilter}%` } },
                { last_name: { [Op.iLike]: `%${nameFilter}%` } },
                { [Op.and]: literal(`lower(concat("first_name", ' ', "last_name")) iLike '%${nameFilter}%'`) },
            ]
        },
        include: [
            {
                model: Rol,
                attributes: ['nameRol']
            },
            {
                model: Doctor,
                attributes: ['id', 'about_me', 'profile_image', 'tuition_code', 'consultation_cost', 'location', 'diseases_treated'],
                include: [
                    {
                        model: Specialty,
                        attributes: ['specialty'],
                        through: { attributes: [] }
                    },
                ],
                required: false // solo se incluirá si existe una relación
            },
            {
                model: Patient,
                attributes: ['id'],
                required: false // solo se incluirá si existe una relación
            }
        ],
    })

    if (personFilter.length === 0) throw new Error(`No se encontró la persona con el nombre ingresado: ${nameFilter} .`)

    return personFilter;
};

module.exports = getPersonByNameController;