const { Pay, Appointment, Patient, Person } = require('../../db');

const getPayByIdController = async (pay_id) => {
    const pay = await Pay.findOne({
        where: {
            id: pay_id
        },
        attributes: ["id", "createTime", "emailAddress", "address", "givenName", "surname", "currencyCode", "amount", "status"],
        include: [
            {
                model: Appointment,
                attributes: ["id", "date", "consultationReason", "status"],
                include: [
                    {
                        model: Patient,
                        attributes: ["id"],
                        include: [
                            {
                                model: Person,
                                attributes: ['first_name', 'last_name'],
                            },
                        ],
                    },
                ]
            }
        ]
    });

    if (!pay) throw new Error(`Hubo un problema la obtener el pago con el id: ${pay_id}`);

    return pay;
};

module.exports = getPayByIdController;