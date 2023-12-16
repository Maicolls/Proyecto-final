/* import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    localhost: 'localhost',
    user: 'root',
    password: "",
    database: "manzanascuidado"
})

app.post('/registrarse', (req, res)=>{
    const values = [
        req.body.idDoc_mujer,
        req.body.tpDoc_mujer,
        req.body.nom_mujer,
        req.body.apell_mujer,
        req.body.tel_mujer,
        req.body.email_mujer,
        req.body.passw_mujer,
        req.body.ciu_mujer,
        req.body.dir_mujer,
        req.body.ocu_mujer]
    
    const con = `SELECT idDoc_mujer from mujeres where idDoc_mujer = ?`
    db.query(con, [values[0]], (err, result)=>{
        if (err) {
            return res.json(err);
        }
        if(result.length > 0) {
            res.json({ error: 'El ID ya existe'});
        }
    const sql = "INSERT INTO mujeres (idDoc_mujer, tpDoc_mujer, nom_mujer, apell_mujer, tel_mujer, email_mujer, passw_mujer, ciu_mujer, dir_mujer, ocu_mujer) VALUES (?)";
        db.query(sql, [values], (err, result) =>{
            if(err){
                res.json(err); 
                res.status(201).json({ message: 'Registro exitoso' })
            }res.json(result)
    })
})
})

app.listen(4000,()=>{
    console.log('Estamos en el puerto 4000')
}) */

import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
/* import router from './routes.js' */
import db from './db.js'

const app = express();
app.use(cors());
app.use(express.json())

/* const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "manzanascuidado"
}) */
/* 
        ] */
    
    /* app.get("/registrar/persona",(req,res)=>{
        const con = `SELECT id_usuario from usuarios where id_usuario = ?`
        db.query(con, [values[0]], (err, result)=>{
            if (err) {return res.json('error');}
            if(result.length > 0) 
               return  res.json({ error: 'El ID ya existe'});
            
        })
    })  */

    app.post('/inicio_sesion/persona', (req, res) => {
        const values = [
          req.body.correo_mj,
          req.body.contraseña_mj
        ];
      
        const sql =(`SELECT * FROM usuarios WHERE correo_mj = '${correo_mj}' AND contraseña_mj = '${constraseña_mj}'`)
         db.query(sql, [values], (err, result) => {
          if (err) {
            return res.json(err);
          }
          return res.json(result);
        });
        res.redirect('admin/manzanas')
      });
    
    app.post('/registrar/persona', (req, res) => {
        const values = [
          req.body.tipodedoc_mj,
          req.body.nombre_mj,
          req.body.apellido_mj,
          req.body.telefono_mj,
          req.body.correo_mj,
          req.body.contraseña_mj,
          req.body.ciudad_mj,
          req.body.direccion_mj,
          req.body.ocupacion_mj
        ];
      
        const sql = 'INSERT INTO usuarios (tipodedoc_mj, nombre_mj, apellido_mj, telefono_mj, correo_mj, contraseña_mj, ciudad_mj, direccion_mj, ocupacion_mj) VALUES (?)';
      
        db.query(sql, [values], (err, result) => {
          if (err) {
            return res.json(err);
          }
          return res.json(result);
        });
      });
      

