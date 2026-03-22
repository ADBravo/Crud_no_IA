create database lista;
use lista;

create table productos(
id int auto_increment,
nombre varchar(255),
cantidad int,
precio float,
primary key(id)
);