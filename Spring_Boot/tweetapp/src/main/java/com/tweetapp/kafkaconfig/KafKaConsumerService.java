package com.tweetapp.kafkaconfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafKaConsumerService 
{
    private final Logger logger = 
            LoggerFactory.getLogger(KafKaConsumerService.class);
 
    @KafkaListener(topics = AppConstants.TOPIC_NAME_USER,
            groupId = AppConstants.GROUP_ID)
    public void userconsume(String message)
    {
        logger.info(String.format("Message recieved -> %s", message));
    }

    @KafkaListener(topics = AppConstants.TOPIC_NAME_TWEET,
            groupId = AppConstants.GROUP_ID)
    public void tweetconsume(String message)
    {
        logger.info(String.format("Message recieved -> %s", message));
    }
}
