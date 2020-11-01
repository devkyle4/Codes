SYS_EXIT equ 1
SYS_READ equ 3
SYS_WRITE equ 4
STDIN equ 0
STDOUT equ 1

segment .bss
;variables for accepting inputs

num1 resw 5
num2 resw 5
result resd 50


segment .data

msg1 db "Enter first number: " ,0xA,0xD
len1 equ $- msg1

msg2 db "Enter second number: ", 0xA,0xD
len2 equ $- msg2

msg3 db "Result: " 
len3 equ $- msg3


section .text
 global _start
  _start:

mov ecx,msg1
mov edx,len1
mov eax,SYS_WRITE
mov ebx,STDOUT
int 0x80

mov eax,SYS_READ
mov ebx,STDIN
mov ecx,num1
mov edx,5
int 0x80

mov ecx,msg2
mov edx,len2
mov eax,SYS_WRITE
mov ebx,STDOUT
int 0x80

mov eax,SYS_READ
mov ebx,STDIN
mov ecx,num2
mov edx,5
int 0x80

mov ecx,msg3
mov edx,len3
mov eax,SYS_WRITE
mov ebx,STDOUT
int 0x80


;ADDITION OF THE TWO VARIABLES

mov eax,[num1]
sub eax, '0' ;converts the number to decimal
mov ebx,[num2]
sub ebx, '0'

add eax,ebx  ;addition and subtraction cannot in memory to memory
add eax, '0'

mov [result],eax ;answer is now in the variable result


;PRINTING THE ANSWER TO THE SCREEN

mov eax,SYS_WRITE
mov ebx,STDOUT
mov ecx,result
mov edx,10
int 0x80

exit:
    mov eax,SYS_EXIT
    xor ebx,ebx
    int 0x80
