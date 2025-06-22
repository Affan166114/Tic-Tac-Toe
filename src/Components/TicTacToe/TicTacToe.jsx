import React, { useState, useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assests/circle.png';
import cross_icon from '../Assests/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];



const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1= useRef(null);
  let box2= useRef(null);
  let box3= useRef(null);
  let box4= useRef(null);
  let box5= useRef(null);
  let box6= useRef(null);
  let box7= useRef(null);
  let box8= useRef(null);
  let box9= useRef(null);

  let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

  const toggle = (e, num) => {
    if (lock) return 0; // Early exit if locked
    if (data[num] !== "") return 0; // Prevent overwriting

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt='cross' />`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' alt='circle' />`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[0] !== "") {
      won(data[0]);  // Row 1
    }
    else if (data[3] === data[4] && data[4] === data[5] && data[3] !== "") {
      won(data[3]);  // Row 2
    }
    else if (data[6] === data[7] && data[7] === data[8] && data[6] !== "") {
      won(data[6]);  // Row 3
    }
    else if (data[0] === data[3] && data[3] === data[6] && data[0] !== "") {
      won(data[0]);  // Column 1
    }
    else if (data[1] === data[4] && data[4] === data[7] && data[1] !== "") {
      won(data[1]);  // Column 2
    }
    else if (data[2] === data[5] && data[5] === data[8] && data[2] !== "") {
      won(data[2]);  // Column 3
    }
    else if (data[0] === data[4] && data[4] === data[8] && data[0] !== "") {
      won(data[0]);  // Diagonal 1
    }
    else if (data[2] === data[4] && data[4] === data[6] && data[2] !== "") {
      won(data[2]);  // Diagonal 2
    }
  }

  const won = (winner) => {
    setLock(true);
    if (winner === "x")
      titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}' /> Won`;
    else
      titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}' /> Won`;
  }
  
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game in <span>React</span>";
    box_array.forEach((e) => {
      e.current.innerHTML = "";
    });
  }
  
  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe;


/*Optimized Code*/


// import React, { useState, useRef } from 'react';
// import './TicTacToe.css';
// import circle_icon from '../Assests/circle.png';
// import cross_icon from '../Assests/cross.png';

// const TicTacToe = () => {
//   const [board, setBoard] = useState(Array(9).fill(""));
//   const [count, setCount] = useState(0);
//   const [lock, setLock] = useState(false);
//   const titleRef = useRef(null);

//   const toggle = (index) => {
//     if (lock || board[index] !== "") return;

//     const newBoard = [...board];
//     newBoard[index] = count % 2 === 0 ? "x" : "o";

//     setBoard(newBoard);
//     setCount(count + 1);
//     checkWin(newBoard);
//   };

//   const checkWin = (currentBoard) => {
//     const winPatterns = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//       [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//       [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];

//     for (let pattern of winPatterns) {
//       const [a, b, c] = pattern;
//       if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[b] === currentBoard[c]) {
//         won(currentBoard[a]);
//         return;
//       }
//     }
//   };

//   const won = (winner) => {
//     setLock(true);
//     if (winner === "x") {
//       titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}' alt='cross' /> Won`;
//     } else {
//       titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}' alt='circle' /> Won`;
//     }
//   };

//   const reset = () => {
//     setBoard(Array(9).fill(""));
//     setCount(0);
//     setLock(false);
//     titleRef.current.innerHTML = "Tic Tac Toe Game in <span>React</span>";
//   };

//   return (
//     <div className='container'>
//       <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
//       <div className="board">
//         {board.map((value, index) => (
//           <div
//             key={index}
//             className="boxes"
//             onClick={() => toggle(index)}
//           >
//             {value && <img src={value === "x" ? cross_icon : circle_icon} alt={value} />}
//           </div>
//         ))}
//       </div>
//       <button className="reset" onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default TicTacToe;
