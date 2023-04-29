const forgotPasswordHtml = (params) => {
  return `<div id="m_-6849740353837419289body" bgcolor="#ffffff" marginwidth="0" marginheight="0">
  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center">
    <tbody>
      <tr bgcolor="#5C43FF" style="border-radius:8px;">
        <td valign="top" align="left" style="padding:24px;"><img
            src="https://static.meditech-app.com/meditech-logo-horizontal-white.png" alt="" width="280px">
        </td>
      </tr>
      <tr>
        <td height="25px">&nbsp;</td>
      </tr>
      <tr>
        <td>
          <p
            style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;text-align:left;margin:0px 24px 0px 24px;color:#171140">
            <b>Hola ${params.firstName},</b>
          </p>
          <p
            style="font-family:Arial,Tahoma,Helvetica;font-size:24px;line-height:32px;text-align:left;margin:15px 24px 0px 24px;color:#5C43FF">
            <b>Recuperación de contraseña</b>
          </p>          
          <p
            style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;text-align:left;margin:15px 24px 0px 24px;color:#171140">
            Tu código de recuperación de contraseña es: <b>${params.recoveryCode}</b></p>
        </td>
      </tr>
      <tr>
        <td height="40px">&nbsp;</td>
      </tr>
      <tr>
        <td valign="bottom" align="center" width="100%" style="padding:30px 24px 50px">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="300">
                <tbody>
                    <tr>
                        <td width="300" style="border-radius:50px;margin:0 auto;padding:14px 15px" align="center" bgcolor="#5C43FF">
                            <p style="font-size:18px;color:#ffffff;margin:0"><a href="https://meditech-app.com" style="text-align:center;color:#ffffff;text-decoration:none;display:block;width:100%;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;padding:0" title="" target="_blank">Ir a MediTech</a></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
    </tr>
      <tr>
        <td>
          <table style="margin:0px 0px 0px 24px" width="552" cellpadding="0" cellspacing="0" border="0" align="center">
            <tbody>
              <tr>
                <td valign="top" align="center" width="70">
                  <img style="margin:0px 0px 0px 0px;padding: 16px;display:block"
                    src="https://static.meditech-app.com/alert-icon.png" alt="" width="70">
                </td>
                <td valign="center" align="center" width="24">&nbsp;</td>
                <td width="480" valign="center">
                  <p
                    style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;color:#5C43FF;text-align:left;margin:0px 24px 0px 0px">
                    <b>¿Tienes algun incoveniente?</b>
                  </p>
                  <p
                    style="font-family:Arial,Tahoma,Helvetica;font-size:16px;line-height:24px;color:#171140;text-align:left;margin:0px 24px 0px 0px">
                    Comunícate inmediatamente con nosotros al (01)​ 311-​9898 anexo *225 para ayudarte con tu
                    requerimiento.</p>
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
          <img src="https://static.meditech-app.com/meditech-logo-vertical-white.png" alt="" width="180px"
            style="padding-top: 16px;">
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
                            En nuestras comunicaciones nunca incluiremos links a otras páginas, no adjuntaremos
                            archivos, no solicitaremos tus datos personales o información sensible. Meditech bajo ningún
                            motivo te solicitará pagos adicionales o fuera de nuestra plataforma. Cualquier correo que
                            llegue con nuestro nombre y presente alguna de las características mencionadas debe ser
                            eliminado inmediatamente. Recuerda, nuestros correos serán personalizados; siempre estarán
                            dirigidos a tu nombre.
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
  </div>`}
  
  module.exports = forgotPasswordHtml;