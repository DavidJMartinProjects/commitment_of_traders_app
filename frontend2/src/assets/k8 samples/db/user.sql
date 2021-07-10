DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  score VARCHAR(250) DEFAULT NULL,
  rank VARCHAR(250) DEFAULT NULL
);

INSERT INTO users (first_name, last_name, score, rank) VALUES
  ('Dave', 'Dangote', 10, 1),
  ('Bill', 'Gates', 8, 5),
  ('Folrunsho', 'Alakija', 3, 6);