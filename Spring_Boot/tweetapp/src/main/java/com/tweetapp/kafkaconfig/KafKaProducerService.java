package com.tweetapp.kafkaconfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate; 
import org.springframework.stereotype.Service;

@Service
public class KafKaProducerService {
    private static final Logger logger =
            LoggerFactory.getLogger(KafKaProducerService.class);

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage(String message) {
        logger.info(String.format("User sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.TOPIC_NAME_USER, message);
    }
    public void sendtweet(String message) {
        logger.info(String.format("Tweet sent -> %s", message));
        this.kafkaTemplate.send(AppConstants.TOPIC_NAME_TWEET, message);
    }
}