//Manzanas
app.get("/admin/manzanas", (req, res)=>{
    const sql = "Select * from manzanas"
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.post("/admin/manzanas/crear", function(req, res){
    const sql = "INSERT INTO manzanas (nombre_m, localidad_m, direccion_m) VALUES (?)"
    const values =[
        req.body.nombre_m,
        req.body.localidad_m,
        req.body.direccion_m
    ]
    db.query(sql, [values], (err, result)=>{
        if(err) 
        return res.json(err);
        return res.json(result)
    })
})

app.get("/admin/manzanas/leer/:id_manzanas", (req, res)=>{
    const sql = "Select * FROM manzanas WHERE id_manzanas = ?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [id_manzanas], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.put("/admin/manzanas/editar/:id_manzanas", (req, res)=>{
    const sql = "UPDATE manzanas SET nombre_m=?, localidad_m=?, direccion_m=? WHERE id_manzanas=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [req.body.nombre_m, req.body.localidad_m, req.body.direccion_m, id_manzanas], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.delete("/admin/manzanas/eliminar/:id_manzanas", (req, res)=>{
    const sql = "DELETE from manzanas WHERE id_manzanas=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [id_manzanas], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})


//Municipios
app.get("/admin/establecimiento", (req, res)=>{
    const sql = "Select * from establecimiento"
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})
    
app.post("/admin/establecimiento/crear", function(req, res){
    const sql = "INSERT INTO establecimiento (nombre_e,administrador_e,direccion_e) VALUES (?)"
    const values =[
        req.body.nombre_e,
        req.body.administrador_e,
        req.body.direccion_e,

    ]
    db.query(sql, [values], (err, result)=>{
        if(err) 
        return res.json(err);
        return res.json(result)
    })
})
    
app.get("/admin/establecimiento/leer/:id_establecimiento", (req, res)=>{
    const sql = "Select * FROM establecimiento WHERE id_establecimiento = ?"
    const id_establecimiento = req.params.id_establecimiento
    db.query(sql, [id_establecimiento], (err, result)=>{
        if(err) return res.json({Message:"Soy yo el error"})
        return res.json(result)
    })
})
    
app.put("/admin/establecimiento/editar/:id_establecimiento", (req, res)=>{
    const sql = "UPDATE establecimiento SET nombre_e=? WHERE id_establecimiento=?"
    const id_establecimiento = req.params.id_establecimiento
    const nombre_e = req.body.nombre_e
    db.query(sql, [nombre_e, id_establecimiento], (err, result)=>{
        if(err) return res.json({Message:"Soy yo el error"})
        return res.json(result)
    })
})
    
app.delete("/admin/establecimiento/eliminar/:id_establecimiento", (req, res)=>{
    const sql = "DELETE from establecimiento WHERE id_establecimiento=?"
    const id_establecimiento = req.params.id_establecimiento
    db.query(sql, [id_establecimiento], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

//Servicios
app.get("/admin/servicios", (req, res)=>{
    const sql = "Select * from servicios"
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.post("/admin/servicios/crear", function(req, res){
    const sql = "INSERT INTO servicios (nombre_s, descripcion_s, tipo_s, categoria_s) VALUES (?)"
    const values =[
        req.body.nombre_s,
        req.body.descripcion_s,
        req.body.tipo_s,
        req.body.categoria_s
    ]
    db.query(sql, [values], (err, result)=>{
        if(err) 
        return res.json(err);
        return res.json(result)
    })
})

app.get("/admin/servicios/leer/:id_servicios", (req, res)=>{
    const sql = "Select * FROM servicios WHERE id_servicios = ?"
    const id_servicios = req.params.id_servicios
    db.query(sql, [id_servicios], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.put("/admin/servicios/editar/:id_servicios", (req, res)=>{
    const sql = "UPDATE manzanas SET nombre_s=?, descripcion_s=?, tipo_s=?, categoria_s=? WHERE id_servicios=?"
    const id_manzanas = req.params.id_manzanas
    db.query(sql, [req.body.nombre_s, req.body.descripcion_s, req.body.tipo_s, req.body.categoria_s, id_manzanas], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})

app.delete("/admin/servicios/eliminar/:id_servicios", (req, res)=>{
    const sql = "DELETE from servicios WHERE id_servicios=?"
    const id_servicios = req.params.id_servicios
    db.query(sql, [id_servicios], (err, result)=>{
        if(err) return res.json({Message:"Error"})
        return res.json(result)
    })
})



app.listen(4000, ()=>{
    console.log("Estamos en el puerto 4000")
}) 

