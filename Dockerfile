FROM httpd
ADD /public-html /usr/local/apache2/htdocs/
ADD /src /usr/local/apache2/htdocs/src/
#Put all files and folders in folder named public-html
