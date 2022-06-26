CREATE DATABASE nba_memories 

CREATE TABLE posts(
    post_id SERIAL PRIMARY KEY, 
    message VARCHAR(300), 
    tags TEXT[], 
    image BYTEA,
    date TIMESTAMP
);