#!/bin/sh
#
# chkconfig: - 80 45
# description: Starts and stops Cassandra
# update deamon path to point to the cassandra executable
DIR=$(dirname "$0")
DEAMON="${DIR}/../res/cassandra/bin/cassandra-with-pid.sh"

start() {
        echo -n "Starting Cassandra... "
        #su - dom $DEAMON
        $DEAMON
	echo "OK"
        return 0
}

stop() {
        echo -n "Stopping Cassandra... "
	cpid=$(cat ${DIR}/../res/cassandra/pid/cassandra.pid)
        echo "Cassandra pid=${cpid}"
	kill $cpid
        echo "OK"
        return 0
}

case "$1" in
  start)
        start
        ;;
  stop)
        stop
        ;;
  restart)
        stop
        start
        ;;
  *)
        echo $"Usage: $0 {start|stop|restart}"
        exit 1
esac

exit $?

