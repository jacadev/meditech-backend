const preloadReviews = [
  {
    patient_id: 1,
    comment: "Excelente profesional me gustado mucho su consulta",
    rating: 5,
    doctor_id: 1
  },
  {
    patient_id: 1,
    comment: "no fue tan bueno como esperaba, pero no esta tan mal",
    rating: 3,
    doctor_id: 2
  },
  {
    patient_id: 1,
    comment: "Genial, muy buen trato",
    rating: 5,
    doctor_id: 3
  },
  {
    patient_id: 2,
    comment:
      "La Dra. Ana es una excelente profesional, la recomiendo sin duda.",
    rating: 5,
    doctor_id: 4
  },
  {
    patient_id: 2,
    comment: "La consulta fue muy buena, la doctora es muy amable y atenta.",
    rating: 4,
    doctor_id: 5
  },
  {
    patient_id: 2,
    comment: "Excelente atención, muy profesional y empática.",
    rating: 4,
    doctor_id: 6
  },
  {
    patient_id: 3,
    comment: "Excelente atención y profesionalismo. Muy recomendable.",
    rating: 5,
    doctor_id: 7
  },
  {
    patient_id: 3,
    comment:
      "En general, una buena experiencia, aunque la espera fue un poco larga.",
    rating: 4,
    doctor_id: 8
  },
  {
    patient_id: 3,
    comment: "El Dr. Ramírez es muy bueno con los niños!",
    rating: 5,
    doctor_id: 9
  },
  {
    patient_id: 4,
    comment: "Excelente atención y profesionalismo. Muy recomendable.",
    rating: 5,
    doctor_id: 10
  },
  {
    patient_id: 4,
    comment:
      "En general, una buena experiencia, aunque la espera fue un poco larga.",
    rating: 4,
    doctor_id: 10
  },
  {
    patient_id: 4,
    comment: "El Dr. Ramírez es muy bueno con los niños!",
    rating: 5,
    doctor_id: 9
  },
  {
    patient_id: 5,
    comment: "Excelente atención y muy amable en todo momento.",
    rating: 5,
    doctor_id: 8
  },
  {
    patient_id: 5,
    comment: "Me atendió muy bien, pero la espera fue un poco larga.",
    rating: 4,
    doctor_id: 7
  },
  {
    patient_id: 5,
    comment: "Excelente atención y trato profesional, muy recomendado.",
    rating: 5,
    doctor_id: 6
  },
  {
    patient_id: 6,
    comment: "Pesimo servicio, y muy caro.",
    rating: 2,
    doctor_id: 5
  },
  {
    patient_id: 6,
    comment: "Muy buen resultado en el tratamiento, y el trato fue muy amable.",
    rating: 5,
    doctor_id: 4
  },
  {
    patient_id: 6,
    comment: "Excelente atención, me ayudó mucho en mi problema de ansiedad.",
    rating: 5,
    doctor_id: 3
  },
  {
    patient_id: 7,
    comment: "Muy buen profesional, aunque el precio es un poco elevado.",
    rating: 4,
    doctor_id: 2
  },
  {
    patient_id: 7,
    comment:
      "Me sentí muy cómoda durante la sesión y pude hablar abiertamente.",
    rating: 5,
    doctor_id: 1
  },
  {
    patient_id: 7,
    comment: "Excelente cirujano, me ayudó mucho con mi hernia.",
    rating: 5,
    doctor_id: 1
  },
  {
    patient_id: 8,
    comment: "Muy buen trato y explicación detallada del procedimiento.",
    rating: 5,
    doctor_id: 2
  },
  {
    patient_id: 8,
    comment:
      "Muy profesional y atento, pero el costo de la consulta es un poco elevado.",
    rating: 4,
    doctor_id: 3
  },
  {
    patient_id: 8,
    comment: "Excelente atención, muy amable y profesional.",
    rating: 5,
    doctor_id: 5
  },
  {
    patient_id: 9,
    comment: "Buen médico, pero la consulta se retrasó bastante.",
    rating: 3,
    doctor_id: 6
  },
  {
    patient_id: 9,
    comment: "Muy recomendable, se nota que se preocupa por sus pacientes.",
    rating: 4,
    doctor_id: 7
  },
  {
    patient_id: 9,
    comment:
      "Excelente cirujano, la recuperación después de mi operación fue muy ráppatient_ida.",
    rating: 5,
    doctor_id: 8
  },
  {
    patient_id: 10,
    comment: "Buen cirujano, pero la consulta fue un poco apresurada.",
    rating: 3,
    doctor_id: 9
  },
  {
    patient_id: 10,
    comment: "Muy buen trato y atención, lo recomiendo.",
    rating: 4,
    doctor_id: 10
  },
  {
    patient_id: 10,
    comment: "Excelente dermatóloga, la recomiendo ampliamente.",
    rating: 5,
    doctor_id: 10
  },
  {
    patient_id: 1,
    comment:
      "Muy buena atención, me gustó mucho el resultado de mi tratamiento.",
    rating: 4,
    doctor_id: 9
  },
  {
    patient_id: 1,
    comment:
      "La atención fue buena, pero el tratamiento no funcionó como esperaba.",
    rating: 3,
    doctor_id: 8
  },
  {
    patient_id: 2,
    comment: "Genial, muy buen trato",
    rating: 5,
    doctor_id: 7
  },
  {
    patient_id: 3,
    comment:
      "La Dra. Ana es una excelente profesional, la recomiendo sin duda.",
    rating: 5,
    doctor_id: 6
  },
  {
    patient_id: 4,
    comment: "La consulta fue muy buena, la doctora es muy amable y atenta.",
    rating: 4,
    doctor_id: 5
  },
  {
    patient_id: 5,
    comment: "Excelente atención, muy profesional y empática.",
    rating: 5,
    doctor_id: 4
  },
  {
    patient_id: 6,
    comment: "Excelente atención y profesionalismo. Muy recomendable.",
    rating: 5,
    doctor_id: 3
  },
  {
    patient_id: 7,
    comment:
      "En general, una buena experiencia, aunque la espera fue un poco larga.",
    rating: 4,
    doctor_id: 2
  },
  {
    patient_id: 8,
    comment: "El Dr. Ramírez es muy bueno con los niños!",
    rating: 5,
    doctor_id: 1
  },
  {
    patient_id: 9,
    comment: "Excelente atención y profesionalismo. Muy recomendable.",
    rating: 5,
    doctor_id: 1
  },
];

module.exports = preloadReviews;
