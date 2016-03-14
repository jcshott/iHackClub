DROP DATABASE IF EXISTS ihackclub;
CREATE DATABASE ihackclub;

USE ihackclub;

DROP TABLE IF EXISTS user_profile;

CREATE TABLE user_profile (
  user_key VARCHAR(64) PRIMARY KEY,
  username VARCHAR(50),
  password_hash VARCHAR(128),
  user_email VARCHAR(256),
  contact_pref ENUM('yes', 'no'),
  user_fname VARCHAR(100),
  user_lname VARCHAR(100),
  user_street VARCHAR(1000),
  user_city VARCHAR(250),
  user_state VARCHAR(2),
  user_zip VARCHAR(9),
  user_country VARCHAR(100),
  technology VARCHAR(1000),
  industry VARCHAR(1000),
  linkedin_url VARCHAR(1000),
  angels_list VARCHAR(1000),
  profile_desc VARCHAR(2000),
  field1 VARCHAR(1000),
  field2 VARCHAR(1000),
  field3 VARCHAR(1000),
  field4 VARCHAR(1000),
  field5 VARCHAR(1000)
);