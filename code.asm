.MODEL small   

.STACK 4096    

.DATA

    Hellostr DB 'Hello, world!', 13, 10, '$'

.CODE

main PROC

    mov ax,@data       

    mov ds,ax      

    mov dx,offset Hellostr

    mov ah,9h

    int 21h

    mov ah, 04Ch       

    int 21h

main ENDP

END main