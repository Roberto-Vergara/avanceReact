

export default function ActCes({setOpcion}){

    return(
        <div  style={{backgroundColor:"white",width:"370px",height:"210px",marginLeft:"2px",marginTop:"10px",borderRadius:"7px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <h2>Actualizar CESFAM del paciente</h2>
        <button onClick={setOpcion}>Volver</button>

        <form action="">
            <input type="text" placeholder="Nombre CESFAM" />
            <input type="text" placeholder="Sector" />
            <button>Guardar</button>
        </form>

        
        
        </div>
    )
}