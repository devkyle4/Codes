section .data
s2 times 4 db 'How are you doing',0xa

section .text
  global _start
  _start:

    mov edx,90
    mov ecx,s2
    mov eax,4
    mov ebx,1
   int 80h

  mov eax,1
 int 80h  

