const Rover = require('../src/rover');


/*
Mars rover moves through


                       N
        --------------------------------
        |   0,2   |   1,2   |   2,2    |
        --------------------------------
    W   |   0,1   |   1,1   |   2,1    |    E
        --------------------------------
        |   0,0   |   1,0   |   2,0    |
        --------------------------------
                       S

*/

describe('Rover', () => {
  it('starts at a given position and orientation', () => {
    let rover = new Rover(0, 0, 'N')

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })

  describe('facing north', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.movs(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    it('movss backwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.movs(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(-1)
      expect(rover.orientation).toEqual('N')
    })
  });

})
describe('Implement movs that turn the rover left/right (l,r)', () => {
  it('E to N when command is to turn left', () => {
    let rover = new Rover(0, 0, 'E')

    rover.movs(['l'])

    expect(rover.orientation).toEqual('N')
  })

  it('N to W when command is to turn left', () => {
    let rover = new Rover(0, 0, 'N')

    rover.movs(['l'])

    expect(rover.orientation).toEqual('N')
  })
  it('E to S when command is to turn right', () => {
    let rover = new Rover(0, 0, 'E')

    rover.movs(['r'])

    expect(rover.orientation).toEqual('S')
  })

  

})
describe('Implement wrapping from one edge of the grid to another (planets are spheres after all)', () => {
  it('should return Y to 0 when grid is passed', () => {
    var rover = new MarsRover([2, 2], 'N', [2, 3]);
    rover.movs(['f']);
    expect(rover.orientation).toEqual([2, 0]);
  })

  it('should return Y to 2 when grid is passed', () => {
    var rover = new MarsRover([0, 0], 'S', [0, -1]);
    rover.movs(['f']);
    expect(rover.orientation).toEqual([0, 2]);
  })
  it('should return X to 0 when grid is passed', () => {
    var rover = new MarsRover([2, 2], 'E', [3, 2]);
    rover.movs(['f']);
    expect(rover.orientation).toEqual([0, 2]);
  })
  it('should return X to 2 when grid is passed', () => {
    var rover = new MarsRover([0, 0], 'W', [-1, 0]);
    rover.movs(['f']);
    expect(rover.orientation).toEqual([2, 0]);
  })


  it('should stop when obstacle is detected', function() {
    var rover = new MarsRover([0, 0], 'N');
    rover.obstacles = [[2, 0]];
    rover.movs(['f', 'f', 'f', 'l', 'f']);
    expect(rover.obstacles).toEqual([1, 0]);
});

})
describe(`Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle wrapping from one edge of the grid to another (planets are spheres after all)`, () => {
  it('should stop when obstacle is detected', function() {
    var rover = new MarsRover([0, 0], 'N');
    rover.obstacles = [[2, 0]];
    rover.movs(['f', 'f', 'f', 'l', 'f']);
    expect(rover.obstacles).toEqual([1, 0]);
});

})

;
