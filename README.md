## sequelize_test_001

### simple example with sequelize nodejs package and sqlite and winston
npm init 
npm install

### run the index.js script
node ./index.js

### this is the result of the running script
```node ./index.js                    
Executing (default): SELECT 1+1 AS result
Connection has been established successfully.
Executing (default): DROP TABLE IF EXISTS `MyTables`;
Executing (default): PRAGMA foreign_keys = OFF
Executing (default): DROP TABLE IF EXISTS `MyTables`;
Executing (default): PRAGMA foreign_keys = ON
Executing (default): DROP TABLE IF EXISTS `MyTables`;
Executing (default): CREATE TABLE IF NOT EXISTS `MyTables` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `age` INTEGER, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`MyTables`)
MyTable created successfully!
Executing (default): INSERT INTO `MyTables` (`id`,`name`,`age`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4);
Created record: {
  id: 1,
  name: 'John Doe',
  age: 30,
  updatedAt: 2023-03-31T11:34:08.531Z,
  createdAt: 2023-03-31T11:34:08.531Z
}
Executing (default): SELECT `id`, `name`, `age`, `createdAt`, `updatedAt` FROM `MyTables` AS `MyTable`;
All records: [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    createdAt: 2023-03-31T11:34:08.531Z,
    updatedAt: 2023-03-31T11:34:08.531Z
  }
]
```

### using with mysql 
npm install mysql2  
