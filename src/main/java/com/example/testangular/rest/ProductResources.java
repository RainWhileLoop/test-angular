/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.testangular.rest;

import com.example.testangular.domain.Product;
import com.example.testangular.repository.ProductRepo;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author thanthathon.b
 */
@RestController()
@RequestMapping("/api/product")
public class ProductResources {
    
    private ProductRepo productRepo;

//    @Autowired not need for springboot 4
    public ProductResources(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }
    
    @GetMapping
    public List<Product> getAll() {
        return productRepo.findAll();
    }
}
