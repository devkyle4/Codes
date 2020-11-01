;declaration of constants and variables
section .data
inputMsg db 'Enter your Age: ' 
inputMsglen equ $ -inputMsg

DispMsg db 'Your age is:'
DispMsglen equ $ -DispMsg

;Reading of inputs from the keyboard
section .bss
num resw 10  

section .text

  global _start
_start:

mov edx,inputMsglen
mov ecx,inputMsg
mov eax,4
mov ebx,1
int 80h


;accepting of input from the keyboard
mov edx,10
mov ecx,num
mov eax,3
mov ebx,2
int 80h

;displaying of message

mov eax,4
mov ebx,1
mov edx,DispMsglen
mov ecx,DispMsg
int 80h

;output the input
mov eax,4
mov ebx,1
mov edx,10
mov ecx,num
int 80h


mov ebx,0
mov eax,1
int 80h

