const preloadDoctors = [
  {
    user_name: "mariat23",
    email: "mariat.2389@gmail.com",
    password: "string crifrado",
    first_name: "Maria Teresa",
    last_name: "Carrillo Mendez",
    phone: ["956 256 222"],
    age: 80,
    gender: "Femenino",
    about_me:
      "Me caracterizo porque mi pacientes siempre son mi prioridad, y me esfuerzo por darles la mejor atencion que se merecen",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-31-1.jpg",
    tuition_code: "CMP 15265",
    consultation_cost: 25.5,
    location: {
      city: "Bogota",
      country: "Colombia",
      address: "Calle San Camilo",
    },
    diseases_treated: ["Diabetes", "Hipertensión", "Insuficencia Venosa"],
    specialties: [1, 2],
    rol_id: [1],
  },
  {
    user_name: "dra_ana",
    email: "dra_ana@gmail.com",
    password: "xhfae#92",
    first_name: "Ana",
    last_name: "García",
    phone: ["555-555-5555"],
    age: 45,
    gender: "Femenino",
    about_me:
      "Me dedico a brindar el mejor cuidado a mis pacientes y ayudarles en su bienestar y salud sexual.",
    profile_image:
      "https://2.bp.blogspot.com/-qWTzZWZwWe4/W4f_DFB9rqI/AAAAAAAAeE8/ydwLzKYhLJkpz6pdA6EM47dGEas3CeehgCLcBGAs/s1600/3%2BDSC_1583a.jpg",
    tuition_code: "GOG 89635",
    consultation_cost: 35.25,
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Calle de la Salud",
    },
    diseases_treated: [
      "Infecciones Vaginales",
      "Cáncer Cervical",
      "Embarazo de Alto Riesgo",
    ],
    specialties: [3, 4],
    rol_id: [1],
  },
  {
    user_name: "doctor_jose",
    email: "jose_dentista@hotmail.com",
    password: "A#u2l9rF7",
    first_name: "José",
    last_name: "Ramírez",
    phone: ["123-456-7890"],
    age: 55,
    gender: "Masculino",
    about_me:
      "Me dedico a brindar la mejor atención dental posible y ayudar a mis pacientes a alcanzar sus objetivos dentales.",
    profile_image:
      "https://st.depositphotos.com/1003098/3929/i/600/depositphotos_39296605-stock-photo-cancer-specialist-smiling-in-hospital.jpg",
    tuition_code: "DMC 75821",
    consultation_cost: 35.99,
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Av. Principal #123",
    },
    diseases_treated: ["Caries", "Gingivitis", "Sensibilidad dental"],
    specialties: [5, 6],
    rol_id: [1],
  },
  {
    user_name: "doctor_ana",
    email: "ana_ginecologa@gmail.com",
    password: "S#9fN2d8z",
    first_name: "Ana",
    last_name: "Martínez",
    phone: ["0987654321"],
    age: 66,
    gender: "Femenino",
    about_me:
      "Me dedico a brindar la mejor atención ginecológica y obstétrica posible, y ayudar a mis pacientes a mantener su salud y bienestar.",
    profile_image:
      "https://www.minneapolisheadshots.com/gallery/main/audiologist-headshot.jpg",
    tuition_code: "CMP 27916",
    consultation_cost: 50.5,
    location: {
      city: "Quito",
      country: "Ecuador",
      address: "Av. Principal #456",
    },
    diseases_treated: [
      "Infecciones vaginales",
      "Embarazo",
      "Cáncer de ovarios",
    ],
    specialties: [7, 34],
    rol_id: [1],
  },
  {
    user_name: "joseperez",
    email: "joseperez@hotmail.com",
    password: "cadenaencriptada",
    first_name: "José",
    last_name: "Pérez López",
    phone: ["753 456 789", "541 234 567"],
    age: 89,
    gender: "Masculino",
    about_me:
      "Soy un profesional comprometido con la salud bucal de mis pacientes, y busco brindar un tratamiento personalizado y de calidad.",
    profile_image:
      "https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1573492422363-K8FFCA73TJTHRXB36E54/physician+headshot.jpg",
    tuition_code: "COL 48219",
    consultation_cost: 50.0,
    location: {
      city: "Barcelona",
      country: "España",
      address: "Carrer de Provença",
    },
    diseases_treated: ["Carillas dentales", "Brackets", "Implantes dentales"],
    specialties: [32, 22],
    rol_id: [1],
  },
  {
    user_name: "johndoe",
    email: "johndoe@gmail.com",
    password: "senhaencriptada",
    first_name: "John",
    last_name: "Doe",
    phone: ["123 456 789"],
    age: 32,
    gender: "Masculino",
    about_me:
      "Soy un psicólogo que se enfoca en el bienestar emocional de mis pacientes, y busco ayudarles a encontrar la mejor solución a sus problemas.",
    profile_image:
      "https://t4.ftcdn.net/jpg/03/30/44/33/360_F_330443300_0HS1ORxxeeBpAAA65YxpHOLMhfiTZGDP.jpg",
    tuition_code: "PSI 37584",
    consultation_cost: 35.0,
    location: {
      city: "Nueva York",
      country: "Estados Unidos",
      address: "5th Ave",
    },
    diseases_treated: ["Ansiedad", "Depresión", "Trastornos del sueño"],
    specialties: [3, 65],
    rol_id: [1],
  },
  {
    user_name: "pablovargas",
    email: "pablovargas@gmail.com",
    password: "contraseñaencriptada",
    first_name: "Pablo",
    last_name: "Vargas",
    phone: ["555 123 456", "555 987 654"],
    age: 45,
    gender: "Masculino",
    about_me:
      "Soy un cirujano que se enfoca en brindar una atención médica de calidad y en ayudar a mis pacientes a mejorar su calidad de vida mediante procedimientos quirúrgicos seguros y eficaces.",
    profile_image:
      "https://www.proheadshots.ca/wp-content/uploads/2016/02/doctors-headshot.jpg",
    tuition_code: "CG 27893",
    consultation_cost: 50.0,
    location: {
      city: "Madrid",
      country: "España",
      address: "Calle de Alcalá",
    },
    diseases_treated: [
      "Hernias",
      "Cálculos biliares",
      "Enfermedades del colon",
    ],
    specialties: [53, 3],
    rol_id: [1],
  },
  {
    user_name: "carlabravo",
    email: "cbravo@gmail.com",
    password: "contraseñaencriptada",
    first_name: "Carla",
    last_name: "Bravo",
    phone: ["123 888 789"],
    age: 54,
    gender: "Masculino",
    about_me:
      "Me considero una pediatra comprometida con mis pacientes, enfocada en brindarles la mejor atención posible y ayudarlos a mejorar su salud. Mi especialidad en neumología pediátrica me permite tratar enfermedades respiratorias en niños con la mejor tecnología disponible.",
    profile_image:
      "https://images.squarespace-cdn.com/content/v1/53aa5722e4b0ada1a70119f2/1529694594561-7ERUUT9270RZI2R946J1/CORP20180521-Freeman+%284+of+6%29-Edit.jpg",
    tuition_code: "PM 3569483",
    consultation_cost: 35.0,
    location: {
      city: "Santiago",
      country: "Chile",
      address: "Avenida Providencia",
    },
    diseases_treated: ["Asma", "Bronquitis", "Neumonía"],
    specialties: [34, 22],
    rol_id: [1],
  },
  {
    user_name: "josearaujo",
    email: "jose.araujo@gmail.com",
    password: "contraseñaencriptada",
    first_name: "José",
    last_name: "Araujo",
    phone: ["456 789 012", "123 456 789"],
    age: 58,
    gender: "Masculino",
    about_me:
      "Soy un cirujano comprometido con brindar la mejor atención quirúrgica a mis pacientes. Me especializo en cirugía general y de trauma, por lo que puedo atender una amplia variedad de lesiones y enfermedades quirúrgicas. Siempre trato de estar actualizado en las últimas técnicas y tecnologías para brindar la mejor atención a mis pacientes.",
    profile_image:
      "https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg",
    tuition_code: "CGT 22456",
    consultation_cost: 45.0,
    location: {
      city: "Buenos Aires",
      country: "Argentina",
      address: "Avenida Corrientes",
    },
    diseases_treated: ["Hernias", "Apendicitis", "Fracturas"],
    specialties: [53, 23],
    rol_id: [1],
  },
  {
    user_name: "juliamorales",
    email: "juliamorales@yahoo.com",
    password: "contraseñasegura",
    first_name: "Julia",
    last_name: "Morales",
    phone: ["123 456 789"],
    age: 33,
    gender: "Femenino",
    about_me:
      "profile_imageuna dermatóloga especializada en cosmetología. Me apasiona ayudar a mis pacientes a lograr una piel saludable y radiante mediante tratamientos y procedimientos dermatológicos avanzados. También ofrezco tratamientos cosméticos como rellenos dérmicos y botox para mejorar la apariencia de la piel y reducir las arrugas y líneas de expresión. Siempre me enfoco en brindar la mejor atención y resultados a mis pacientes.",
    profile_image:
      "https://static8.depositphotos.com/1518767/1030/i/950/depositphotos_10304558-stock-photo-happy-female-doctor-writing-her.jpg",
    tuition_code: "DMC 32587",
    consultation_cost: 60.0,
    location: {
      city: "Ciudad de México",
      country: "México",
      address: "Calle Insurgentes",
    },
    diseases_treated: ["Acné", "Rosácea", "Eczema"],
    specialties: [45, 3],
    rol_id: [1],
  },
  // Probando con más médicos
  {
    user_name: "joselopez",
    email: "jose.lopez@gmail.com",
    password: "myencryptedpassword",
    first_name: "Jose",
    last_name: "Lopez Hernandez",
    phone: ["311 223 4455"],
    age: 52,
    gender: "Masculino",
    about_me:
      "Soy un médico comprometido con dar la mejor atención a mis pacientes.",
    profile_image:
      "https://e9g2x6t2.rocketcdn.me/wp-content/uploads/2021/01/Professional-Headshot-Examples-35.jpg",
    tuition_code: "CMP 98765",
    consultation_cost: 30.0,
    location: {
      city: "Cali",
      country: "Colombia",
      address: "Carrera 10 #22-33"
    },
    diseases_treated: ["Gripe", "Bronquitis", "Asma"],
    specialties: [3, 5],
    rol_id: [1]
  },
];

module.exports = preloadDoctors;
