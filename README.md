# Springboot-React-Car-Crud-using-API-

This is car crud application made up bt react and spring boot using REST API

Requirements
1.Eclipse
2.Mysql
3.Visual studio code

donwload and extract open folder structure cut folder name spring-boot-backend and import to eclipse
react folder run on visual studio code editor

create database name car in mysql server

got to src->main->resurces in spring boot eclipse and modify application file to username and password depend on your database configuration


spring.datasource.url=jdbc:mysql://localhost:3307/car?useSSL=false
spring.datasource.username=root
spring.datasource.password="your password"


#Hbibernate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5InnoDBDialect

spring.jpa.hibernate.ddl-auto=update

logging.level.org.hibernate.SQL=DEBUG

spring.jpa.show-sql=true
