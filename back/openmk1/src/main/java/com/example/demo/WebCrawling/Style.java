package com.example.demo.WebCrawling;

import io.github.bonigarcia.wdm.WebDriverManager;
import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;               ////////////셀레니움
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

//////////////////////////////////
////////////////////////////
import java.util.ArrayList;
import java.util.List;


@Slf4j

    public class Style {
        public static List<String> CrawlingImages() {
            List<String> imageUrls = new ArrayList<>();

            WebDriverManager.chromedriver().setup();
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--lang=ko_KR");
            WebDriver driver = new ChromeDriver(options);

            try {
                driver.get("https://kream.co.kr/social/tabs/style_discovery?ka=1");
                List<WebElement> imageElements = driver.findElements(By.cssSelector("img.image.full_width"));

                int numOfImages=20;
                int count = Math.min(numOfImages, imageElements.size());
                for (int i = 0; i < count; i++) {
                    String imageUrl = imageElements.get(i).getAttribute("src");
                    imageUrls.add(imageUrl);
                }


            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                driver.quit();
            }


            return imageUrls;
        }
}