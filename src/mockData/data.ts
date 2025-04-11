export const aboutUsCards = [
    {
        id: "0",
        icon: "/images/muscle-icon.png",
        title: "Entrenamiento Personalizado",
        description:
            "Programas diseñados exclusivamente para tus objetivos y nivel físico.",
    },
    {
        id: "1",
        icon: "/images/nutrition-icon.png",
        title: "Planes de Nutrición",
        description:
            "Dietas equilibradas creadas por expertos para maximizar tus resultados.",
    },
    {
        id: "2",
        icon: "/images/equipment-icon.png",
        title: "Equipo de Última Generación",
        description:
            "Máquinas y pesas premium para un entrenamiento seguro y efectivo.",
    },
];

export const gymPlans = [
    {
        id: "0",
        type: "gym",
        duration: "7 días",
        price: 220,
        caption: "Semanal",
        features: [
            "7 días de acceso al gym",
            "Area de cardio",
            "Lockers",
            "Duchas",
        ],
    },
    {
        id: "1",
        type: "gym",
        duration: "30 días",
        price: 500,
        caption: "Mes - Estudiante",
        features: [
            "Acceso ilimitado",
            "Area de cardio",
            "Plan de entrenamiento personalizado",
            "Descuentos en clases",
            "Registro de un invitado por mes",
        ],
    },
    {
        id: "2",
        type: "gym",
        duration: "30 días",
        price: 650,
        caption: "Mensualidad",
        features: [
           "Acceso ilimitado",
            "Area de cardio",
            "2 clases por semana",
            "Descuentos en suplementos",
        ],
    },
];

// En tu archivo data.js o donde tengas los mock data
export const cyclingPlans = [
    {
        id: "0",
        type: "cycling",
        duration: "7 clases",
        price: 450,
        caption: "Plan básico",
        features: [
            "7 clases de cycling",
            "15 días de vigencia de las clases",
            "Toalla incluida",
        ],
    },
    {
        id: "1",
        type: "cycling",
        duration: "Full access",
        price: 800,
        caption: "Plan premium mensual",
        features: [
            "30 clases",
            "Acceso total a las clases",
            "Toalla y locker incluido",
            "Descuento en suplementos",
            "1 invitado por mes",
        ],
    },
    {
        id: "2",
        type: "cycling",
        duration: "15 clases",
        price: 1000,
        caption: "Plan plata",
        features: [
            "15 clases ",
            "30 días de vigencia las clases",
            "Toalla y locker premium",
            "Acceso prioritario",
        ],
    },
];

