#DIR=$(dirname "$BASH_SOURCE")
#DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
DIR=$(dirname "$0")
command="${DIR}/cassandra -p ${DIR}/../pid/cassandra.pid"

echo ------------------------------------------------------------------------------------
echo "Starting Apache Cassandra: ${command} in [${DIR}]"
echo ------------------------------------------------------------------------------------
eval $command
