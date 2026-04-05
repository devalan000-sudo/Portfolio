export const proyectosList = [
  { id: "ecommerce", title: "Sport Store E-commerce Full Stack", description: "Tienda en línea donde puedes registrarte, ver productos, agregar al carrito, comprar y pagar con tarjeta.", tech: ["logos:java", "logos:spring-icon", "logos:javascript", "logos:react", "logos:mysql-icon", "logos:tailwindcss-icon"], icon: "ri:shopping-bag-3-line", image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773115739/Presentacion_ceavfz.png", github: "https://github.com/tu-usuario/ecommerce", demo: "https://ecommerce-demo.com" },
  { id: "medical-api", title: "Lion Bank ATM Full Stack", description: "Cajero Automático desarrollado con Springboot y React", tech: ["logos:java", "logos:spring-icon", "logos:javascript", "logos:react", "logos:mysql-icon", "logos:tailwindcss-icon"], icon: "ri:bank-line", image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773199266/ImagenInicio_bfgnwv.png", github: "https://github.com/tu-usuario/medical-api", demo: "https://medical-demo.com" }
];

export const projectDetailsMap = {
  "ecommerce": {
    title: "Sport Store E-commerce Full Stack",
    description: "Plataforma completa de comercio electrónico que permite a los usuarios gestionar productos, carritos de compras y realizar pedidos de manera segura.",
    video: "https://www.youtube.com/embed/0ncfUHsydIY",
    fullStory: "Desarrollé una aplicación web de comercio electrónico completamente funcional con un backend robusto utilizando Spring Boot y seguridad JWT para la autenticación. El frontend está construido con React y Tailwind CSS para una experiencia de usuario moderna y responsiva. Implementé funcionalidades como gestión de inventario, procesamiento de pagos, historial de pedidos y panel de administración.",
    features: [
      "Autenticación segura con JWT y roles de usuario",
      "Gestión de productos con CRUD completo",
      "Carrito de compras persistente",
      "Procesamiento de pagos integrado",
      "Diseño responsivo para móvil y escritorio",
      "Confirmación de cuenta por email",
      "Búsqueda de productos",
      "Historial de pedidos"
    ],
    screenshots: [
      {
        title: "Sistema de Login y Autenticación",
        description: "Registro con contraseña encriptada mediante BCrypt y sistema de doble token (Access + Refresh) con sesiones de hasta 7 días. Los Refresh Tokens se almacenan en BD permitiendo invalidación inmediata. Implementa rotación de tokens y usa Spring Security con roles (CLIENT/ADMIN) y filtros JWT. Proceso: registro → correo de confirmación → login. El usuario se registra con email/contraseña, el sistema verifica que el correo no exista, guarda como 'no confirmado' (enabled=false) y envía enlace de confirmación por email. Una vez confirmado, puede iniciar sesión y el sistema valida que la cuenta esté activa.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773113436/Login_ihcdou.png"
      },
      {
        title: "Carrito de Compras",
        description: "Gestión de productos antes de comprar con persistencia en BD (usuario + producto + cantidad). Al agregar un producto verifica stock suficiente; si ya existe, incrementa la cantidad. El checkout valida stock, descuenta inventario y elimina items del carrito en transacción atómica. Incluye validaciones de seguridad (previene eliminar items de otros usuarios) y logging de operaciones.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773113436/Carrito_sqhacb.png"
      },
      {
        title: "Catálogo de Productos",
        description: "Explora productos sin necesidad de cuenta. Cada producto muestra: nombre, descripción, precio, stock, categoría e imagen. Incluye búsqueda por nombre (no distingue mayúsculas/minúsculas).",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773113437/Productos_n6onev.png"
      },
      {
        title: "Pedidos",
        description: "Resultado final del proceso de compra. El sistema toma los productos del carrito, crea el pedido con fecha actual y calcula el total (precio × cantidad). Antes de confirmar verifica stock suficiente, descarga inventario automáticamente y vacía el historial. Muestra historial de pedidos ordenado desde el más reciente con productos comprados, fecha y total.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773113436/Pedidos_zhuko0.png"
      },
      {
        title: "Pagos",
        description: "Integración con Stripe para cobros seguros. Al terminar la compra, el cliente es redirigido a página segura de Stripe para datos de pago. El sistema recibe notificación automática del resultado: pedido queda 'pagado' o 'fallido' según el caso.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773113436/Pagos_rpkgve.png"
      }
    ],
    tech: [
      {name: "Java", icon: "logos:java"},
      {name: "Spring", icon: "logos:spring-icon"},
      {name: "MySQL", icon: "logos:mysql-icon"},
      {name: "JavaScript", icon: "logos:javascript"},
      {name: "React", icon: "logos:react"},
      {name: "Tailwind", icon: "logos:tailwindcss-icon"}
    ]
  },
  "medical-api": {
    title: "Lion Bank ATM Full Stack",
    description: "Aplicación web bancaria con varios tipos de cuenta (Corriente, Ahorros, Inversión), transacciones e historial",
    video: "https://www.youtube.com/embed/tetNwZ3H408",
    fullStory: "Sistema bancario web que permite a los usuarios gestionar sus cuentas, realizar transferencias, consultar historial de transacciones y administrar sus finanzas de manera segura. Construido con Spring Boot para el backend y React para el frontend, garantizando una experiencia fluida y segura.",
    features: [
      "Gestión de cuentas bancarias",
      "Transferencias entre cuentas",
      "Historial de transacciones",
      "Seguridad con JWT",
      "Diseño responsivo para móvil y escritorio",
      "Registro con verificación de cuenta por email",
      "Depósitos y retiros",
      "Transferencias a terceros con comisión"
    ],
    screenshots: [
      {
        title: "Registro y verificación de cuenta",
        description: "El usuario crea una cuenta con nombre, correo y contraseña encriptada. Inmediatamente se envía un código de verificación de 6 dígitos al correo. El usuario debe ingresar el código para activar su cuenta, garantizando que el correo pertenece a quien se registró.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198731/LionBankInicio_wkdkpj.png"
      },
      {
        title: "Depositar",
        description: "Función para agregar dinero a la cuenta bancaria. El usuario selecciona una cuenta disponible, ingresa el monto y el sistema procesa la operación actualizando el saldo al instante. Cada depósito se registra automáticamente en el historial con fecha, monto y tipo de operación.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198731/Depositar_niwho0.png"
      },
      {
        title: "Retirar",
        description: "Función para extraer dinero de la cuenta. El usuario selecciona la cuenta, ingresa el monto y confirma. El sistema verifica que haya saldo suficiente antes de completar la transacción. Si el monto supera el disponible, se rechaza con mensaje de error.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198732/Retirar_sxxf48.png"
      },
      {
        title: "Transferencias a terceros",
        description: "Permite enviar dinero a otras personas proporcionando el número de cuenta destino. Selecciona cuenta origen, ingresa número de beneficiario y monto. Por cada transferencia se aplica comisión del 1% sobre el monto enviado. El sistema registra débito y comisión en el historial.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198732/Transferencia_ouvumz.png"
      },
      {
        title: "Movimientos entre cuentas propias",
        description: "Transferir dinero entre tus propias cuentas (corriente a ahorros, ahorros a inversión, etc.). Función útil para organizar el dinero según diferentes propósitos. A diferencia de transferencias a terceros, no tiene comisión.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198732/MoverEntreCuentas_o96d7h.png"
      },
      {
        title: "Historial de transacciones",
        description: "Todas las operaciones quedan registradas y el usuario puede consultarlas. El historial muestra: fecha exacta, tipo de operación (depósito, retiro, transferencia), monto, cuenta origen, cuenta destino y comisiones aplicadas.",
        image: "https://res.cloudinary.com/do4mocbxa/image/upload/v1773198732/Historial_xe8hph.png"
      }
    ],
    tech: [
      {name: "Java", icon: "logos:java"},
      {name: "Spring", icon: "logos:spring-icon"},
      {name: "MySQL", icon: "logos:mysql-icon"},
      {name: "JavaScript", icon: "logos:javascript"},
      {name: "React", icon: "logos:react"},
      {name: "Tailwind", icon: "logos:tailwindcss-icon"}
    ]
  },
  "tickets": {
    title: "Ticket System",
    description: "Sistema de tickets optimizado para soporte técnico con métricas en tiempo real.",
    fullStory: "Plataforma de gestión de tickets de soporte técnico que permite a los usuarios reportar incidencias y dar seguimiento a sus solicitudes. Incluye un dashboard en tiempo real con métricas y estadísticas para el equipo de soporte.",
    features: [
      "Creación y seguimiento de tickets",
      "Dashboard en tiempo real",
      "Asignación automática de tickets",
      "Notificaciones por email",
      "Reportes y métricas",
      "Sistema de prioridades"
    ],
    screenshots: [
      {
        title: "Dashboard Principal",
        description: "Panel de control con métricas en tiempo real que muestra tickets abiertos, cerrados, tiempo promedio de resolución y rendimiento del equipo de soporte."
      },
      {
        title: "Gestión de Tickets",
        description: "Crea, asigna y da seguimiento a tickets de soporte. Cada ticket incluye historial de comentarios, archivos adjuntos y sistema de prioridades."
      }
    ],
    tech: [
      {name: "Java", icon: "logos:java"},
      {name: "Spring", icon: "logos:spring-icon"},
      {name: "MySQL", icon: "logos:mysql-icon"},
      {name: "JavaScript", icon: "logos:javascript"},
      {name: "React", icon: "logos:react"},
      {name: "Tailwind", icon: "logos:tailwindcss-icon"}
    ]
  }
};
