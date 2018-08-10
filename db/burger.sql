create database burgers_db;

use burgers_db;

drop table if exists burgers;

create table burgers (
	burger_id integer(11) auto_increment not null,
    burger_name varchar(100) not null,
    devoured boolean,
    primary key(burger_id)
    );
    
insert into burgers (burger_name, devoured)
	values
    ('Cheddar and Pickle', false),
    ('Bleu and Bacon', false),
    ('Manchego and Onions', false);
    
select * from burgers;