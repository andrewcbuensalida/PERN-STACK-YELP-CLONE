"# PERN-STACK-YELP-CLONE"
https://www.youtube.com/watch?v=7qAXvOFhlDc

create table restaurants (
id bigserial not null primary key,
name varchar(50) not null,
location varchar(50) not null,
price_range int not null check(price_range>=1 and price_range <= 5)
);

insert into restaurants (name,location,price_range) values (E'carl\'s','Vietnam',5);
