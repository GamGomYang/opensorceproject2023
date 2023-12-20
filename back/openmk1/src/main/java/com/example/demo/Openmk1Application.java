package com.example.demo;

import com.example.demo.WebCrawling.IsOnTheHours;
import com.example.demo.repsitory.updateDB;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalTime;


@SpringBootApplication
@Slf4j
@EnableScheduling
public class Openmk1Application {

	public static void main(String[] args) {
		SpringApplication.run(Openmk1Application.class, args);
//정각이면 데이터 업데이트후 웹페이지 업데이트
		/*if(IsOnTheHours.isonthehours()){
			updateDB.processRecordsFromMaxBoxId(updateDB.getMaxBoxId());
		}*/
	}



/*
		@Bean// ㅇㅇㅇㅇ ㅇㅇ ㅇㅇ ㅇㅇ ㅅ?
		public String schedule() throws InterruptedException {
			while (true) {
				Thread.sleep(30 * 60 * 1000);
			*//*	Thread.sleep(10);*//*
				LocalTime now = LocalTime.now();

				int minute = now.getMinute();
				System.out.println(minute);
				if(IsOnTheHours.isonthehours()){
				updateDB.processRecordsFromMaxBoxId(updateDB.getMaxBoxId());
			}
			}
		}*/


	@Component
	public class MyScheduler {

		@Scheduled(cron = "0 0 */1 * * *") // 매 1시간마다 실행
		public void myScheduledTask() {
			updateDB.processRecordsFromMaxBoxId(updateDB.getMaxBoxId());
		}
	}


}//그쵸?시간이 넘어가면서 00초일때 돌아가게하려고했는데 5분간격은 테스트하려고 변경한거고



