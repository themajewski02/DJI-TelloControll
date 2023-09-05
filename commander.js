class Commander {
    contructor(socket, host, port){
        this.socket = socket,
        this.host = host,
        this.port = port

    }

// CODIGO PARA ACIONAR/ LIGAR O DRONE.   
    sendInitCommand(){
        return new Promise((res, rej)=>{
            this.socket.send('command', 0, 'command'.length, this.port, this.host, (err)=>{
                if(err){
                    return rej(err)
                } else {
                    return res()
                }
            })

        })
    }

// CODIGO DE COMANDO PARA DECOLAR.
    sendTakeOff(){
    return new Promise((res, rej)=>{
        this.socket.send('takeoff', 0, 'takeoff'.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

// CODIGO DE COMANDO PARA POUSO.
    sendLand(){
    return new Promise((res, rej)=>{
        this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE DESLOCAMENTO PARA FRENTE EM CENTIMETROS. 
    sendForward(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE DESLOCAMENTO PARA TRAS EM CENTIMETROS. 
    sendBack(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE DESLOCAMENTO PARA DIREITA EM CENTIMETROS. 
    sendRight(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`right ${distance}`, 0, `right ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE DESLOCAMENTO PARA ESQUERDA EM CENTIMETROS. 
    sendLeft(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}
//CODIGO DE ROTAÇÃO DIREITA. 
    sendCw(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`cw ${distance}`, 0, `cw ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}
//CODIGO DE ROTAÇÃO ESQUERDA. 
    onCcw(distance=20){
    return new Promise((res, rej)=>{
        this.socket.send(`ccw ${distance}`, 0, `ccw ${distance}`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE COMANDO PARA "FLIP".
    sendFlip(){
    return new Promise((res, rej)=>{
        this.socket.send('flip b', 0, 'flip b'.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

//CODIGO DE COMANDO PARA PERCENTUAL DE BATERIA.
    getBaterry(){
    return new Promise((res, rej)=>{
        this.socket.send(`battery?`, 0, `battery?`.length, this.port, this.host, (err)=>{
            if(err){
                return rej(err)
            }   else{
                return res()
            }
        })
    })
}

} 

module.exports = Commander
    

