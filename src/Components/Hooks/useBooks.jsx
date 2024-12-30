import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de los libros
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        //fetch(process.env.REACT_APP_GW_URL).then((res) => res.json()).then((res) => setBooks(res));

        setTimeout(() => {
            setBooks([
                {id: "1", nombre: "La saga de los longevos", autor: "Eva García Sáenz de Urturi", genero: "Novela histórica",
                    editorial: "Planeta", resumen: "Iago del Castillo, un hombre de más de 10.000 años, trabaja en un museo mientras investiga el secreto de su longevidad.", 
                    rating: 4.5, precio: 65000},
                {id: "2", nombre: "La cartera", autor: "Francesca Gianone", genero: "Novela contemporánea",editorial: "HarperCollins", 
                    resumen: "Una cartera perdida conecta a sus propietarios en una historia llena de secretos y emociones.", 
                    rating: 4.3, precio: 55000},
                {id: "3", nombre: "Viento y verdad", autor: "María Dueñas", genero: "Novela histórica",
                    editorial: "Planeta", resumen: "En la España de posguerra, una mujer busca reconstruir su vida y desvelar secretos familiares.", 
                    rating: 4.6, precio: 78000},
                {id: "4", nombre: "La librería de los finales felices", autor: "Katarina Bivald", genero: "Novela romántica",
                    editorial: "Ediciones Maeva", resumen: "Una joven sueca hereda una librería en Iowa y transforma la comunidad local.", 
                    rating: 4.4, precio: 86000},
                {id: "5", nombre: "En agosto nos vemos", autor: "Gabriel García Márquez", genero: "Realismo mágico",
                    editorial: "Literatura Random House", resumen: "Una mujer vive un romance inesperado durante sus visitas anuales a la tumba de su madre.", 
                    rating: 4.7, precio: 95000},
                {id: "6", nombre: "Romper el círculo", autor: "Colleen Hoover", genero: "Novela romántica",
                    editorial: "Planeta", resumen: "Una mujer enfrenta decisiones difíciles sobre el amor, el abuso y la resiliencia.", 
                    rating: 4.8, precio: 55000},
                {id: "7", nombre: "El jardín de las mariposas", autor: "Dot Hutchison", genero: "Thriller psicológico",
                    editorial: "Planeta", resumen: "Un hombre secuestra jóvenes y las convierte en parte de su jardín de mariposas",
                    rating: 4.5, precio: 76000},
                {id: "8", nombre: "La ciudad y sus muros inciertos", autor: "Haruki Murakam", genero: "Ficción contemporánea",
                    editorial: "Tusquets Editores", resumen: "Reflexión sobre la soledad y la identidad en una ciudad donde la realidad y la fantasía se entrelazan.", 
                    rating: 4.6, precio: 69500}, 
                {id: "9", nombre: "Las que no duermen", autor: "Dolores Redondo", genero: "Suspense",
                    editorial: "Destino", resumen: "Una mezcla de ciencia y leyendas explora los límites entre realidad y superstición.", 
                    rating: 4.7, precio: 86500}, 
                {id: "10", nombre: "La asistenta", autor: "Freida McFadden", genero: "Thriller psicológico",
                    editorial: "Independently Published", resumen: "Una asistenta descubre oscuros secretos en una familia aparentemente perfecta.", 
                    rating: 4.6, precio: 69200},
                {id: "11", nombre: "Victoria", autor: "Paloma Sánchez-Garnica", genero: "Novela histórica",
                    editorial: "Planeta", resumen: "Ganadora del Premio Planeta 2024, aborda las vidas en el Berlín de la posguerra.", 
                    rating: 4.8, precio: 84500},                               
            ]);
        }, 2500);
    }, []);

    return books;
}