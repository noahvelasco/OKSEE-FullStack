package com.oksee.oksee.model;

import org.springframework.data.annotation.Id;

public record Establishment(
        @Id Integer id,
        String category,
        String associatedFilter,
        String title,
        String serviceOptions,
        String rating,
        String hours,
        String address,
        String thumbnail,
        double latitude,
        double longitude

) {

}
