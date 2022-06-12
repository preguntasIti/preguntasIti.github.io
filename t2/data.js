const data = {
  item1: {
    id: "1",
    title: "¿Cuál de las siguientes es una lista correcta de sistemas OLTP",
    first: "Un data mart, un data warehouse y una aplicación de facturación",
    second:
      "Un cajero automático, un data mart y un portal de reserva de vuelos on-line",
    third:
      "Una aplicación de facturación, un cajero automático y un portal de comercio electrónico",
    fourth: "Un portal de comercio electrónico, un cajero y un data warehouse",
    answer: 3,
  },
  item2: {
    id: "2",
    title:
      "¿Cuál de las siguientes es una lista correcta de transacciones (en sistemas OLTP)?",
    first:
      "Una operación bancaria, una compra/venta de productos-servicios y un listado de clientes",
    second:
      "Un listado de clientes, un análisis comparativo de ventas y un pedido",
    third:
      "Un pedido, una operación bancaria y una compra/venta de productos-servicios",
    fourth:
      "Un pedido, un análisis comparativo de ventas y una operación bancaria.",
    answer: 3,
  },
  item4: {
    id: "4",
    title: "El entorno de trabajo transaccional",
    first:
      "Es donde se registran todas las transacciones que ocurren en una empresa u organismo",
    second: "Se encarga de generar nuevas transacciones decisionales",
    third:
      "Distingue entre transacciones estratégicas, tácticas y operacionales según el departamento funcional donde ocurran",
    fourth: "Es el que da soporte a las transacciones decisionales",
    answer: 1,
  },
  item5: {
    id: "5",
    title:
      "En economía y finanzas, y en general, en el mundo empresarial, una transacción es",
    first: "Una operación de Compra/Venta",
    second: "Un intercambio de estímulos entre indivíduos",
    third: "Es un tipo particular de acto jurídico",
    fourth:
      "Es la respuesta que da una persona u organismo al ser incitado o incentivado por algo",
    answer: 1,
  },
  item6: {
    id: "6",
    title: "En el ámbito de los sistemas de información una transacción es",
    first:
      "Cualquier operación que suponga un cambio en el estado del sistema de la que podamos tomar nota",
    second:
      "Cualquier anotación en las agendas del personal como comerciales o ejecutivos",
    third:
      "Un proceso en la base de datos que genera la ejecución de un disparador o trigger ",
    fourth:
      "Un proceso en la base de datos que genera el inicio de una operación ETL",
    answer: 1,
  },
  item7: {
    id: "7",
    title:
      "Desde el punto de vista de un ADMINISTRADOR de un sistema OLTP es importante que",
    first:
      "Funcione continua e ininterrumpidamente (a veces 24x7) estando el servicio disponible y con un buen nivel de calidad",
    second:
      "Gestione de forma eficiente la memoria, las concurrencias y soporte gran cantidad de operaciones de E/S",
    third:
      "Las transacciones de la BBDD sean atómicas y que haya un sistema de recuperación en caso de fallo delsistema",
    fourth:
      "Se conozcan las expectativas de otros usuarios, las características del SGBD y las operaciones y técnicas de administración del sistema",
    answer: 2,
  },
  item8: {
    id: "8",
    title:
      "Desde el punto de vista de un DESARROLLADOR de un sistema OLTP es importante que",
    first:
      "Funcione continua e ininterrumpidamente (a veces 24x7) estando el servicio disponible y con un buen nivel de calidad",
    second:
      "Gestione de forma eficiente la memoria, las concurrencias y soporte gran cantidad de operaciones de E/S",
    third:
      "Las transacciones de la BBDD sean atómicas y que haya previsto un sistema de recuperación en caso de fallo del sistema",
    fourth:
      "Se conozcan las expectativas de los usuarios, las características del SGBD y las operaciones y técnicas de administración del sistema",
    answer: 4,
  },
  item9: {
    id: "9",
    title:
      "Desde el punto de vista de un PROVEEDOR DE SGBD de un sistema OLTP es importante que",
    first:
      "Funcione continua e ininterrumpidamente (a veces 24x7) estando el servicio disponible y con un buen nivel de calidad",
    second:
      "Gestione de forma eficiente la memoria, las concurrencias y soporte gran cantidad de operaciones de E/S        ",
    third:
      "Las transacciones de la BBDD sean atómicas y que haya previsto un sistema de recuperación en caso defallo del sistema",
    fourth:
      "Se conozcan las expectativas de los usuarios, las características del SGBD y las operaciones y técnicas de administración del sistema",
    answer: 3,
  },
  item10: {
    id: "10",
    title:
      "Desde el punto de vista de un USUARIO de un sistema OLTP es importante que",
    first:
      "Funcione continua e ininterrumpidamente (a veces 24x7) estando el servicio disponible y con un buen nivel de calidad",
    second:
      "Gestione de forma eficiente la memoria, las concurrencias y soporte gran cantidad de operaciones de E/S",
    third:
      "Las transacciones de la BBDD sean atómicas y que haya un sistema de recuperación en caso de fallo del sistema",
    fourth:
      "Se conozcan las expectativas de otros usuarios, las características del SGBD y las operaciones y técnicas de administración del sistema",
    answer: 1,
  },
  item11: {
    id: "11",
    title: "¿Qué es un cubo OLAP?",
    first:
      "Una estructura de datos optimizada para el procesamiento analítico mediante consultas",
    second: "Una vista hexagonal de datos estructurados",
    third: "Una única tabla de datos normalizados y sin redundancias",
    fourth:
      "Una pareja de tablas relacionadas, una con datos de dimensiones y otra con datos para analizar",
    answer: 1,
  },
  item12: {
    id: "12",
    title:
      "La toma de decisiones (entorno decisional) se realiza sobre todo en",
    first: "El área de dirección",
    second:
      "El área de dirección y en los niveles superiores del resto de áreas.",
    third: "Fundamentalmente en las áreas de Marketing y Finanzas",
    fourth: "Todas las áreas y niveles de la empresa",
    answer: 4,
  },
  item13: {
    id: "13",
    title:
      "Instalar dos sistemas, OLTP y OLAP, sobre la misma base de datos (BD) implica que",
    first: "No será posible ejecutar transacciones atómicas",
    second:
      "El motor de la base de datos se puede saturar al ser atacado por ambos sistemas",
    third:
      "Las consultas de ambos sistemas podrán interferir creando estados inestables de la BD",
    fourth: "Algunas consultas pueden generar resultados incoherentes",
    answer: 2,
  },
  item14: {
    id: "14",
    title: "La función de DIRECCIÓN dentro de una empresa consiste en",
    first:
      "Definir los objetivos y la organización de la entidad a corto, medio y largo plazo",
    second:
      "Investigar el mercado y colocar en él los productos o servicios que produce la empresa",
    third:
      "Diseñar los productos y dirigir el proceso de elaboración de los mismos",
    fourth:
      "Gestionar la contabilidad en general, la fiscalidad y la financiación de la empresa",
    answer: 1,
  },
  item15: {
    id: "15",
    title: "La función de MARKETING dentro de una empresa consiste en",
    first:
      "Definir los objetivos y la organización de la entidad a corto, medio y largo plazo",
    second:
      "Investigar el mercado y colocar en él los productos o servicios que produce la empresa",
    third:
      "Diseñar los productos y dirigir el proceso de elaboración de los mismos",
    fourth:
      "Gestionar la contabilidad en general, la fiscalidad y la financiación de la empresa",
    answer: 2,
  },
  item16: {
    id: "16",
    title: "La función de PRODUCCIÓN dentro de una empresa consiste en",
    first:
      "Definir los objetivos y la organización de la entidad a corto, medio y largo plazo",
    second:
      "Investigar el mercado y colocar en él los productos o servicios que produce la empresa",
    third:
      "Diseñar los artículos o servicios y dirigir el proceso de elaboración de los mismos",
    fourth:
      "Gestionar la contabilidad en general, la fiscalidad y la financiación de la empresa",
    answer: 3,
  },
  item17: {
    id: "17",
    title: "La función del área de FINANZAS dentro de una empresa consiste en",
    first:
      "Definir los objetivos y la organización de la entidad a corto, medio y largo plazo",
    second:
      "Investigar el mercado y colocar en él los productos o servicios que produce la empresa",
    third:
      "Diseñar los artículos o servicios y dirigir el proceso de elaboración de los mismos",
    fourth:
      "Gestionar la contabilidad en general, la fiscalidad y la financiación de la empresa",
    answer: 4,
  },
  item18: {
    id: "18",
    title:
      "Sobre los sistemas de información de tipo TPS (y Bach) se puede decir que",
    first: "Son los más antiguos, los primeros en aparecer",
    second: "Apoyan de manera idónea el proceso de toma de decisiones",
    third: "No recopilan datos, solo los analizan",
    fourth:
      "Son complejos de manejar ya que las tareas rara vez son iguales o repetitivas",
    answer: 1,
  },
  item19: {
    id: "19",
    title: "Un sistema de información de tipo MIS",
    first:
      "Incluye una nueva funcionalidad analítica que da soporte a los niveles Táctico y Estratégico de la empresa",
    second:
      "Solo recopila datos, solo que de forma algo más eficiente que los sistemas más antiguos",
    third: "Son capaces de tomar decisiones de forma autónoma",
    fourth:
      "Suelen incluir funcionalidades de procesamiento de texto, hojas de cálculo, etc...",
    answer: 1,
  },
  item20: {
    id: "20",
    title:
      "Sobre el concepto de interactividad en Sistemas de Apoyo a la Decisión (DSS)",
    first:
      "El sistema debe ser muy amigable para que pueda ser utilizado por usuarios no expertos",
    second: "Exige que el sistema de respuestas en tiempo real",
    third:
      "Puede ejecutar procesos de cálculo más o menos eficientes siempre que sean útiles",
    fourth:
      "La interfaz de usuario es un factor secundario, prima la capacidad analítica del sistema",
    answer: 2,
  },
  item21: {
    id: "21",
    title: "¿Qué es un Sistema de Información para Ejecutivos (EIS)?",
    first:
      "Se puede decir que es como un DSS pero orientado a la alta dirección",
    second:
      "Es un sistema interactivo de apoyo a las decisiones en el nivel operativo",
    third:
      "Es un sistema de apoyo a las decisiones para gerentes de marketing y finanzas",
    fourth:
      "Es un sistema amigable de apoyo a la decisión para jefes de grupo del nivel táctico",
    answer: 1,
  },
  item22: {
    id: "22",
    title: "Un sistema de información de tipo OAS",
    first:
      "Incluye una nueva funcionalidad analítica que da soporte a los niveles Táctico y Estratégico de la empresa",
    second:
      "Solo recopila datos, solo que de forma algo más eficiente que los sistemas más antiguos",
    third: "Son capaces de tomar decisiones de forma autónoma",
    fourth:
      "Suelen incluir funcionalidades de procesamiento de texto, hojas de cálculo, etc...",
    answer: 4,
  },
  item23: {
    id: "23",
    title: "¿Qué es un CMS?",
    first:
      "Una herramienta genérica para crear y administrar contenidos digitales",
    second:
      "Un gestor de páginas para crear específicamente portales de comercio electrónico",
    third: "Un sistema de cifrado y firma digital",
    fourth: "Una base de datos para una aplicación de gestión",
    answer: 1,
  },
  item24: {
    id: "24",
    title: "El concepto CRM se refiere a",
    first:
      "Todo tipo de estrategias para gestionar y mejorar las relaciones entre una empresa y sus clientes",
    second:
      "La gestión del flujo de suministros y bienes de una empresa, así como de la distribución de productos",
    third: "La administración y gestión contable y de facturación",
    fourth:
      "Todo tipo de acciones encaminadas a mejorar el posicionamiento de la web de la empresa",
    answer: 1,
  },
  item25: {
    id: "25",
    title: "¿Qué tarea o tareas apoya una aplicación de tipo SCM?",
    first:
      "Principalmente tareas logísticas de movimiento de materiales, productos y suministros en general",
    second: "Principalmente tareas de gestión administrativa",
    third:
      "Principalmente tareas contables y de facturación en el área de finanzas",
    fourth: "Principalmente tareas de gestión de recursos humanos",
    answer: 1,
  },
  item26: {
    id: "26",
    title: "Una aplicación de tipo SCM se encarga de",
    first:
      "Gestionar el tránsito de todos los bienes de una empresa, tanto la entrada de materias primas como la salida de productos acabados para la vent",
    second: "Gestionar en inventario de un almacen",
    third:
      "Gestionar el flujo de caja, relaciones con los bancos y la compra y venta de productos o servicios",
    fourth:
      "Gestionar el movimiento de clientes por las instalaciones en empresas de servicios",
    answer: 1,
  },
  item27: {
    id: "27",
    title: "¿Qué es el SEO?",
    first:
      "Gestionar y comprar palabras relacionadas con la web que se quiere promocionar",
    second:
      "La actividad en redes sociales para promocionar una marca o producto",
    third:
      "Acciones encaminada a mejorar el posicionamiento de una web en buscadores",
    fourth:
      "Diseñar sitios web amigables y usables que mejoren la experiencia del usaurio respecto de la competencia",
    answer: 3,
  },
};
