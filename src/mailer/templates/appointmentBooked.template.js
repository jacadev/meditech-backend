const htmlContent = 
`<div id="m_-6849740353837419289body" bgcolor="#ffffff" marginwidth="0" marginheight="0">
<table width="600" cellpadding="0" cellspacing="0" border="0" align="center">
  <tbody>
    <tr bgcolor="#5C43FF" style="border-radius:8px;">        
      <td valign="top" align="left" style="padding:24px;"><img
          src="https://static.meditech-app.com/meditech-logo-horizontal-white.png"
          alt="" width="280px">
        </td>
    </tr>
    <tr>
      <td height="25px">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;text-align:left;margin:00px 24px 0px 24px;color:#171140">
          <b>Hola {{ params.firstName }},</b>
        </p>
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:24px;line-height:32px;text-align:left;margin:15px 24px 0px 24px;color:#5C43FF">
          <b>Tu cita se ha registrado exitosamente.</b>
        </p>
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;text-align:left;margin:15px 24px 0px 24px;color:#171140">
          A continuación, <b>te mostramos los detalles de tu cita.</b></p>
      </td>
    </tr>
    <tr>
      <td height="40px">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <table width="552" cellpadding="20" cellspacing="0" border="0" align="center">
          <tbody>
            <tr>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:left;border-radius:0px 0px 0px 0px"
                bgcolor="#F5F8FF" valign="top">Fecha de la cita</td>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:right"
                bgcolor="#F5F8FF" valign="top"><b>{{ params.appointmentDate }}</b></td>
            </tr>
            <tr>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:left"
                bgcolor="#ffffff" valign="top">Hora</td>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:right"
                bgcolor="#ffffff" valign="top"><b>{{ params.appointmentTime }}</b></td>
            </tr>
            <tr>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:left"
                bgcolor="#F5F8FF" valign="top">Consulta médica con</td>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:right"
                bgcolor="#F5F8FF" valign="top"><b>Dr. {{ params.doctorName }}</b></td>
            </tr>
            <tr>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:left"
                bgcolor="#ffffff" valign="top">Especialidad médica</td>
              <td
                style="font-family:Arial,Tahoma,Helvetica;font-size:14px;line-height:24px;color:#202e44;text-align:right"
                bgcolor="#ffffff" valign="top"><b>{{ params.specialty }}</b></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td height="35px">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <table style="margin:0px 0px 0px 24px" width="552" cellpadding="0" cellspacing="0" border="0" align="center">
          <tbody>
            <tr>
              <td valign="top" align="center" width="70">
                <img style="margin:0px 0px 0px 0px;padding: 16px;display:block"
                  src="https://static.meditech-app.com/alert-icon.png"
                  alt="" width="70" class="CToWUd" data-bit="iit">
              </td>
              <td valign="center" align="center" width="24">&nbsp;</td>
              <td width="480" valign="center">
                <p
                  style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;color:#5C43FF;text-align:left;margin:0px 24px 0px 0px">
                  <b>¿Necesitas reprogramar tu cita?</b>
                </p>
                <p
                  style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;color:#171140;text-align:left;margin:0px 24px 0px 0px">
                  Comunícate inmediatamente con nosotros al (01)​ 311-​9898 anexo *225 para ayudarte a reprogramar tu
                  cita.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td height="40px">&nbsp;</td>
    </tr>
    <tr>
      <td height="40px">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:24px;line-height:32px;text-align:left;margin:0px 24px 0px 24px;color:#5C43FF">
          <b>¡Tu salud es nuestra prioridad!</b>
        </p>
      </td>
    </tr>
    <tr>
      <td height="40px">&nbsp;</td>
    </tr>      
    <tr>
      <td height="16px">&nbsp;</td>
    </tr>
    <tr bgcolor="#5C43FF" style="border-radius:8px;">
      <td width="480" style="padding: 32px;" align="center">
        <img
          src="https://static.meditech-app.com/meditech-logo-vertical-white.png"
          alt="" width="180px" style="padding-top: 16px;">
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:17px;line-height:24px;color:#ffffff;text-align:center;padding-top: 24px;">
          <b>En caso tengas dudas o consultas:</b>
        </p>          
        <p
          style="font-family:Arial,Tahoma,Helvetica;font-size:15px;line-height:24px;color:#ffffff;text-align:center;padding-bottom: 16px;">
          Comunícate con nosotros al (01)​ 311-​9898
        </p>
        
                
      </td>    
    </tr>
    <tr>
      <td height="16px">&nbsp;</td>
    </tr>
    <tr>
      <td>
        <table align="center" width="552" cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr>
              <td>
                <table width="552" cellpadding="0" cellspacing="0" border="0" align="center">
                  <tbody>
                    <tr>
                      <td width="470" valign="top"
                        style="font-family:Arial,Tahoma,Helvetica;font-size:9px;line-height:16px;color:#171140;text-align:justify">
                        <p
                          style="font-family:Arial,Tahoma,Helvetica;font-size:9px;line-height:16px;text-align:justify;margin:0px 0px 0px 0px">
                          En nuestras comunicaciones nunca incluiremos links a otras páginas, no adjuntaremos archivos, no solicitaremos tus datos personales o información sensible. Meditech bajo ningún motivo te solicitará pagos adicionales o fuera de nuestra plataforma. Cualquier correo que llegue con nuestro nombre y presente alguna de las características mencionadas debe ser eliminado inmediatamente. Recuerda, nuestros correos serán personalizados; siempre estarán dirigidos a tu nombre.
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td height="16px">&nbsp;</td>
    </tr>      
  </tbody>
</table>  
</div>`

module.exports = htmlContent;