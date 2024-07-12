FROM httpd:2.4
COPY ./assets /var/www/iyp/assets
COPY ./index.html /var/www/iyp/
COPY ./conf/httpd.conf /usr/local/apache2/conf/httpd.conf

