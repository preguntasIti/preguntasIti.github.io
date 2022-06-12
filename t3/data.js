const data = {
  item1: {
    id: "1",
    title: "Un almacén de datos es",
    first: "Un repositorio de datos único y centralizado",
    second:
      "Un repositorio de datos distribuido para albergar toda la carga que sea necesaria",
    third:
      "Un repositorio de datos que solo será distribuido si el volumen de datos almacenados fuera muy grande",
    fourth:
      "Un repositorio de datos redundante, copia idéntica de los datos transaccionales de la empresa",
    answer: 1,
  },
  item2: {
    id: "2",
    title: "Una ventaja de los Data Warehouse es que",
    first:
      "Almacena las decisiones tomadas en el pasado para evaluarlas más adelante",
    second:
      "Da soporte a los sistemas de información para la toma de decisiones",
    third: "Distribuye mejor los datos por toda la organización",
    fourth:
      "Apenas requiere inversión ni formación por parte del personal ya que funciona como las aplicaciones de gestión convencionales",
    answer: 2,
  },
  item3: {
    id: "3",
    title: "Un data Mart es",
    first:
      "Una vista parcial de los datos de la empresa que combina partes de varios temas o departamentos relacionados de interés",
    second:
      "Una vista completa de los datos de la empresa, encriptada y comprimida para que ocupe menos espacio",
    third:
      "Una vista completa de los datos de la empresa lista para ser distribuida más ágilmente",
    fourth:
      "Una vista parcial de los datos de la empresa orientada a un área o tema concreto",
    answer: 4,
  },
  item4: {
    id: "4",
    title: "Los procesos ETL son para",
    first:
      "Migrar datos, particularmente de un origen con una estructura predefinida para su distribución a múltiples destinos",
    second:
      "Migrar datos, en general, de un o varios orígenes para su distribución a múltiples destinos",
    third:
      "Migrar datos, en general, de uno o varios orígenes a un destino concreto",
    fourth:
      "Migrar datos, particularmente de un origen con una estructura predefinida a un destino concreto",
    answer: 3,
  },
  item5: {
    id: "5",
    title: "El enfoque Bottom-Up de un Almacén de datos defiende que",
    first:
      "Los data marts de una empresa por sí solos hacen innecesario el almacén de datos",
    second:
      "El almacén de datos se construye uniendo todos los data marts de la empresa",
    third:
      "Los data marts de la empresa son independientes del almacén de datos",
    fourth:
      "El almacén de datos se diseña primero y a partir de él se crean los data marts",
    answer: 2,
  },
  item6: {
    id: "6",
    title: "Sobre los sistemas heredados o 'Legacy systems', estos son",
    first:
      "Sistemas de información antiguos, de bajo coste y fácilmente actualizables",
    second:
      "Sistemas de información antiguos y prescindibles, aunque interesantes para conocer la historia de la empresa",
    third:
      "Sistemas de información antiguos que normalmente se desechan por haber quedado obsoletos",
    fourth:
      "Sistemas de información antiguos pero críticos, no se puede prescindir de ellos",
    answer: 4,
  },
  item7: {
    id: "7",
    title: "En el proceso ETL, al extraer",
    first:
      "Hay que comprobar que los orígenes de datos son todo homogéneos con idénticas estructuras",
    second:
      "Hay que asegurarse de que la copia de seguridad de los datos de origen se ha realizado correctamente",
    third:
      "Hay que preprocesar los datos en el origen para que el migrarlos tengan el formato correcto",
    fourth:
      "Hay que verificar que los datos de origen tienen la estructura y formatos esperados",
    answer: 4,
  },
  item8: {
    id: "8",
    title: "En el proceso ETL, el área de 'Stage' o el ODS hacen referencia a",
    first:
      "Son las bases de datos de origen donde residen los datos que se quiere migrar",
    second:
      "Son áreas de memoria temporales donde ejecutar las transformaciones antes de volcar los datos en el destino",
    third:
      "Son las tablas de datos de destino donde se volcaran los datos finalmente",
    fourth:
      "Son ficheros con metainformación sobre las estructuras de datos de origen y destino",
    answer: 2,
  },
  item9: {
    id: "9",
    title: "En el proceso ETL, el proceso de carga necesita que",
    first:
      "Se consideren restricciones de formato, claves y/o triggers del destino",
    second:
      "Se consideren restricciones de formato, claves y/o triggers del origen",
    third:
      "Se consideren los data marts existen en la organización y a que áreas pertenecen",
    fourth: "Se consideren los periodos de latencia en la transmisión de datos",
    answer: 1,
  },
  item10: {
    id: "10",
    title: "La diferencia entre ETL y ELT es",
    first:
      "En ETL la carga es sobre una base de datos de destino y en ELT puede ser en ficheros con formato JSON, XML o similar",
    second:
      "En ETL la extracción se lleva a cabo en orígenes de datos diversos y heterogéneos y en ELT se hace sobre orígenes de datos de igual estructura",
    third:
      "En ELT la transformación es un proceso atómico mientras que en ETL no lo es",
    fourth:
      "En ELT la transformación se realiza al final en el destino mientras que en ETL se hace en un área intermedia",
    answer: 4,
  },
  item11: {
    id: "11",
    title: "Sobre los Data Lake",
    first:
      "Son repositorios de datos alternativos y excluyentes de los data warehouse",
    second:
      "Son repositorios de datos donde se hace una copia idéntica a los de origen",
    third:
      "Son repositorios de datos con una estructura de los datos mucho más estricta que la de los data warehouse",
    fourth:
      "Son repositorios de datos para copias de seguridad de los datos operacionales",
    answer: 2,
  },
  item12: {
    id: "12",
    title: "El concepto 'Sociedad del Conocimiento' hace referencia a",
    first:
      "Los cambios sociales producidos por la amplia distribución de datos e información en general",
    second:
      "Los cambios sociales producidos por los 'Influencers' de las redes sociales",
    third: "Los cambios sociales producidos por la Inteligencia Artificial",
    fourth:
      "Los cambios sociales producidos por los dispositivos 'smart' (teléfonos, relojes, etc.)",
    answer: 1,
  },
  item13: {
    id: "13",
    title:
      "Los cambios sociales producidos por la gran difusión y acceso a la información en general se conoce como",
    first: "Sociedad Tecnolófica",
    second: "Sociedad del Conocimiento",
    third: "Sociedad Conectada",
    fourth: "Sociedad 2.0",
    answer: 2,
  },
  item14: {
    id: "14",
    title: "Sobre 'Aprendizaje' y 'Conocimiento' podemos decir que",
    first:
      "Se retroalimentan, Conocemos para aprender y al aprender obtenemos más conocimiento",
    second: "El conocimiento sirve para aprender",
    third: "Aprender genera nuevo conocimient",
    fourth:
      "Ambos conceptos son sinónimos y previos a la generación de información",
    answer: 1,
  },
  item15: {
    id: "15",
    title: "Una persona aprenderá más y mejor sobre un tema",
    first: "Cuantos más libros lea sobre el tema del que se quiere aprender",
    second: "Cuanto más involucrado está con el tema del que desea aprender",
    third: "Cuando su motivación por dicho tema es mayor",
    fourth: "Si parte de una base solida sobre dicho tema",
    answer: 2,
  },
  item16: {
    id: "16",
    title: "Una persona aprenderá más y mejor sobre un tema",
    first: "Cuando habla, debate y discute sobre ese tema",
    second: "Cuando lee libros y escucha charlas sobre ese tema",
    third: "Cuando enseña a otros sobre ese tema",
    fourth: "Si parte de una base solida sobre dicho tema",
    answer: 3,
  },
  item17: {
    id: "17",
    title: "Al aumentar rápidamente la generación de nuevo conocimiento",
    first:
      "El individuo particular suele estar confiado ya que las fuentes de dicho conocimiento suelen ser de confianza",
    second:
      "El individuo particular suele estar más motivado a aprender más cosas",
    third:
      "El individuo particular es cada vez más consciente de que hay muchas cosas que no sabe",
    fourth: "El individuo particular cada vez está mejor informado",
    answer: 3,
  },
  item18: {
    id: "18",
    title: "Al aumentar rápidamente la generación de nuevo conocimiento",
    first:
      "Las personas saben que las fuentes de dicho conocimiento suelen ser de confianza",
    second: "Las personas están motivadas a estudiar y aprender más cosas",
    third: "Las personas viven con una incertidumbre que deben gestionar",
    fourth: "Las personas están cada vez mejor informadas",
    answer: 3,
  },
  item19: {
    id: "19",
    title: "La paradoja de la Sociedad del Conocimiento hace referencia a que",
    first:
      "Pese a la amplia disponibilidad de datos e información, el individuo esta cada vez peor informado",
    second:
      "Pese a las mejoras tecnológicas, resulta imposible aprender a manejar todo nuevo dispositivo que aparece en el mercado",
    third:
      "Pese a lo sofisticado de las técnicas analíticas de datos, su complejidad las aleja del público en general",
    fourth:
      "Pese a la amplia difusión de las TICs, existen muchas zonas geográficas en el planeta donde aun no han llegado",
    answer: 1,
  },
  item20: {
    id: "20",
    title: "Un problema de la Sociedad del Conocimientos es",
    first:
      "La dificultad para tener presencia en las principales redes sociales",
    second:
      "La complejidad creciente para manejar los dispositivos tecnológicos",
    third: "Los orígenes de datos e información son cada vez más numerosos",
    fourth: "Aumenta el número de cosas de las que no sabemos nada",
    answer: 4,
  },
  item21: {
    id: "21",
    title: "Un problema de la Sociedad del Conocimientos es",
    first: "Las redes sociales son muy numerosas",
    second: "De entre las que sabemos o conocemos, no de todo hemos aprendido",
    third: "Los orígenes de datos e información están cada vez más dispersos",
    fourth:
      "La complejidad creciente para manejar los dispositivos tecnológicos",
    answer: 2,
  },
  item22: {
    id: "22",
    title: "Concepto de cajanegrización",
    first:
      "oceso por el cual los avances científico/técnicos se hacen invisibles por su propio éxito",
    second:
      "Complejidad de los avances científico/técnicos que resultan más exitosos",
    third:
      "Deseo de comprender el funcionamiento interno de los avances científico/técnicos complejos",
    fourth:
      "Desconocimiento que se tiene de los beneficios los avances científico/técnicos",
    answer: 1,
  },
  item23: {
    id: "23",
    title: "El concepto de Cajanegrización (o Blackboxing) se refiere a que",
    first:
      "Solo interesa el resultado práctico de las cosas y no su funcionamiento interno",
    second: "El funcionamiento interno de ciertas cosas suele ser complejo",
    third:
      "El manejo de ciertas cosas o el aprendizaje de ciertos conceptos es difícil",
    fourth:
      "Solo los especialistas se aprovechan realmente del beneficio de las cosas",
    answer: 1,
  },
  item24: {
    id: "24",
    title:
      "El conocimiento se ha convertido en un factor de producción, por lo tanto",
    first:
      "Existe un riesgo de exclusión para quienes no tengan acceso al conocimiento",
    second: "Las empresas producen cada vez más productos",
    third: "Los productos y servicios tienen siempre una calidad estándar",
    fourth: "El acceso al dicho conocimiento está democratizado",
    answer: 1,
  },
  item25: {
    id: "25",
    title:
      "Para salvar la brecha digital se debería tener acceso a los siguientes factores generales",
    first:
      "Acceso a las TICs, formación para usarlas y disponibilidad de computación en la nube",
    second:
      "Disponibilidad de computación en la nube, acceso a la red y las TICs",
    third:
      "Acceso a la red y las TICs y formación o preparación para usar dichos medios",
    fourth:
      "Acceso a la red, disponibilidad de computación en la nube y formación o preparación para usar dichos medios",
    answer: 3,
  },
  item26: {
    id: "26",
    title: "En última instancia, procesar y analizar datos es para",
    first: "Tener más conocimiento",
    second: "Aprender más",
    third: "Tomar decisiones",
    fourth: "Asegurar la calidad de los datos",
    answer: 3,
  },
  item27: {
    id: "27",
    title:
      "En un sistema de BI, el “Back-end” (BE) y el “Front-end” (FE) se refieren a",
    first:
      "Los cuadros de mando son el BE y los cubos OLAP y el Dataware House son en FE",
    second:
      "Cubos OLAP y cuadros de mando podrían estar en el BE y en el FE según el diseño",
    third: "El BE contendría las herramientas de consulta y el FE los procesos",
    fourth:
      "Los cubos OLAP y el Dataware House son el BE y los cuadros de mando el FE",
    answer: 4,
  },
  item28: {
    id: "28",
    title: "La Inteligencia de Negocios (BI - Business Intelligence) engloba",
    first: "Todo lo que ayude a tomar mejores decisiones en los negocios",
    second: "Las bases de datos con información relevante del negocio",
    third: "Las estrategias planteadas por la gerencia para mejorar el negocio",
    fourth:
      "Los procesos de análisis que ayudan a generar información útil sobre el negocio",
    answer: 1,
  },
  item29: {
    id: "29",
    title:
      "La inteligencia de negocios busca identificar las relaciones de los hechos presentados con la finalidad de",
    first: "Dirigir las operaciones hacia el objetivo deseado",
    second:
      "Identificar los mejores objetivos que se puede marcar la organización",
    third: "Conocer que acciones han sido las más beneficiosas en el pasado",
    fourth: "Manejar mejor los sistemas informáticos de gestión de la empresa",
    answer: 1,
  },
  item30: {
    id: "30",
    title:
      "La inteligencia de negocios es el conjunto de conceptos y métodos para",
    first: "Mejorar la toma de decisiones en los negocios",
    second:
      "Identificar los mejores objetivos que se puede marcar la organización",
    third: "Conocer que acciones han sido las más beneficiosas en el pasado",
    fourth: "Manejar mejor los sistemas informáticos de gestión de la empresa",
    answer: 1,
  },
  item31: {
    id: "31",
    title: "Para la inteligencia de negocios un Hecho es",
    first: "Cualquier acción ejecutiva de la dirección de la empresa",
    second: "Una transacción que puede ser almacenada o registrada",
    third:
      "Una variable en función de la cual se estudia una métrica de interés",
    fourth: "Un KPI o key performance indicator",
    answer: 2,
  },
  item32: {
    id: "32",
    title: "Se dice que Business Intelligence es un término paraguas porque",
    first: "Permite desplegar con facilidad metodologías de gestión de datos",
    second:
      "Protege a las organizaciones que lo usan al competir con mejor información",
    third:
      "El conocimiento que genera es como una capa protectora para la organización que dispone de él",
    fourth:
      "Engloba un conjunto variado de conceptos, métodos y herramientas para tomar mejores decisiones",
    answer: 4,
  },
  item33: {
    id: "33",
    title:
      "Según Hans Peter Luhn, los Sistemas Automáticos (o sistemas de información) deben tener las siguientes funciones",
    first: "Capturar información, codificarla, distribuirla y validarla",
    second: "Capturar información y distribuirla",
    third: "Capturar información, distribuirla y validarla",
    fourth: "Capturar información, codificarla y distribuirla",
    answer: 4,
  },
  item34: {
    id: "34",
    title:
      "En un proyecto de implantación de un sistema de BI, el ROI se refiere a",
    first:
      "El ratio entre el beneficio esperado y el coste de implantación del sistema que, idealmente, en el medio plazo debería ser creciente",
    second:
      "El ratio entre el beneficio esperado y el coste de implantación del sistema que, idealmente, en el medio plazo debería ser constante",
    third:
      "El ratio entre el beneficio esperado y el beneficio real obtenido que, idealmente, en el medio plazo debería ser constante e igual a 1",
    fourth:
      "El ratio entre el beneficio esperado y el beneficio real obtenido que, idealmente, en el medio plazo debería ser decreciente",
    answer: 1,
  },
  item35: {
    id: "35",
    title: "Los beneficios ESTRATÉGICOS del Business Intelligence son",
    first: "Mejorar los ingresos y ahorrar en gastos y tiempo",
    second: "Mejorar la calidad de los datos",
    third: "Mejorar la planificación de la empresa",
    fourth: "Mejorar la posición competitiva",
    answer: 3,
  },
  item36: {
    id: "36",
    title: "Los beneficios INTANGIBLES del Business Intelligence son",
    first: "Mejorar los ingresos y ahorrar en gastos y tiempo",
    second: "Mejorar la calidad de los datos",
    third: "Mejorar la planificación",
    fourth: "Mejorar la posición competitiva",
    answer: 4,
  },
  item37: {
    id: "37",
    title: "Los beneficios TANGIBLES del Business Intelligence son",
    first: "Mejorar los ingresos y ahorrar en gastos y tiempo",
    second: "Mejorar la calidad de los datos",
    third: "Mejorar la planificación",
    fourth: "Mejorar la posición competitiva",
    answer: 1,
  },
  item38: {
    id: "38",
    title: "Con respecto a la calidad de la información",
    first:
      "Solamente es responsable de dicha calidad el personal de las áreas TICs o de sistemas de de información",
    second:
      "Son parte responsable de dicha calidad todas las personas de todas las área que interactúen con el sistema",
    third:
      "La responsabilidad de asegurar esa calidad recae fundamentalmente en los ejecutivos de la organización",
    fourth: "Es un problema estratégico que requiere de personal",
    answer: 2,
  },
  item39: {
    id: "39",
    title:
      "Cuando la fuente del error en la información está en el Almacén de Datos, es porque",
    first: "Las consultas están siendo mal implementadas",
    second: "Los cubos pueden estar siendo manipulados incorrectamente",
    third:
      "Principalmente, las operaciones de transformación (aunque también pueden ser las de Extracción y/o Carga) se están haciendo mal",
    fourth: "Los datos se están introduciendo incorrectamente",
    answer: 2,
  },
  item40: {
    id: "40",
    title:
      "Cuando la fuente del error en la información está en el proceso ETL, es porque",
    first: "Las consultas están siendo mal implementadas",
    second: "Los cubos pueden estar siendo manipulados incorrectamente",
    third:
      "Principalmente, las operaciones de transformación (aunque también pueden ser las de Extracción y/o Carga) se están haciendo mal",
    fourth: "Los datos se están introduciendo incorrectamente",
    answer: 3,
  },
  item41: {
    id: "41",
    title:
      "Cuando la fuente del error en la información está en el sistema OLAP, es porque",
    first: "Las consultas están siendo mal implementadas",
    second: "Los cubos pueden estar siendo manipulados incorrectamente",
    third:
      "Principalmente, las operaciones de transformación (aunque también pueden ser las de Extracción y/o Carga) se están haciendo mal",
    fourth: "Los datos se están introduciendo incorrectamente",
    answer: 1,
  },
  item42: {
    id: "42",
    title:
      "Cuando la fuente del error en la información está en el sistema OLTP, es porque",
    first: "Las consultas están siendo mal implementadas",
    second: "Los cubos pueden estar siendo manipulados incorrectamente",
    third:
      "Principalmente, las operaciones de transformación (aunque también pueden ser las de Extracción y/o Carga) se están haciendo mal",
    fourth: "Los datos se están introduciendo incorrectamente",
    answer: 4,
  },
  item43: {
    id: "43",
    title:
      "Cuando la información disponible para tomar decisiones no es válida y rigurosa",
    first: "Afortunadamente el error suele ser fácil de detectar",
    second:
      "Los errores en la información casi siempre pueden aislarse antes de que se propaguen por la organización",
    third:
      "El origen del error está en quien introduce los datos ne el sistemas",
    fourth:
      "No se puede hacer responsable de una mala decisión a quien la haya tomado en base a dicha información incorrecta",
    answer: 4,
  },
  item44: {
    id: "44",
    title:
      "¿Por qué se pierde competitividad cuando un sistema B.I. funciona mal?",
    first:
      "Porque la competencia sí los usa y tomara mejores decisiones que nuestra organización",
    second: "Por el coste de las malas decisiones tomadas",
    third: "Porque el sistema deja de usarse",
    fourth: "Porque asegurar la calidad de la información supone un gasto",
    answer: 1,
  },
  item45: {
    id: "45",
    title:
      "Cuando en un sistema de B.I. la información es errónea la toma de malas decisiones implica",
    first:
      "Un sobre coste al asumir esos errores y la perdida de confianza en el sistema",
    second:
      "Un sobre coste al asumir esos errores y un uso continuado de un sistema que funciona mal",
    third:
      "Un sobre coste al asumir esos errores y la activación de protocolos de gestión de la calidad de los datos",
    fourth:
      "Un sobre coste al asumir esos errores y una perdida de tiempo al tratar de asegurar la veracidad de la información en el futuro",
    answer: 1,
  },
  item46: {
    id: "46",
    title: "El proceso para asegurar la calidad de la información consiste en",
    first:
      "Hacer comprobaciones periódicamente a distintos niveles y en distinto periodos de tiempo",
    second:
      "Hacer comprobaciones durante la instalación del sistema de información para dejarlo bien calibrado",
    third:
      "Hacer comprobaciones manuales, esporádicas y al azar para detectar posibles errores dispersos",
    fourth:
      "Hacer comprobaciones de los totales y comprobar si son o no correctos",
    answer: 1,
  },
  item47: {
    id: "47",
    title: "¿Para qué se utilizan los KPIs?",
    first: "Para monitorizar el funcionamiento de las consultas OLAP",
    second:
      "Para comprobar si se están alcanzando los objetivos que se han establecido",
    third: "Para asegurar la calidad de los datos empresariales",
    fourth: "Para medir los tiempos de respuesta de las operaciones ETL",
    answer: 2,
  },
  item48: {
    id: "48",
    title: "Un KPI es",
    first:
      "Una medida o indicador del negocio de importancia para el desarrollo del mismo",
    second: "Una medida o indicador del rendimiento del Data Warehouse",
    third:
      "Una medida o indicador del nivel de calidad de los datos de la organización",
    fourth: "Una medida o indicador del funcionamiento del sistema de gestión",
    answer: 1,
  },
  item49: {
    id: "49",
    title: "Todo KPI obligatoriamente debe cumplir",
    first: "Ser una magnitud cuantificable con un valor numérico",
    second: "Ser de interés para el nivel ejecutivo de la empresa",
    third: "Ser un indicador del rendimiento de la competencia",
    fourth:
      "Ser un indicador del performance de sistema de información corporativo",
    answer: 1,
  },
  item50: {
    id: "50",
    title: "Todo KPI obligatoriamente debe cumplir",
    first: "Ser una magnitud cualitativa",
    second: "Ser de interés para el nivel operativo de la organización",
    third: "Ser definido y calculado con una formula concreta",
    fourth: "Ser un indicador del performance de los procesos ETL",
    answer: 3,
  },
  item51: {
    id: "51",
    title: "Todo KPI obligatoriamente debe cumplir",
    first: "Ser una magnitud cualitativo o cuantitativa",
    second: "Ser de interés para el nivel operativo de la empresa",
    third: "Ser un indicador del performance de la competencia",
    fourth: "Ser una medición de una de las actividades críticas de la empresa",
    answer: 4,
  },
  item52: {
    id: "52",
    title: "La llamada “Ciencia de datos” incluye disciplinas como:",
    first:
      "Minería de datos, Inteligencia Artificial, Aprendizaje automático y Business Intelligence",
    second: "Minería de datos, cálculo matemático e Inteligencia Artificial",
    third: "Minería de datos, Inteligencia Artificial y Aprendizaje automático",
    fourth: "Minería de datos, Inteligencia Artificial y Business Intelligence",
    answer: 3,
  },
  item53: {
    id: "53",
    title: "Los métodos descriptivos de análisis de datos incluyen",
    first: "Asociación y Clasificación",
    second: "Agrupamiento y Asociación",
    third: "Clasificación y Regresión",
    fourth: "Regresión y Agrupamiento",
    answer: 2,
  },
  item54: {
    id: "54",
    title: "Los métodos predictivos de análisis de datos incluyen",
    first: "Asociación y Clasificación",
    second: "Agrupamiento y Asociación",
    third: "Clasificación y Regresión",
    fourth: "Regresión y Agrupamiento",
    answer: 3,
  },
  item55: {
    id: "55",
    title: "El Business Analytics trata de responder preguntas como:",
    first:
      "¿Qué pasaría si el escenario fuera otro? o ¿Cuando sucedieron las cosas?",
    second: "¿Qué ha sucedido? o ¿Por qué suceden las cosas?",
    third: "¿Cuando sucedieron las cosas? o ¿Quién hizo que sucedieran?",
    fourth:
      "¿Por qué suceden las cosas? o ¿Qué pasaría si el escenario fuera otro?",
    answer: 4,
  },
  item56: {
    id: "56",
    title:
      "La principal diferencia apreciable entre Business Intelligence (BI) y Business Analytics (BA) es . . .",
    first: "BI hace analítica descriptiva y BA predictiva",
    second:
      "BI usa técnicas de análisis estadístico y BA Cubos OLAP y cuadros de mando",
    third: "BI habla de 'qué pasará' y BA de 'qué pasó'",
    fourth:
      "BI plantea escenarios para proyectar posibles resultados y BA usa datos históricos para aprender de decisiones previas",
    answer: 1,
  },
  item57: {
    id: "57",
    title: "Sobre el Business Analytics se puede decir que . .",
    first:
      "Hay muchos autores que lo asimilan al concepto de Business Intelligence",
    second: "Es una disciplina totalmente distinta del Business Intelligence",
    third:
      "Se centra en los análisis descriptivos, al contrario que el Business Intelligence que se centra en los predictivos",
    fourth:
      "Es un concepto más antiguo que el de Business Intelligence, y por tanto, más asentado",
    answer: 1,
  },
  item58: {
    id: "58",
    title: "¿Cómo resolver los problemas de Variedad de datos?",
    first:
      "Almacenando datos por niveles, identificando relaciones e inconsistencias entre las diversas fuentes de datos y empleando formatos como XML",
    second:
      "Externalizando la gestión de datos y balanceando la latencia de los datos con los ciclos de decisión",
    third:
      "Identificando relaciones e inconsistencias entre las diversas fuentes de datos, gestionando los metadatos y empleando formatos como XML",
    fourth:
      "Empleando formatos como XML, Incorporando memorias caché y almacenes operacionales, y balanceando la latencia de los datos con los ciclos de decisión",
    answer: 3,
  },
  item59: {
    id: "59",
    title: "¿Cómo resolver los problemas de Velocidad de datos?",
    first:
      "Almacenando datos por niveles, Descartando los datos fríos y externalizando la gestión de datos",
    second:
      "Externalizando la gestión de datos y balanceando la latencia de los datos con los ciclos de decisión",
    third:
      "Almacenando datos por niveles, gestionando los metadatos y externalizando la gestión de datos",
    fourth:
      "Incorporando memorias caché y almacenes operacionales, y balanceando la latencia de los datos con los ciclos de decisión",
    answer: 4,
  },
  item60: {
    id: "60",
    title: "¿Cómo resolver los problemas de Volumen de datos?",
    first:
      "Almacenando datos por niveles, Descartando los datos fríos y externalizando la gestión de datos",
    second:
      "Externalizando la gestión de datos y balanceando la latencia de los datos con los ciclos de decisión",
    third:
      "Almacenando datos por niveles, Descartando los datos fríos y externalizando la gestión de datos",
    fourth:
      "Incorporando memorias caché y almacenes operacionales y externalizando la gestión de dato",
    answer: 1,
  },
};
