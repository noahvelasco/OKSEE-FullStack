package com.oksee.oksee.repository;

import org.springframework.data.repository.ListCrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jdbc.repository.query.Query;

import java.util.List;

import com.oksee.oksee.model.Establishment;

public interface EstablishmentRepository extends ListCrudRepository<Establishment, Integer> {

    // List<Establishment> findAllByTitleContains(String keyword);

    // Go to 'backend\src\main\resources\schema.sql' to view the database
    @Query("""
            SELECT * FROM establishment
            where title = :title
            """)
    List<Establishment> listByEstablishmentTitle(@Param("title") String title);

    @Query("""
            SELECT * FROM establishment
            where category = :category
            """)
    List<Establishment> listByEstablishmentCategory(@Param("category") String category);

}
