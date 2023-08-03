"use client"

import Pagina from "./Pagina";

function Preview() {
    const generarContenidoCV = () => {
        return [
          {
            tipo: "informacionPersonal",
            nombre: "Juan Perez",
            telefono: "555-1234",
            email: "juanperez@email.com",
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
    
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
          {
            tipo: "experienciaLaboral",
            puesto: "Desarrollador Web",
            empresa: "Acme Inc.",
            periodo: "2019 - Presente",
            logros: [
              "Lideré migración a React",
              "Mejoré eficiencia del equipo en un 15%",
            ],
          },
    
          {
            tipo: "educacion",
            titulo: "Ingeniería Informática",
            institucion: "Universidad Tecnológica",
            periodo: "2010 - 2014",
          },
          {
            tipo: "habilidadesTecnicas",
            skills: ["JavaScript", "React", "Node.js", "Python"],
          },
        ];
      };
    
      const paginas = generarContenidoCV();
  return (
    <div className="vista-previa">
      {/*{paginas.map((pag, i) => (
          <Pagina key={i}>{pag}</Pagina>
      ))}*/}
      <p>hola</p>
    </div>
  )
}

export default Preview