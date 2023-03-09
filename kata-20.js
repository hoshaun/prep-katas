const blocksAway = function(directions) {
  let heading = directions[0] === "right" ? "east" : "north";
  let pos = {
    east: 0, 
    north: 0
  }

  for (let i = 0; i < directions.length; i += 2) {
    if (i === 0) {
      pos[heading] += directions[i+1];
    } else {
      switch(heading) {
        case "north":
          switch(directions[i]) {
            case "right":
              heading = "east";
              pos.east += directions[i+1];
              break;
            case "left":
              heading = "west";
              pos.east -= directions[i+1];
              break;
            default:
              //
          }
          break;
        case "south":
          switch(directions[i]) {
            case "right":
              heading = "west";
              pos.east -= directions[i+1];
              break;
            case "left":
              heading = "east";
              pos.east += directions[i+1];
              break;
            default:
              //
          }
          break;
        case "east":
          switch(directions[i]) {
            case "right":
              heading = "south";
              pos.north -= directions[i+1];
              break;
            case "left":
              heading = "north";
              pos.north += directions[i+1];
              break;
            default:
              //
          }
          break;
        case "west":
          switch(directions[i]) {
            case "right":
              heading = "north";
              pos.north += directions[i+1];
              break;
            case "left":
              heading = "south";
              pos.north -= directions[i+1];
              break;
            default:
              //
          }
          break;
        default:
          //
      }
    }
  }

  return pos;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));