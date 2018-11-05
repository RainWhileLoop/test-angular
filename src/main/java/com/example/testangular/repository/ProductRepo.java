/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.testangular.repository;

import com.example.testangular.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author thanthathon.b
 */
public interface ProductRepo extends JpaRepository<Product, Integer>{
    
}
