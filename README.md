# Ecotec

# Instalación
Ejecutar update-database
Despues de ejecutar la aplicación 
validar si se creo la relación de usuario y rol
Ejecutar el siguente commando en caso contrario "INSERT INTO [dbo].[AspNetUserRoles] ( UserId,RoleId ) SELECT  (SELECT top 1 UserId  FROM AspNetUsers) as UserId, (SELECT top 1 Id  FROM AspNetRoles) as RoleId"

Usuario: master@proyectosApi.com.mx
Contraseña: xZiYfns8799EXu7F3Zu9

Para la aplicación de angular ejecutar en la consola npm start
antes npm i 

