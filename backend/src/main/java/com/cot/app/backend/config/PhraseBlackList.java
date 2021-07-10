package com.cot.app.backend.config;

import javax.annotation.PostConstruct;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * @author DavidJMartin
 */
@Component
@ConfigurationProperties(prefix = "report.field.removal-list")
@Getter
@Setter
@Slf4j
public class PhraseBlackList {

    private String phraseOne;
    private String phraseTwo;
    private String phraseThree;

    @PostConstruct
    public void check() {
        log.info("phraseOne: " + phraseOne);
        log.info("phraseTwo: " + phraseTwo);
        log.info("phraseThree: " + phraseThree);
    }

}
