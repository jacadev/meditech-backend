const arrayTemplateDoctors = [
  {
    id: 1,
    user_name: "mariat23",
    email: "mariat.2389@gmail.com",
    password: "string crifrado",
    image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-31-1.jpg",
    first_name: "Maria Teresa",
    last_name: "Carrillo Mendez",
    specialties: ["Medico General", "Médico Internista"],
    about_me:
      "Me caracterizo porque mi pacientes siempre son mi prioridad, y me esfuerzo por darles la mejor atencion que se merecen",
    tuition_code: "CMP 15265",
    consultation_cost: 25.5,
    phone: ["956 256 222"],
    diseases_treated: ["Diabetes", "Hipertensión", "Insuficencia Venosa"],
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle San Camilo",
    },
    reviews: [
      {
        id: 1,
        author: "Petra Perez",
        comment: "Excelente profesional me gustado mucho su consulta",
        comment_date: "25/01/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Paula Monagas",
        comment: "no fue tan bueno como esperaba, pero no esta tan mal",
        comment_date: "15/02/2023",
        rating: 3,
      },
      {
        id: 3,
        author: "Carolina Gonzalez",
        comment: "Genial, muy buen trato",
        comment_date: "23/03/2023",
        rating: 5,
      },
    ],
    avg_rating: 1,
    created_date: "15/02/2022 11:25PM",
    update_at: "25/01/2023 09:25AM",
  },
  {
    id: 2,
    user_name: "dra_ana",
    email: "dra_ana@gmail.com",
    password: "xhfae#92",
    image:
      "https://2.bp.blogspot.com/-qWTzZWZwWe4/W4f_DFB9rqI/AAAAAAAAeE8/ydwLzKYhLJkpz6pdA6EM47dGEas3CeehgCLcBGAs/s1600/3%2BDSC_1583a.jpg",
    first_name: "Ana",
    last_name: "García",
    specialties: ["Ginecología", "Obstetricia"],
    about_me:
      "Me dedico a brindar el mejor cuidado a mis pacientes y ayudarles en su bienestar y salud sexual.",
    tuition_code: "GOG 89635",
    consultation_cost: 35.25,
    phone: ["555-555-5555"],
    diseases_treated: [
      "Infecciones Vaginales",
      "Cáncer Cervical",
      "Embarazo de Alto Riesgo",
    ],
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Calle de la Salud",
    },
    reviews: [
      {
        id: 1,
        author: "Miguel Torres",
        comment:
          "La Dra. Ana es una excelente profesional, la recomiendo sin duda.",
        comment_date: "02/01/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "María Fernanda",
        comment:
          "La consulta fue muy buena, la doctora es muy amable y atenta.",
        comment_date: "10/02/2023",
        rating: 4,
      },
      {
        id: 3,
        author: "Luisa Martínez",
        comment: "Excelente atención, muy profesional y empática.",
        comment_date: "28/03/2023",
        rating: 5,
      },
    ],
    avg_rating: 2,
    created_date: "15/02/2022 11:25PM",
    update_at: "25/01/2023 09:25AM",
  },
  {
    id: 3,
    user_name: "doctor_jose",
    email: "jose_dentista@hotmail.com",
    password: "A#u2l9rF7",
    image:
      "https://st.depositphotos.com/1003098/3929/i/600/depositphotos_39296605-stock-photo-cancer-specialist-smiling-in-hospital.jpg",
    first_name: "José",
    last_name: "Ramírez",
    specialties: ["Odontólogo", "Ortodoncista"],
    about_me:
      "Me dedico a brindar la mejor atención dental posible y ayudar a mis pacientes a alcanzar sus objetivos dentales.",
    tuition_code: "DMC 75821",
    consultation_cost: 35.99,
    phone: ["123-456-7890"],
    diseases_treated: ["Caries", "Gingivitis", "Sensibilidad dental"],
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Av. Principal #123",
    },
    reviews: [
      {
        id: 1,
        author: "Ana López",
        comment: "Excelente atención y profesionalismo. Muy recomendable.",
        comment_date: "15/01/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Juan González",
        comment:
          "En general, una buena experiencia, aunque la espera fue un poco larga.",
        comment_date: "10/02/2023",
        rating: 4,
      },
      {
        id: 3,
        author: "María García",
        comment: "El Dr. Ramírez es muy bueno con los niños!",
        comment_date: "28/03/2023",
        rating: 5,
      },
    ],
    avg_rating: 5,
    created_date: "07/06/2022 10:15AM",
    update_at: "10/04/2023 02:30PM",
  },
  {
    id: 4,
    user_name: "doctor_ana",
    email: "ana_ginecologa@gmail.com",
    password: "S#9fN2d8z",
    image:
      "https://www.minneapolisheadshots.com/gallery/main/audiologist-headshot.jpg",
    first_name: "Ana",
    last_name: "Martínez",
    specialties: ["Ginecóloga", "Obstetra"],
    about_me:
      "Me dedico a brindar la mejor atención ginecológica y obstétrica posible, y ayudar a mis pacientes a mantener su salud y bienestar.",
    tuition_code: "CMP 27916",
    consultation_cost: 50.5,
    phone: ["0987654321"],
    diseases_treated: [
      "Infecciones vaginales",
      "Embarazo",
      "Cáncer de ovarios",
    ],
    location: {
      city: "Quito",
      country: "Ecuador",
      address: "Av. Principal #456",
    },
    reviews: [
      {
        id: 1,
        author: "María Sánchez",
        comment: "Excelente atención y muy amable en todo momento.",
        comment_date: "20/01/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Pedro Torres",
        comment: "Me atendió muy bien, pero la espera fue un poco larga.",
        comment_date: "05/02/2023",
        rating: 4,
      },
    ],
    avg_rating: 4,
    created_date: "15/02/2022 11:25PM",
    update_at: "25/01/2023 09:25AM",
  },
  {
    id: 5,
    user_name: "joseperez",
    email: "joseperez@hotmail.com",
    password: "cadenaencriptada",
    image:
      "https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1573492422363-K8FFCA73TJTHRXB36E54/physician+headshot.jpg",
    first_name: "José",
    last_name: "Pérez López",
    specialties: ["Odontología", "Ortodoncia"],
    about_me:
      "Soy un profesional comprometido con la salud bucal de mis pacientes, y busco brindar un tratamiento personalizado y de calidad.",
    tuition_code: "COL 48219",
    consultation_cost: 50.0,
    phone: ["753 456 789", "541 234 567"],
    diseases_treated: ["Carillas dentales", "Brackets", "Implantes dentales"],
    location: {
      city: "Barcelona",
      country: "España",
      address: "Carrer de Provença",
    },
    reviews: [
      {
        id: 1,
        author: "Laura García",
        comment: "Excelente atención y trato profesional, muy recomendado.",
        comment_date: "10/04/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Pedro Martínez",
        comment: "Un buen servicio, aunque un poco caro.",
        comment_date: "05/04/2023",
        rating: 4,
      },
      {
        id: 3,
        author: "Elena Sánchez",
        comment:
          "Muy buen resultado en el tratamiento, y el trato fue muy amable.",
        comment_date: "28/03/2023",
        rating: 5,
      },
    ],
    avg_rating: 3,
    created_date: "01/01/2023 12:00AM",
    update_at: "11/04/2023 03:15PM",
  },
  {
    id: 6,
    user_name: "johndoe",
    email: "johndoe@gmail.com",
    password: "senhaencriptada",
    image:
      "https://t4.ftcdn.net/jpg/03/30/44/33/360_F_330443300_0HS1ORxxeeBpAAA65YxpHOLMhfiTZGDP.jpg",
    first_name: "John",
    last_name: "Doe",
    specialties: ["Psicología", "Psicoterapia"],
    about_me:
      "Soy un psicólogo que se enfoca en el bienestar emocional de mis pacientes, y busco ayudarles a encontrar la mejor solución a sus problemas.",
    tuition_code: "PSI 37584",
    consultation_cost: 35.0,
    phone: ["123 456 789"],
    diseases_treated: ["Ansiedad", "Depresión", "Trastornos del sueño"],
    location: {
      city: "Nueva York",
      country: "Estados Unidos",
      address: "5th Ave",
    },
    reviews: [
      {
        id: 1,
        author: "Carla Rodríguez",
        comment:
          "Excelente atención, me ayudó mucho en mi problema de ansiedad.",
        comment_date: "08/04/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Juan Pérez",
        comment: "Muy buen profesional, aunque el precio es un poco elevado.",
        comment_date: "02/04/2023",
        rating: 4,
      },
      {
        id: 3,
        author: "Sofía Martínez",
        comment:
          "Me sentí muy cómoda durante la sesión y pude hablar abiertamente.",
        comment_date: "25/03/2023",
        rating: 5,
      },
    ],
    avg_rating: 5,
    created_date: "01/02/2023 08:30AM",
    update_at: "09/04/2023 10:45AM",
  },
  {
    id: 7,
    user_name: "pablovargas",
    email: "pablovargas@gmail.com",
    password: "contraseñaencriptada",
    image:
      "https://www.proheadshots.ca/wp-content/uploads/2016/02/doctors-headshot.jpg",
    first_name: "Pablo",
    last_name: "Vargas",
    specialties: ["Cirugía General", "Cirugía Laparoscópica"],
    about_me:
      "Soy un cirujano que se enfoca en brindar una atención médica de calidad y en ayudar a mis pacientes a mejorar su calidad de vida mediante procedimientos quirúrgicos seguros y eficaces.",
    tuition_code: "CG 27893",
    consultation_cost: 50.0,
    phone: ["555 123 456", "555 987 654"],
    diseases_treated: [
      "Hernias",
      "Cálculos biliares",
      "Enfermedades del colon",
    ],
    location: {
      city: "Madrid",
      country: "España",
      address: "Calle de Alcalá",
    },
    reviews: [
      {
        id: 1,
        author: "María Fernández",
        comment: "Excelente cirujano, me ayudó mucho con mi hernia.",
        comment_date: "05/04/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Juan Martínez",
        comment: "Muy buen trato y explicación detallada del procedimiento.",
        comment_date: "29/03/2023",
        rating: 5,
      },
      {
        id: 3,
        author: "Carlos González",
        comment:
          "Muy profesional y atento, pero el costo de la consulta es un poco elevado.",
        comment_date: "22/03/2023",
        rating: 4,
      },
    ],
    avg_rating: 5,
    created_date: "10/02/2023 11:15AM",
    update_at: "06/04/2023 08:20AM",
  },
  {
    id: 8,
    user_name: "carlabravo",
    email: "cbravo@gmail.com",
    password: "contraseñaencriptada",
    image:
      "https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg",
    first_name: "Carla",
    last_name: "Bravo",
    specialties: ["Pediatría", "Neumología"],
    about_me:
      "Me considero una pediatra comprometida con mis pacientes, enfocada en brindarles la mejor atención posible y ayudarlos a mejorar su salud. Mi especialidad en neumología pediátrica me permite tratar enfermedades respiratorias en niños con la mejor tecnología disponible.",
    tuition_code: "PM 39483",
    consultation_cost: 35.0,
    phone: ["123 456 789"],
    diseases_treated: ["Asma", "Bronquitis", "Neumonía"],
    location: {
      city: "Santiago",
      country: "Chile",
      address: "Avenida Providencia",
    },
    reviews: [
      {
        id: 1,
        author: "Lucía Pérez",
        comment: "Excelente atención, muy amable y profesional.",
        comment_date: "02/04/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Pedro González",
        comment: "Buen médico, pero la consulta se retrasó bastante.",
        comment_date: "15/03/2023",
        rating: 3,
      },
      {
        id: 3,
        author: "Javiera Fernández",
        comment: "Muy recomendable, se nota que se preocupa por sus pacientes.",
        comment_date: "29/02/2023",
        rating: 4,
      },
    ],
    avg_rating: 4,
    created_date: "20/01/2023 10:30AM",
    update_at: "04/04/2023 03:45PM",
  },
  {
    id: 9,
    user_name: "josearaujo",
    email: "jose.araujo@gmail.com",
    password: "contraseñaencriptada",
    image:
      "https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg",
    first_name: "José",
    last_name: "Araujo",
    specialties: ["Cirugía General", "Cirugía de Trauma"],
    about_me:
      "Soy un cirujano comprometido con brindar la mejor atención quirúrgica a mis pacientes. Me especializo en cirugía general y de trauma, por lo que puedo atender una amplia variedad de lesiones y enfermedades quirúrgicas. Siempre trato de estar actualizado en las últimas técnicas y tecnologías para brindar la mejor atención a mis pacientes.",
    tuition_code: "CGT 22456",
    consultation_cost: 45.0,
    phone: ["456 789 012", "123 456 789"],
    diseases_treated: ["Hernias", "Apendicitis", "Fracturas"],
    location: {
      city: "Buenos Aires",
      country: "Argentina",
      address: "Avenida Corrientes",
    },
    reviews: [
      {
        id: 1,
        author: "Martín Suárez",
        comment:
          "Excelente cirujano, la recuperación después de mi operación fue muy rápida.",
        comment_date: "10/03/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Mariana Gutiérrez",
        comment: "Buen cirujano, pero la consulta fue un poco apresurada.",
        comment_date: "20/02/2023",
        rating: 3,
      },
      {
        id: 3,
        author: "Carla Fernández",
        comment: "Muy buen trato y atención, lo recomiendo.",
        comment_date: "05/04/2023",
        rating: 4,
      },
    ],
    avg_rating: 4,
    created_date: "15/01/2023 11:20AM",
    update_at: "08/04/2023 09:30AM",
  },
  {
    id: 10,
    user_name: "juliamorales",
    email: "juliamorales@yahoo.com",
    password: "contraseñasegura",
    image:
      "https://www.10x10studios.com/cms/wp-content/uploads/2020/07/Healthcare-Provider-headshot.jpg",
    first_name: "Julia",
    last_name: "Morales",
    specialties: ["Dermatología", "Cosmetología"],
    about_me:
      "Soy una dermatóloga especializada en cosmetología. Me apasiona ayudar a mis pacientes a lograr una piel saludable y radiante mediante tratamientos y procedimientos dermatológicos avanzados. También ofrezco tratamientos cosméticos como rellenos dérmicos y botox para mejorar la apariencia de la piel y reducir las arrugas y líneas de expresión. Siempre me enfoco en brindar la mejor atención y resultados a mis pacientes.",
    tuition_code: "DMC 32587",
    consultation_cost: 60.0,
    phone: ["123 456 789"],
    diseases_treated: ["Acné", "Rosácea", "Eczema"],
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Calle Insurgentes",
    },
    reviews: [
      {
        id: 1,
        author: "Ana Martínez",
        comment: "Excelente dermatóloga, la recomiendo ampliamente.",
        comment_date: "03/04/2023",
        rating: 5,
      },
      {
        id: 2,
        author: "Sofía Castro",
        comment:
          "Muy buena atención, me gustó mucho el resultado de mi tratamiento.",
        comment_date: "15/03/2023",
        rating: 4,
      },
      {
        id: 3,
        author: "Carlos González",
        comment:
          "La atención fue buena, pero el tratamiento no funcionó como esperaba.",
        comment_date: "10/04/2023",
        rating: 3,
      },
    ],
    avg_rating: 4,
    created_date: "10/02/2023 02:40PM",
    update_at: "04/04/2023 11:00AM",
  },
];
