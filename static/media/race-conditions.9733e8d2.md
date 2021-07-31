# Race Conditions from Leviathan War Games
This problem was from level 2 of the Leviathan wargames. This was a tough level, and I did need to  
read some blogs to understand this problem.  

I noticed that there was a printfile executable in the home directory, so I ran it. It seemed to  
work just like cat, so I tried to use it to print the file containing the level 3 password.  
However, that file is owned by the level 3 group, so I cannot open it.  

I did ls -l on the printfile executable, and it turns out that the file is owned by level 3.  
Additionally, it has the set user uid bit set on it. To my understanding, when I run the file, the  
machine will interpret the process as if level 3 is running it. It should be able to print the  
file containing the level 3 password. However, when you run ltrace on the executable, the script  
calls access. Access prevents me from opening the level 3 password file because it knows that I am  
running the script as a level 2 user. So what now?  

I have 2 solutions. The first solution is to make 3 files. You can name the first two anything.  
One should be a symbolic link (use ln -sf) to the level 3 password file. The third file should be  
named like so: if the first file is named a and the second is named b, name the third file "a b."  
Note the space and ignore the period. Now, when we run the executable on "a b," access detects  
that we own file "a b." If we do not have "a b," and we try to printfile the symbolic link, access  
knows that we do not have permissions. Later in the executable, it calls  
system("/bin/cat {filename}"). Since there is no input validation, /bin/cat will interpret "a b"  
as print files a and b. We only care about the content of the symbolic link, and since our user  
uid was set to level 3, we can access the symbolic link. We have the password!

Here is an even cooler solution that uses race conditions. Credits to this page:  
https://sumit-ghosh.com/articles/notes-overthewire-leviathan/. I attached the bash file below.  

A race condition occurs in situations where a desired behavior requires multiple events to happen  
in a specified order. In our problem, we need the access call to give permission first, and then  
our system call can run. If we create a situation where access permits us to access a file and  
then we change the file before calling system, we have bypassed our check. I made a script where  
I run printfile on a file I own and concurrently create a symbolic link from that file to the  
level 3 file. Eventually, the computer messes up, and it creates the symbolic link before the  
script calls system.

## Bash Script
    echo "hello" > myfile
    for ((i=0; i<10; i++));
    do
    ln -sf myfile t &
    ~/printfile t &
    ln -sf /etc/leviathan_pass/leviathan3 t &
    sleep .5
    done