package com.example.testangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class TestAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestAngularApplication.class, args);
	}
}
