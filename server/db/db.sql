CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    doctor_id BIGINT NOT NULL REFERENCES doctors(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(
        rating >= 1
        and rating <= 5
    )
);
select *
from doctors
    left join(
        select doctor_id,
            count(*),
            TRUNC(AVG(rating), 1) as average_rating
        from reviews
        group by doctor_id
    ) reviews on doctors.id = reviews.doctor_id;


    ?
create table doctors (
    id bigserial not null primary key,
    name varchar(50) not null,
    company varchar(50) not null,
    price_range int not null check(price_range>=1 and price_range <= 5)
);