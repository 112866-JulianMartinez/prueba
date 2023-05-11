use Biblioteca
db.createCollecion("Alumnos")
db.createCollection("Libros")
db.Libros.insert({"Fecha de publicacion": new Date()})
db.Libros.find()
db.Libros.insertmany([{"Nombre":"Harry Potter y la cámara secreta","Editorial":"Salamandra","Autor":"J.K. Rowling","Género":"Fantasía","SubGénero":"Novela de aventura, literatura fantastica  y literatura juvenil","Fecha de publicacion":new Date("23,11,1999"),}])