export const gymFaq = [
    {
        id: "0",
        question: "¿Cuántas veces a la semana debo entrenar para ver resultados?",
        answer: [
            "Frecuencia ideal según objetivos:",
            "Principiantes: 3-4 días/semana (rutinas full-body)",
            "Hipertrofia avanzada: 4-6 días (split por grupos musculares)",
            "Fuerza máxima: 3-5 días (énfasis en ejercicios compuestos)",
            "Mantenimiento: 2-3 días/semana",
            "NOTA: La consistencia > frecuencia. Mejor 3 días/semana constante que 5 días irregular."
        ],
    },
    {
        id: "1",
        question: "¿Cómo optimizar mi rutina para ganar músculo?",
        answer: [
            "Estrategias comprobadas:",
            "Prioriza ejercicios multiarticulares: sentadillas, peso muerto, press banca, dominadas",
            "Progresión inteligente: aumenta 2-5% de peso cuando completes todas las repeticiones",
            "Rango de repeticiones: 6-12 para hipertrofia, 3-5 para fuerza",
            "Tiempo bajo tensión: 30-45 segundos por serie",
            "Descanso entre series: 1.5-2 minutos para máximo crecimiento"
        ],
    },
    {
        id: "2",
        question: "¿Cardio antes o después de pesas?",
        answer: [
            "Recomendación basada en evidencia:",
            "Post-entrenamiento: Ideal para priorizar ganancia muscular",
            "Días separados: Óptimo para objetivos de composición corporal",
            "Cardio recomendado",
            "HIIT: 2x/semana (20 min sesiones)",
            "LISS: 2-3x/semana (30-45 min a 60-70% FCmáx)",
            "NOTA: El cardio matutino en ayunas solo muestra ventajas marginales para atletas avanzados"
        ],
    },
    {
        id: "3",
        question: "¿Cuánta proteína necesito realmente?",
        answer: [
            "Requisitos proteicos científicos:",
            "Sedentarios: 0.8g/kg",
            "Deportistas recreativos: 1.2-1.6g/kg",
            "Atletas fuerza: 1.6-2.2g/kg",
            "Ejemplo práctico",
            "Persona de 75kg buscando hipertrofia: 120-165g/día",
            "Distribución óptima",
            "4-5 comidas con 30-40g de proteína de alta calidad (valor biológico >90)",
            "Suplementación solo cuando sea necesaria para alcanzar metas"
        ],
    },
    {
        id: "4",
        question: "¿Cómo romper un estancamiento?",
        answer: [
            "Estrategias avanzadas:",
            "Sobrecarga progresiva: Aumenta volumen (series/semana) gradualmente",
            "Variación estratégica: Cambia ángulos, agarres o ROM cada 6-8 semanas",
            "Técnicas de intensidad",
            "Rest-pause (pausa-descanso)",
            "Cluster sets",
            "Repeticiones excéntricas",
            "Deload cada 6-8 semanas: Reduce volumen 40-50% por 1 semana"
        ],
    },
    {
        id: "5",
        question: "¿Son necesarios los suplementos?",
        answer: [
            "Jerarquía de importancia:",
            "Alimentación adecuada (60% del resultado)",
            "Descanso adecuado (30%)",
            "Suplementación (10%)",
            "Suplementos básicos con evidencia:",
            "Proteína whey (cuando no se alcanzan metas)",
            "Creatina monohidrato (3-5g/día)",
            "Cafeína (pre-entreno, 3-6mg/kg)",
            "Opcionales para avanzados:",
            "Citrulina malato (6-8g pre-entreno)",
            "Beta-alanina (3-6g/día)"
        ],
    },
    {
        id: "6",
        question: "¿Cuánto tiempo debo descansar entre series?",
        answer: [
            "Guía basada en objetivos:",
            "Fuerza máxima (1-5 repes): 3-5 minutos",
            "Hipertrofia (6-12 repes): 1.5-2 minutos",
            "Resistencia muscular (15+ repes): 30-60 segundos",
            "Factores clave:",
            "Recuperación completa del sistema nervioso",
            "Restablecimiento de ATP-CP (>95%)",
            "Recuperación metabólica"
        ],
    },
    {
        id: "7",
        question: "¿Cómo evitar lesiones?",
        answer: [
            "Protocolo preventivo:",
            "Calentamiento dinámico: 10-15 min (movilidad + activación)",
            "Progresión gradual: No aumentar peso más del 10% semanal",
            "Técnica perfecta",
            "Controle motor antes de carga",
            "ROM completo sin compensaciones",
            "Trabajo accesorio",
            "Movilidad 3x/semana",
            "Core stability diario"
        ],
    },
    {
        id: "8",
        question: "¿Entrenar en ayunas es bueno?",
        answer: [
            "Ventajas potenciales:",
            "Mayor oxidación de grasas (efecto agudo)",
            "Adaptaciones mitocondriales",
            "Desventajas:",
            "Riesgo de catabolismo muscular en sesiones >60 min",
            "Rendimiento reducido en alta intensidad",
            "Recomendación práctica:",
            "Sesiones <45 min de intensidad moderada",
            "Suplementar con 10g BCAA si se entrena ayunas"
        ],
    },
    {
        id: "9",
        question: "¿Cuánto tardan en verse resultados reales?",
        answer: [
            "Línea temporal realista:",
            "Primeras 2-4 semanas: Mejoras neurales (no visibles)",
            "4-8 semanas: Cambios iniciales en composición corporal",
            "3-6 meses: Resultados visibles claramente",
            "1 año+: Transformación completa",
            "Factores clave:",
            "Consistencia en entrenamiento y nutrición",
            "Progresión adecuada de cargas",
            "Recuperación óptima (sueño + manejo estrés)",
            "NOTA: Tomar medidas antropométricas semanales > confiar solo en el espejo"
        ],
    }
];