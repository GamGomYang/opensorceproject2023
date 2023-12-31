package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurer implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**").allowedMethods("*");
//                .allowedOrigins("*") // 모든 Origin 허용
//                .allowedMethods("*") // 모든 HTTP 메소드 허용
//                .allowedHeaders("*"); // 모든 Header 허용
    }


}



