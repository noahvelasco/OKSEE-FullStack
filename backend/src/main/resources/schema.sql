CREATE TABLE IF NOT EXISTS ESTABLISHMENT (
    id INTEGER AUTO_INCREMENT,
    category varchar(255) NOT NULL,
    associated_filter varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    service_options varchar(255) NOT NULL,
    rating varchar(255) NOT NULL,
    hours varchar(255) NOT NULL,
    address varchar(255) NOT NULL,
    thumbnail varchar(255) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    PRIMARY KEY (id)
);


-- INSERT INTO Content (title, desc, status, content_type, date_created )
-- VALUES ('Spring Data Blog Post', 'A post about spring data', 'IDEA', 'ARTICLE', CURRENT_TIMESTAMP)