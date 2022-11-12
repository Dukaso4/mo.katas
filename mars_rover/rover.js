class Rover {
    constructor(x, y, orientation, obstacles) {
      this.x = x
      this.y = y
      this.orientation = orientation
      this.orientations = ["N", "E", "S", "W"];
      this.obstacles = obstacles; //[xo,yo]
    
    }
    movs(movs) {
      movs.forEach(m => {
        if (m == "f" || m == "b") {
           if( !moveFB(movs)) break;
          }
          else if (m == "l" || m == "r"){
            turn(movs);
        } 
      })
    }
    moveFB(movs) {
        if (movs == "f") {
            var coordinateX = this.x;
            var coordinateY = this.y;
            if (this.orientation == "N") {
                coordinateY++;
            } else if (this.orientation == "E") {
                coordinateX++;
            } else if (this.orientation == "S") {
                coordinateY--;
            } else if (this.orientation == "W") {
                coordinateX--;
            }
        } 
        if (movs == "b") {
            var coordinateX = this.x;
            var coordinateY = this.y;
            if (this.orientation == "N") {
                coordinateY--;
            } else if (this.orientation == "E") {
                coordinateX--;
            } else if (this.orientation == "S") {
                coordinateY++;
            } else if (this.orientation == "W") {
                coordinateX++;
            }
        } 
        
        var newLocation = [this.x + coordinateX, this.y +coordinateY];

        // Si da una vuelta entera en un grid como el del ejemplo, entonces:
        if(newLocation[0]== -1) newLocation[0] = 2;
        if(newLocation[0]== 3) newLocation[0] = 0;
        if(newLocation[1]== -1) newLocation[0] = 2;
        if(newLocation[1]== 3) newLocation[0] = 0;

        if (isObstacle(newLocation)) {
            return false;
        }
        this.x = newLocation[0];
        this.y = newLocation[1];
        return true;
    }

    function isObstacle(newLocation) {
        for(var i = 0; i < this.obstacles.length; i++) {
            if (newLocation.toString() == this.obstacles[i].toString()) {
                return true;
            }
        }
        return false;
    }


    turn(movs) {
        var changedOrientation = this.orientations.indexOf(this.orientation);
        if (movs == "l") {
            changedOrientation = (changedOrientation + 4 - 1) % 4;
        } else if (movs == "r") {
            changedOrientation = (changedOrientation + 1) % 4;
        }
        this.orientation= this.orientations[changedOrientation];
        
    }
 } 
  module.exports = Rover

  