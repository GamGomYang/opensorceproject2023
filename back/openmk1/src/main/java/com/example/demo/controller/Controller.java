package com.example.demo.controller;
import com.example.demo.WebCrawling.Style;
import com.example.demo.WebCrawling.WebCrawler;
import com.example.demo.model.LoginDTO;
import com.example.demo.model.Product;
import com.example.demo.repsitory.CheckData;
import com.example.demo.repsitory.InitialWeb;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.ResponseEntity;

import javax.swing.*;
import java.util.List;

@Slf4j
@RestController
public class Controller {
    @Autowired
    private com.example.demo.repsitory.userDAO userDAO;

    @GetMapping("Crawling-adress")
    public  ResponseEntity<Product> Crawlingaddress(@RequestParam("url") String url){
        Product crawling = WebCrawler.Crawling(url);


        log.info("getClass");
   /*     if(!CheckData.CheckDataM(url))*/
        return ResponseEntity.ok()
                .header("Content-Type", "application/json")
                .body(crawling);

    }

    @GetMapping("Is_exsist")
    public boolean IsExsist(@RequestParam("url") String url){

    return CheckData.CheckDataM(url);
    }

@GetMapping("pageinitial")
public List<Product> getProducts() {

   return InitialWeb.getProducts();
}

    @PostMapping("/signup")
    public int signUp(@RequestBody LoginDTO loginDTO) {
        return userDAO.registerUser(loginDTO);
    }

    @GetMapping("style")
    public List<String> style(){
        return Style.CrawlingImages();
    }

}
