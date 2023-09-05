package com.oksee.oksee.controller;

import com.oksee.oksee.model.Establishment;
import com.oksee.oksee.repository.EstablishmentRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/est")
@CrossOrigin
public class EstablishmentsController {

    private final EstablishmentRepository repository;

    public EstablishmentsController(EstablishmentRepository repository) {
        this.repository = repository;
    }

    // make a request and find all establishments in the system
    @GetMapping("")
    public List<Establishment> findAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Establishment findByID(@PathVariable Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Establishment Not Found!"));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public void create(@Valid @RequestBody Establishment est) {
        repository.save(est);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    public void update(@RequestBody Establishment est, @PathVariable Integer id) {
        if (!repository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Establishment Not Found!");
        }

        repository.save(est);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        repository.deleteById(id);
    }

    @GetMapping("/filter/title/{tit}")
    public List<Establishment> listByTitle(@PathVariable String tit) {
        System.out.println(">>>> Searching Titles");
        return repository.listByEstablishmentTitle(tit);
    }

    @GetMapping("/filter/category/{cat}")
    public List<Establishment> findByCategory(@PathVariable String cat) {

        System.out.println(">>>> Searching Category");
        return repository.listByEstablishmentCategory(cat);
    }

}
