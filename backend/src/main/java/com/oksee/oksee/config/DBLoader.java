package com.oksee.oksee.config;

import java.io.InputStream;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
// import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.oksee.oksee.model.Establishment;
import com.oksee.oksee.repository.EstablishmentRepository;

// @Profile("dev")
@Component
public class DBLoader implements CommandLineRunner {

    private final EstablishmentRepository repository;
    private final ObjectMapper objectMapper;

    public DBLoader(EstablishmentRepository repository, ObjectMapper objectMapper) {
        this.repository = repository;
        this.objectMapper = objectMapper;
    }

    @Override
    public void run(String... args) throws Exception {

        // if the database hasnt been loaded then load the data in the json file to it
        if (repository.count() == 0) {
            try (InputStream inputStream = TypeReference.class.getResourceAsStream("/data/establishments.json");) {
                repository.saveAll(objectMapper.readValue(inputStream, new TypeReference<List<Establishment>>() {
                }));
            }
        }
    }

}
