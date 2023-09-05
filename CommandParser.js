class commandParser {
    constructor(drone){
        this.parseCommand = function parseCommand(line){
            if(line == 'takeoff'){
                drone.onTakeoff()
                return tru
            }
            if(line == 'land'){
                drone.onLand()
                return true
            }
            if (line.startsWith('forward')){
                const [, dist] = line.split(" ")
                drone.onForward(dist)
                return True

            }
            if (line.startsWith('back')){
                const [, dist] = line.split(" ")
                drone.onBack(dist)
                return True

            }
            if (line.startsWith('right')){
                const [, dist] = line.split(" ")
                drone.onRight(dist)
                return True

            }
            if (line.startsWith('left')){
                const [, dist] = line.split(" ")
                drone.onLeft(dist)
                return True

            }
            if (line.startsWith('Cw')){
                const [, dist] = line.split(" ")
                drone.onCw(dist)
                return True

            }
            if (line.startsWith('Ccw')){
                const [, dist] = line.split(" ")
                drone.onCcw(dist)
                return True

            }
            if (line == 'baterry'){
                drone.onBattery(line)
                return True
            
            }
            if (line == 'flip'){
                drone.onFlip(line)
                return True
        }
        return false
    
    }
  }
}

module.exports = CommandParser