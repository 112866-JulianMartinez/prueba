show dbs
use Facultad
db.createCollection("Alumnos")
db.Alumnos.insertOne({"Legajo":112866,"apellido":"Martinez","nombre": "Julian","fec_nac": new Date ("1998, 9, 12"),"intereses": ["futlbol", "video juegos","Ciencia Ficcion"],"año_ingreso_utn": 2021})
 db.Alumnos.find()                     