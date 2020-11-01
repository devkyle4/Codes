section .data

;displaying name
 Name db 'What is your name: ' 
 Namelen equ $ -Name
 
;displaying age
Age db 'How old are you? '
Agelen equ $ -Age

;displaying gender
Sex db 'Gender: '
Sexlen equ $ -Sex

;displaying program
Program db 'What is your Major: '
Programlen equ $ -Program

;displaying university
University db 'Name of University: '
Unilen equ $- University


section .bss

Myname resw 20
MyAge resw 4
MySex resw 8
MyProgram resw 20
MyUni resw 40 


section .text

 global _start

 _start:

;Displaying Name
mov edx,Namelen
mov ecx,Name
mov eax,4
mov ebx,1
int 80h

mov edx,20
mov ecx,Myname
mov eax,3
mov ebx,2
int 80h


;Displaying age 
mov edx,Agelen
mov ecx,Age
mov eax,4
mov ebx,1
int 80h

mov edx,4
mov ecx,MyAge
mov eax,3
mov ebx,2
int 80h

mov edx,Sexlen
mov ecx,Sex
mov eax,4
mov ebx,1
int 80h

mov edx,8
mov ecx,MySex
mov eax,3
mov ebx,2
int 80h

mov edx,Programlen
mov ecx,Program
mov eax,4
mov ebx,1
int 80h

mov edx,20
mov ecx,MyProgram
mov eax,3
mov ebx,2
int 80h


mov edx,Unilen
mov ecx,University
mov eax,4
mov ebx,1
int 80h

mov edx,40
mov ecx,MyUni
mov eax,3
mov ebx,2
int 80h


mov ebx,0
mov eax,1
int 80h
