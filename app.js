// //REACT 2 | CHECK N CHECK
const container1 = document.getElementById('react-container1');
ReactDOM.render("Hello! Welcome to React",container1);

// //REACT 3 | IS IT A FUNCTION
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
const container2 = document.getElementById('react-container2');
ReactDOM.render(React.createElement(Container),container2);
// //REACT 4 | NOW IT'S CLASS TIME
// class ReactContainer extends React.Component{
//     render(){
//         return React.createElement(`div`,null,`Hey Kalvians`,
//         React.createElement(`div`,null,`Let's rock and roll with classes`)
//         );
//     }
  
// }
// const container3 = document.getElementById('react-container3');
// ReactDOM.render(React.createElement(ReactContainer),container3);