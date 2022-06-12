const data = {
  item1: {
    id: "1",
    title: "Una característica del proceso ELT frente a ETL es que",
    first:
      "Las operaciones de transformación son más sencillas con ELT que con ETL",
    second: "En el proceso ETL los datos se cargan antes en el destino",
    third: "El proceso ELT es más económico que el ETL",
    fourth:
      "ELT no es apto para migrar datos a un DATA LAKE mientras que ETL sí",
    answer: 2,
  },
  item2: {
    id: "2",
    title: "Un almacén de datos debe cumplir la característica de",
    first: "Ser estático, no alterar su contenido en el tiempo",
    second:
      "Cumplir con la tercera forma normal, aunque no necesariamente con la primera y segunda",
    third:
      "No ser volátil, los datos que se guardan ya solo se usan para lectura",
    fourth: "Estar distribuido en diversos servidores y sedes",
    answer: 3,
  },
  item3: {
    id: "3",
    title: "Globalmente, el sistema OLAP de una empresa es",
    first:
      "El conjunto de recursos dedicados a las aplicaciones para apoyo de las tareas de nivel operativo y táctico",
    second:
      "El conjunto de recursos dedicados a la producción de bienes y/o servicios de la empresa vende",
    third:
      "El conjunto de recursos dedicados a la adquisición y almacenamiento de datos",
    fourth:
      "El conjunto de recursos dedicados a la administración de la información disponible para apoyar el proceso de toma de decisiones",
    answer: 4,
  },
  item4: {
    id: "4",
    title: "En los cubos OLAP, el concepto de CARDINALIDAD hace referencia a",
    first:
      "El núumero de campos para el cálculo de agregados que contiene el cubo",
    second:
      "El número de campos totales de todas las dimensiones y métricas del cubo",
    third: "El orden que ocupa cada dimensión con respecto a las demás",
    fourth: "El tamaño en número de registros que puede tener el Cubo",
    answer: 4,
  },
  item5: {
    id: "5",
    title: "La gran ventaja de los cubos MOLAP es que",
    first:
      "Representan mejor las jerarquías y niveles de granuladidad de cada dimensión",
    second: "Reducen la redundancia de los datos",
    third: "Las consultas son muy rápidas",
    fourth: "Ahorran memoria",
    answer: 3,
  },
  item6: {
    id: "6",
    title: "Sobre el consumo de memoria en los cubos ROLAP",
    first: "Consumen menos memoria porque se implementan en una única tabla",
    second:
      "Consumen menos memoria porque las consultas que son capaces de realizar son más sencillas",
    third:
      "Consumen menos memoria porque incorporan cierto grado de normalización en los datos",
    fourth:
      "Consumen menos memoria porque la base de datos se encuentra comprimida",
    answer: 3,
  },
  item7: {
    id: "7",
    title: "La función principal de un CMS es",
    first: "Gestionar los usuarios de una aplicación online",
    second: "Identificar verazmente al autor de un contenido digital",
    third:
      "Facilitar la tarea de edición de contenidos online en un portal web",
    fourth: "Facilitar las transacciones financieras seguras",
    answer: 3,
  },
  item8: {
    id: "8",
    title:
      "¿Para qué departamento de la empresa está especialmente dedicado en CRM?",
    first: "A los departamentos comercial o marketing",
    second: "Al departamento de diseño de productos",
    third: "A la dirección",
    fourth: "Al departamento de contabilidad y finanzas",
    answer: 1,
  },
  item9: {
    id: "9",
    title: "Comparando un data wharehouse frente a un data lake",
    first:
      "El data wharehouse solo permite técnicas analíticas más sencillas que las que sería posible implementar en el data lake",
    second: "El proceso ETL para uno y otro sistema es idéntico",
    third: "El data wharehouse es más versátil que el data lake",
    fourth:
      "El data lake pierde funcionalidad que hay disponible en el data wharehouse",
    answer: 1,
  },
  item10: {
    id: "10",
    title: "¿Cuántas dimensiones puede tener un cubo OLAP?",
    first: "Deben ser tres para que sea un cubo",
    second:
      "Este factor va a depende de si la implementación del cubo es ROLAP o MOLAP",
    third: "Hasta cinco como máximo",
    fourth: "No hay límite, las que el negocio o datos determinen",
    answer: 4,
  },
  item11: {
    id: "11",
    title:
      "Sobre GRANULARIDAD: ¿Cuál de los siguientes ejemplos representa correctamente una serie de valores desde el grano más fino hasta el más grueso?",
    first: "Año -> Trimestre -> Mes -> Semana -> Día",
    second: "Día -> Semana -> Mes -> Trimestre -> Año",
    third: "Año -> Semana -> Mes",
    fourth: "Día -> Trimestre -> Mes -> Semana -> Año",
    answer: 2,
  },
  item12: {
    id: "12",
    title: "Una característica importante de los sistemas OLTP es",
    first:
      "Su función principal es la de proporcionar servicios de consulta y análisis",
    second:
      "Se construyen sobre bases de datos relacionales normalizadas para facilitar la actualización de datos",
    third: "Captan información mediante operaciones ETL",
    fourth: "Se construyen sobre bases de datos jerárquicas",
    answer: 2,
  },
};
