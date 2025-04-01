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
        imagen: "../../../../src/assets/img/sala-juntas.jpg",
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
        imagen: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600",
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
        imagen: "../../../../src/assets/img/squash.jpg",
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
        imagen: "../../../../src/assets/img/barbecue.jpg",
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
        imagen: "../../../../src/assets/img/cinema.jpg",
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
        imagen: "../../../../src/assets/img/coworking.jpg",
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
    }
    
]
