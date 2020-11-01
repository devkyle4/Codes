section .data

name db 'What is your name: '
namelen equ $ -name

age db 'How old are You: '
agelen equ $ -age

section .bss
nameVar resw 15
ageVar resb 5

section .text
global _start
_start:

;displaying first message
mov edx,namelen
mov ecx,name
mov eax,4
mov ebx,1
int 80h


;reading input into name

mov edx,15
mov ecx,nameVar
mov eax,3
mov ebx,2
int 80h


;displaying second message
mov edx,agelen
mov ecx,age
mov eax,4
mov ebx,1
int 80h

;reading into age

mov edx,5
mov ecx,ageVar
mov eax,3
mov ebx,2
int 80h

;exit code
mov eax,1
mov ebx,0
int 80h
