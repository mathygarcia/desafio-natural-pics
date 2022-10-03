// importamos el contexto que requerimos consumir
import Context from "../Context/Context";

// importamos useContext para consumir el contexto
import { useContext } from "react";

//importamos estilos de react bootstrap
import Card from "react-bootstrap/Card";

export default function Favoritos() {
  const { fotos } = useContext(Context);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {fotos.map((foto) => (
          <>
            {foto.liked ? (
              <Card style={{ width: "100%" }} key={foto.id}>
                <Card.Img variant="top" src={foto.src.tiny}></Card.Img>
              </Card>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}
