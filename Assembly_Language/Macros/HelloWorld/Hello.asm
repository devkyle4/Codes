%macro Hello_World 2
  mov eax,4
  mov ebx,1
  mov edx,%2
  mov ecx,%1
int 0x80

%endmacro

section .data
dispMsg db 'Hello,World',0xa
len equ $-dispMsg

section .text
  global _start
  _start:
 Hello_World dispMsg,len

mov eax,1
int 0x80
