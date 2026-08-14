package com.sentinelcore.sentinelcorebackend;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableScheduling
public class SentinelCoreBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SentinelCoreBackendApplication.class, args);
    }

}
