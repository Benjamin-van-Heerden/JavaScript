CREATE TABLE users(
    user_id serial,
    firstname character varying(50),
    lastname character varying(50),
    password character varying(50),
    username character varying(50)
);

INSERT INTO users(firstname, lastname, password, username) 
VALUES
('John', 'Doe', '12345', 'john.doe'),
('John', 'Doe', '12345', 'john.doe'),
('Max', 'Payne', '45678', 'max.payne');