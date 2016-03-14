# iHackClub database operations

These commands are for initial database setup. They assume a working SQL installation on localhost. 
If you use the working vagrant image, it already has the working MySQL installation. Assuming your
MySQL is working, you can use the following steps to create the table:

1. Make sure you can connect to MySQL

```
mysql -u root -p
```
enter your password.

2. Navigate to `ihackclub/sql` and run the schema creation script as 
```
mysql -u root -p < createschema.sql
```
enter your password.