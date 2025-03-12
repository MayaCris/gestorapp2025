let diasHabiles = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

export const franjas = [
    { inicio: "09:00", fin: "10:00" },
    { inicio: "10:00", fin: "11:00" },
    { inicio: "11:00", fin: "12:00" },
    { inicio: "12:00", fin: "13:00" },
    { inicio: "13:00", fin: "14:00" },
    { inicio: "14:00", fin: "15:00" },
    { inicio: "15:00", fin: "16:00" },
    { inicio: "16:00", fin: "17:00" }
];

export let datosAPI = [

    {
        id: 1,
        nombre: "Sala de Juntas",
        descripcion: "Sala de juntas para 8 personas",
        imagen: "NAN",
        capacidad: 8,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 2,
        nombre: "Gimnasio",
        descripcion: "Gimnasio equipado con máquinas cardiovasculares y pesas",
        imagen: "NAN",
        capacidad: 10,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 3,
        nombre: "Piscina",
        descripcion: "Piscina semiolímpica con zona de descanso",
        imagen: "../../../../src/assets/img/e-piscina.jpg",
        capacidad: 15,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 4,
        nombre: "Salón Social",
        descripcion: "Salón para eventos con capacidad para 50 personas",
        imagen: "../../../../src/assets/img/e-salonSocial.jpg",
        capacidad: 50,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 5,
        nombre: "Cancha de Squash",
        descripcion: "Cancha para jugar squash con iluminación",
        imagen: "NAN",
        capacidad: 2,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 6,
        nombre: "Zona BBQ",
        descripcion: "Zona para asados con parrilla y mesas",
        imagen: "../../../../src/assets/img/e-bbq.jpg",
        capacidad: 12,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 7,
        nombre: "Sala de Cine",
        descripcion: "Sala equipada con proyector y sonido envolvente",
        imagen: "NAN",
        capacidad: 20,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 8,
        nombre: "Coworking",
        descripcion: "Espacio con escritorios y Wi-Fi para trabajar",
        imagen: "NAN",
        capacidad: 8,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 9,
        nombre: "Cancha Múltiple",
        descripcion: "Cancha para fútbol, baloncesto y voleibol",
        imagen: "../../../../src/assets/img/e-cancha.jpg",
        capacidad: 10,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    },
    {
        id: 10,
        nombre: "Parque Infantil",
        descripcion: "Zona con columpios y toboganes para niños",
        imagen: "NAN",
        capacidad: 15,
        horarios: diasHabiles.map(dia => ({
            dia,
            franjas: franjas
        }))
    }
]
