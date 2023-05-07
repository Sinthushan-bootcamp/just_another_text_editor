 # <img src="./client/src/images/logo.png" alt= "JATE Logo" width="95" height="95">  Just Another Text Editor (JATE) 

![MIT license](https://img.shields.io/badge/license-MIT-blue)
## Description 

This blog allows users to create an account and write tech related blog post. users can update and delete their post as they see fit and can view and comment on post by others.

## Table of Contents
* [installation](#installation)
* [Usage](#usage)
* [License](#license)

## Installation
To install necessary dependencies, run the following command:
```
npm i
```
Ensure that you have MySQL installed as well as an account created!

## Usage

Please see deployed site [here](https://apricot-cupcake-54390.herokuapp.com/)

First clone the repo and from the command line CD into the directory. Once in the directory follow the [install instructions](#installation) and then follow the following steps:

### Steps
1. First create the necessary schema. To do this use the MySQL CLI by running the following commands:
    ```
    mysql -u <your username> -p
    ```
    the press enter and then put in your password

    Then run the following:
    ```
    source ./db/schema.sql
    ```
2. Update the configuration file in the config folder to add your MySQL credentials
3. run ```npm seed``` to seed the database with initial data
4. Once the database is made and seeded and the configuration is corrected you can then run ```npm start```
5. go to localhost and port you specified (default is 3001)

## License
This project is licensed under the MIT.