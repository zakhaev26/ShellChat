import socket

server = socket.create_server(('127.0.0.1',3000))
server.accept()


print(server)
