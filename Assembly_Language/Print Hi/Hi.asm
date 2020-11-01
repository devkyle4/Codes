section .data
msg db 'Say Hi 5 times',0xa
len equ $ - msg
s2 times 5 db 'Hi ',0xa

section .text 
global _start
_start:

mov edx,len
mov ecx,msg 
mov eax,4
mov ebx,1
int 0x80

mov edx,20
mov ecx,s2
mov eax,4
mov ebx,1 
int 0x80

mov eax,1
int 0x80
