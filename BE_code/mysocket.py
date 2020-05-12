import socket, sys , time

try:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
except socket.error as msg:
    sys.stderr.write("[ERROR] %s\n" % msg[1])
    sys.exit(1)

sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)  # reuse tcp
sock.bind(('192.168.60.102', 5000))
sock.listen(5)
sock.settimeout(20)

while True:
    t0 =time.time()
    (csock, adr) = sock.accept()
    print("Client Info: ", csock, adr)
    msg = csock.recv(1600)
    print(msg)
    csock.close()
    t1 = time.time()
    print(t1-t0)
    print(time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()))