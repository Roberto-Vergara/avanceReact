

export default function CallNRR({setOpcion}){

  

    return(
        <div  style={{backgroundColor:"white",width:"370px",height:"210px",marginLeft:"2px",marginTop:"10px",borderRadius:"7px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        
        <section style={{width:"100%"}}>
            <h2>Call center no reconocer RUT</h2>
            <button onClick={setOpcion}>Volver</button>
        </section>
        <p>Esttimado/a:</p>
        <p>De acuerdo a nuestros datos, usted no está <br />registrado como paciente en HoraSalud. <br /> Puede firmar el consentimiento para inscribirse,<br /> o bien, puede hacerlo después por Call Center, <br /> App o Portal web/a:</p>
        <p>Siga las instrucciones hasta el final, asi quedara: <br />inscrito y podra usar el servicio</p>
        
        
        
        </div>
    )
}