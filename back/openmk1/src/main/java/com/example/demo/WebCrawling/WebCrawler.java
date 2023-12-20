package com.example.demo.WebCrawling;

import com.example.demo.model.Product;
import io.github.bonigarcia.wdm.WebDriverManager;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.time.LocalTime;

@Slf4j
public class WebCrawler {

    public static Product Crawling(String address) {

        Product product= new Product();
        log.info("crawling start");
        LocalTime currentTime = LocalTime.now();
        boolean isOnTheHour = currentTime.getMinute() == 0 && currentTime.getSecond() == 0;

        if(true/*isOnTheHour*/){ // 분==0, 초==0 -> 정시를 의미. 정시마다 업데이트
            WebDriverManager.chromedriver().setup();

            ChromeOptions options = new ChromeOptions();

            // 1. User-Agent 헤더 설정
            options.addArguments("--lang=ko_KR");
            options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36");

            WebDriver driver = new ChromeDriver(options);

            try {
                log.info("start web: {}", address);
                driver.get(address);

                WebElement imageElement = driver.findElement(By.cssSelector("img.image.full_width"));
                String imgsrc = imageElement.getAttribute("src");

                WebElement imageElement1 = driver.findElement(By.cssSelector("p.title"));
                String name = imageElement1.getText();

                WebElement imageElement2 = driver.findElement(By.cssSelector("span.title-txt"));
                String size = imageElement2.getText();

                WebElement imageElement3 = driver.findElement(By.cssSelector("em.num"));
                String price = imageElement3.getText();
                price = price.replace(",", "");
                int num2 = Integer.parseInt(price);

                product.SetProduct(imgsrc, name, size, num2);
                log.info("img: {}, name: {}, size: {}, price: {}", product.getImgsrc(), product.getName(), product.getSize(), product.getPrice());

            } catch (Exception e) {
                log.error("An error occurred: ", e);
            } finally {
                driver.quit();
            }
        }

        System.out.println("success\n");
        return product;
    }
}