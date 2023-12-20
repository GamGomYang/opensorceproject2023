package com.example.demo.WebCrawling;
import java.time.LocalTime;// 현재 시간 클래스;
public class IsOnTheHours {
    public static boolean isonthehours(){
        LocalTime currentTime = LocalTime.now();
   /*  return currentTime.getMinute() == 0 && currentTime.getSecond() == 0;*/ //  한시간 간격으로 업데이트
        return currentTime.getMinute() % 60 == 0 && currentTime.getSecond() == 0;

    }
}
