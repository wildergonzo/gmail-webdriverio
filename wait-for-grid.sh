#!/bin/bash
# wait-for-grid.sh

set -e

hub="$1"
shift
cmd="$@"

while ! curl -sSL "http://$hub:4444/wd/hub/status" 2>&1 \
        | jq -r '.value.ready' 2>&1 | grep "true" >/dev/null; do
    echo 'Waiting for the Grid'
    sleep 1
done

>&2 echo "Selenium Grid is up - executing tests"
exec $cmd