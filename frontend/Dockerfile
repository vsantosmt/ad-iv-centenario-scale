# Usar a imagem oficial do Nginx
FROM nginx:alpine

# Definir o diretório de trabalho no container
WORKDIR /usr/share/nginx/html

COPY frontend/ /usr/share/nginx/html/

# Expor a porta 80 para acessar o conteúdo via navegador
EXPOSE 80

# O Nginx já serve os arquivos automaticamente, então não é necessário um comando adicional
CMD ["nginx", "-g", "daemon off;"]
