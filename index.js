var array = [];
function fliter() {

    var espacios = ['Nieto Abello Lilian Ivonne', 'Hurtado Sánchez Katherine', 'Suarez Serje Ofelina', 'Laguado Serpa Clara Ines', 'Ortiz Guiza Johan Dario', 'Escobar Arias Carolina',
        'Rios Torres Claudia Patricia', 'Martinez Tovar William Javier', 'Plata Bueno Reynaldo', 'Escorcia Chavez Pablo Enrique', 'Rodriguez Gonzalez Yorman Andres',
        'Estrada Gaviria Jorge Alberto', 'Cobo Gomez Harry', 'Sanchez Cabeza Martha Patricia', 'Verano Cardona Ubeimar', 'Silva Rojas Angela Marcela',
        'Camargo Vargas Luis Alejandro', 'Gomez Cardona Ruben Dario', 'Henao Bolivar Jhon Jairo', 'Marroquin Suarez Henry', 'Mahecha Laverde Monica',
        'Castillo Gonzalez Marleny', 'Cabezas Belalcazar Maria Elena', 'Barrera Chaparro Daniel Rodrigo', 'Villanueva Fernandez Erick Daniel',
        'Rodelo Alvarez Jhon Alex', 'Portillo Garcia Nancy Maria', 'Useche Galeano Edwin Mauricio', 'Rojas Moreno Ingrid Nayibe', 'Correa Cano Wilson Alberto',
        'Carrillo Valero Oscar Mauricio', 'Lopez Laverde Alejandro', 'Velandia Francisco Mauricio', 'Navarro Toro Edrian Alberto', 'Serna Duque Mario',
        'Otero Mora Juan Carlos', 'Acevedo Romero Luz Marina', 'Holguin Bedoya John Edinson', 'Carmona Meza Alfonso Rafael', 'Camelo Guzman Nestor Leonardo',
        'Miranda Mondragón Hector Fabio', 'Idrobo Aragon Maria Juliana', 'Pineda Leon John Darnley', 'Garzon Arce Mario German', 'Ceballos Castilla Alex',
        'Cortes Meza Carlos Felipe', 'Ruiz Suarez Ramiro', 'Barrios Torres Fabian Augusto', 'Martin Bernal Robinson', 'Puccini Duque Lina Maria',
        'Osorio Amaya Luis Alejandro', 'Montaño Gallego Robert Antonio', 'Cardona Galeano Jorge Ivan', 'Cabrales Pinto Alfonso', 'Bolivar Cardona Liseth Irene',
        'María Angélica Guerrero', 'Restrepo Lopez Sebastian', 'Puertas Borrero Jorge Ignacio', 'Perez Alvarez Cristina', 'Palacio Ruiz Silvia Juliana',
        'Cuellar Rubiano Jeimmy Lorena', 'Navarro Varon Monica Amparo', 'Sanabria Camelo Myriam', 'Otavo Ricaurte Kelly Alexandra', 'Cortes Triana Paula Maria',
        'Polanco Gomez Jose Antonio', 'Perez Delgado Jose Antonio', 'Duque Perez Henry', 'Preciado Conterno Juan Camilo', 'Cortina Ramos Deiver Manuel',
        'Rueda Mendoza David Fernando', 'Malo Rubio Carlos Manuel', 'Gonzalez Gaviria Oscar Andres', 'Cerquera Rodriguez Luis Humberto', 'Rueda Salas Jair Luis',
        'Rada Gonzalez Fabian David', 'Santamaria Tellez Javier Alexander', 'Hoyos Garcia Angela Bibiana', 'Villaquiran Marin Grace Johanna Estefania',
        'Daza Daza Edgar Daniel', 'Montaño Rodriguez Derly Asenet', 'Gonzalez Ardila Daniel Ricardo', 'Castaño Escobar Edgar', 'Penagos Robles Carlos Javier',
        'Rey Jimenez Alejandro', 'Zambrano Smith Carlos Alberto', 'Navarro Orozco Jamer Augusto', 'Neira Contreras Olga', 'Atencio Alarcon Arnaldo Andres',
        'Martinez Moncada Gustavo Adolfo', 'Gutierrez Mesa Diana Cristina', 'Ching Jaramillo Wilson Eduardo', 'Ospina Mantilla Fabio Alexander',
        'Cudris Guzman Lacides Ulises', 'Garzon Pezzano Ana Maria', 'Mondragon Alfonso Angela Esperanza', 'Avila Duarte Lorena Andrea', 'Henao Daza Omar Dario',
        'Ramirez Quintero Juan Carlos', 'Guzman Suarez Nelsy', 'Arcila Vasquez Johanna', 'Sanchez Alzate Guillermo Alejandro', 'Mendoza Chaparro Ismael Enrique',
        'Jaramillo Falla Luis Hernan', 'Arroyave Salazar Lorenza', 'Naranjo Garcia William', 'Gurisatti Barreto Isabella', 'Torres Buitrago Angela Milena',
        'Burgos Lengua Maria Elisa', 'Suan Ana Maria', 'Maldonado Garzon Leonardo', 'Arenas Espinosa Herney Silvestre', 'Posada Sucerquia Jhon Fredy', 'Torres Leon Naryi Catheryne',
        'Ibarra Castillo Alfonso', 'Vargas Gechem Andres Felipe', 'Cruz Tellez Edda Brigitte', 'Riveros Guevara Juan Felipe', 'Diaz Clavijo Maria Paula',
        'Rodas Leon Julieth Paola', 'Fernandez Leon Silvia Cristina', 'Garzon Romero Maria Isabel', 'Arevalo Gomez Oscar Hernando', 'Rodriguez Urrego Irma Juliette',
        'Martinez Cervera Carlos Ivan', 'Arenas Herrera Leidy Tatiana', 'Cano Gomez Maria Camila', 'Vaca Martinez Juan Guillermo', 'Lopez Cantillo Kristy Carolina',
        'Arrieta Lora Jose Maria', 'Hamburger Pagano Nathaly', 'Salazar Niño Emerson', 'Marino Beltran Mario Alberto', 'Hidalgo Herrera Alan Hubert',
        'Tarazona Montero Martin Leonardo', 'Muñoz Pedraza Laura Viviana', 'Prieto Arbelaez Silvia Elena', 'Gonzalez Barba Vladimir', 'Ariza Muñoz Yulis Mariana',
         'Sanchez Barrero Rosana', 'Cardenas Bustos Luis Eduardo', 'Henao Agudelo Hugo Dejesus', 'Salgado Solano Jessica Liliana', 'Prieto Rosa Esperanza',
          'Perez Ruiz Alba Lucia', 'Sanchez Sanin Carlos Mario', 'Gomez Pinzon Maria Paula', 'Orjuela Cabrera Tatiana Lorena', 'Rodriguez Chaparro Oscar Leonardo',
           'Vanegas Santos Yenni Paola', 'Garces Rodriguez Juan Daniel', 'Martinez Quimbayo Maria Camila', 'Arevalo Antonio Mirta', 'Galvis Cristancho Malory',
            'Reyes Cordoba Douglas', 'Galvis Herrero Marisol', 'Robayo Perdigon Karol Tatiana','Rincon Torres Bibiana Catherine','Pineda Nomezque Raul Ferney',
            'Quintero Sariany Andrea','Morales Vargas Camilo Ernesto','Rincon Niño Wilson Yadir','Gonzalez Rozo Edgar Mauricio','Romero Jimenez Karoll Andrea',
            'Viracacha Monroy Julian Andres','Lopez Perdomo Nicolas', 'Benavides Buitrago Eugenia Margarita'];


    for (let i = 0; i < espacios.length; i++) {
        var n = espacios[i].split(" ");
        var nueva = n[0];
        var nueva1 = n[2];
        var nueva2 = `${nueva1}.${nueva}`;
        array.push(nueva2);
    };
    var lista = document.getElementById('nombres');
    var text = '';
    for (let i = 0; i < array.length; i++) {
        text += array[i] + "@terpel.com <br>";
    };
    lista.innerHTML = text;

    console.log(array);
}

fliter();







