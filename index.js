const io = require("socket.io")(4000, {
  cors: { origin: ["http://localhost:3000"] },
});

const initialGrid = [
  {
    "id": 1,
    "clicked": false
  },
  {
    "id": 2,
    "clicked": false
  },
  {
    "id": 3,
    "clicked": false
  },
  {
    "id": 4,
    "clicked": false
  },
  {
    "id": 5,
    "clicked": false
  },
  {
    "id": 6,
    "clicked": false
  },
  {
    "id": 7,
    "clicked": false
  },
  {
    "id": 8,
    "clicked": false
  },
  {
    "id": 9,
    "clicked": false
  },
  {
    "id": 10,
    "clicked": false
  },
  // {
  //   "id": 11,
  //   "clicked": false
  // },
  // {
  //   "id": 12,
  //   "clicked": false
  // },
  // {
  //   "id": 13,
  //   "clicked": false
  // },
  // {
  //   "id": 14,
  //   "clicked": false
  // },
  // {
  //   "id": 15,
  //   "clicked": false
  // },
  // {
  //   "id": 16,
  //   "clicked": false
  // },
  // {
  //   "id": 17,
  //   "clicked": false
  // },
  // {
  //   "id": 18,
  //   "clicked": false
  // },
  // {
  //   "id": 19,
  //   "clicked": false
  // },
  // {
  //   "id": 20,
  //   "clicked": false
  // },
  // {
  //   "id": 21,
  //   "clicked": false
  // },
  // {
  //   "id": 22,
  //   "clicked": false
  // },
  // {
  //   "id": 23,
  //   "clicked": false
  // },
  // {
  //   "id": 24,
  //   "clicked": false
  // },
  // {
  //   "id": 25,
  //   "clicked": false
  // },
  // {
  //   "id": 26,
  //   "clicked": false
  // },
  // {
  //   "id": 27,
  //   "clicked": false
  // },
  // {
  //   "id": 28,
  //   "clicked": false
  // },
  // {
  //   "id": 29,
  //   "clicked": false
  // },
  // {
  //   "id": 30,
  //   "clicked": false
  // },
  // {
  //   "id": 31,
  //   "clicked": false
  // },
  // {
  //   "id": 32,
  //   "clicked": false
  // },
  // {
  //   "id": 33,
  //   "clicked": false
  // },
  // {
  //   "id": 34,
  //   "clicked": false
  // },
  // {
  //   "id": 35,
  //   "clicked": false
  // },
  // {
  //   "id": 36,
  //   "clicked": false
  // },
  // {
  //   "id": 37,
  //   "clicked": false
  // },
  // {
  //   "id": 38,
  //   "clicked": false
  // },
  // {
  //   "id": 39,
  //   "clicked": false
  // },
  // {
  //   "id": 40,
  //   "clicked": false
  // },
  // {
  //   "id": 41,
  //   "clicked": false
  // },
  // {
  //   "id": 42,
  //   "clicked": false
  // },
  // {
  //   "id": 43,
  //   "clicked": false
  // },
  // {
  //   "id": 44,
  //   "clicked": false
  // },
  // {
  //   "id": 45,
  //   "clicked": false
  // },
  // {
  //   "id": 46,
  //   "clicked": false
  // },
  // {
  //   "id": 47,
  //   "clicked": false
  // },
  // {
  //   "id": 48,
  //   "clicked": false
  // },
  // {
  //   "id": 49,
  //   "clicked": false
  // },
  // {
  //   "id": 50,
  //   "clicked": false
  // },
  // {
  //   "id": 51,
  //   "clicked": false
  // },
  // {
  //   "id": 52,
  //   "clicked": false
  // },
  // {
  //   "id": 53,
  //   "clicked": false
  // },
  // {
  //   "id": 54,
  //   "clicked": false
  // },
  // {
  //   "id": 55,
  //   "clicked": false
  // },
  // {
  //   "id": 56,
  //   "clicked": false
  // },
  // {
  //   "id": 57,
  //   "clicked": false
  // },
  // {
  //   "id": 58,
  //   "clicked": false
  // },
  // {
  //   "id": 59,
  //   "clicked": false
  // },
  // {
  //   "id": 60,
  //   "clicked": false
  // },
  // {
  //   "id": 61,
  //   "clicked": false
  // },
  // {
  //   "id": 62,
  //   "clicked": false
  // },
  // {
  //   "id": 63,
  //   "clicked": false
  // },
  // {
  //   "id": 64,
  //   "clicked": false
  // },
  // {
  //   "id": 65,
  //   "clicked": false
  // },
  // {
  //   "id": 66,
  //   "clicked": false
  // },
  // {
  //   "id": 67,
  //   "clicked": false
  // },
  // {
  //   "id": 68,
  //   "clicked": false
  // },
  // {
  //   "id": 69,
  //   "clicked": false
  // },
  // {
  //   "id": 70,
  //   "clicked": false
  // },
  // {
  //   "id": 71,
  //   "clicked": false
  // },
  // {
  //   "id": 72,
  //   "clicked": false
  // },
  // {
  //   "id": 73,
  //   "clicked": false
  // },
  // {
  //   "id": 74,
  //   "clicked": false
  // },
  // {
  //   "id": 75,
  //   "clicked": false
  // },
  // {
  //   "id": 76,
  //   "clicked": false
  // },
  // {
  //   "id": 77,
  //   "clicked": false
  // },
  // {
  //   "id": 78,
  //   "clicked": false
  // },
  // {
  //   "id": 79,
  //   "clicked": false
  // },
  // {
  //   "id": 80,
  //   "clicked": false
  // },
  // {
  //   "id": 81,
  //   "clicked": false
  // },
  // {
  //   "id": 82,
  //   "clicked": false
  // },
  // {
  //   "id": 83,
  //   "clicked": false
  // },
  // {
  //   "id": 84,
  //   "clicked": false
  // },
  // {
  //   "id": 85,
  //   "clicked": false
  // },
  // {
  //   "id": 86,
  //   "clicked": false
  // },
  // {
  //   "id": 87,
  //   "clicked": false
  // },
  // {
  //   "id": 88,
  //   "clicked": false
  // },
  // {
  //   "id": 89,
  //   "clicked": false
  // },
  // {
  //   "id": 90,
  //   "clicked": false
  // },
  // {
  //   "id": 91,
  //   "clicked": false
  // },
  // {
  //   "id": 92,
  //   "clicked": false
  // },
  // {
  //   "id": 93,
  //   "clicked": false
  // },
  // {
  //   "id": 94,
  //   "clicked": false
  // },
  // {
  //   "id": 95,
  //   "clicked": false
  // },
  // {
  //   "id": 96,
  //   "clicked": false
  // },
  // {
  //   "id": 97,
  //   "clicked": false
  // },
  // {
  //   "id": 98,
  //   "clicked": false
  // },
  // {
  //   "id": 99,
  //   "clicked": false
  // },
  // {
  //   "id": 100,
  //   "clicked": false
  // }
]

// io.on("connection", (socket) => {
//   console.log(socket.id);
//   socket.emit("updatedGrid", initialGrid);

//   socket.on("gridtoUpdate", (arr) => {
//     grid = arr
//     console.log(arr, "this");
//     socket.emit("updatedGrid", grid);
//   });
// });

io.on("connection", (socket) => {
  socket.emit('grid', initialGrid)

  socket.on("GridfromClient", grid => {
    console.log(grid)
    io.emit('updatedGrid', grid)
    //
  })


})
