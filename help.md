# Local setup steps

## Start the wsl Ubuntu Image:
>  wsl -d Ubuntu-20.04

## Start the   apache & mysql services:
> service apache2 start

> service mysql start

## Check status using:
> systemctl status apache2.service

> systemctl status mysqld.service

## Make the new apache conf file:
> cd /etc/apache2/

> cd /etc/apache2/sites-available/

> cp db2.localhost.conf newsite.localhost.conf 

## Add the updates to the config files.

## Enable the new conf files:
> sudo a2ensite db2.localhost.conf

> sudo a2dissite db2.localhost.conf

## Reload Apache service:
> systemctl reload apache2

## Run the Laravel test server:
> php artisan serve

## Permission issue cmd:  

> whoami

> sudo usermod -a -G www-data `whoami`

> sudo chown root:root www/

> sudo chmod 755 www/

> sudo chown -R www-data:www-data www/larard-admin/

> sudo chmod -R 774 www/larard-admin/public

> sudo chown -R www-data:www-data larard-admin/public
