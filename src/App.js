import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';   /*This line should be always above of the local CSS file*/
import './App.css';
import Icon from "./components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap";

const itemArray=new Array(9).fill("empty");
// console.log(itemArray);

const App= ()=> {
  const [isCross,setIsCross] = useState(false);
  const [winMessage,SetWinMessage] = useState("");

  const reloadGame = ()=>{     {/*This is reload section.Whenever you will reload a game, then this function will be called which will clear all the current progress */}
   setIsCross(false);
   SetWinMessage("");
   itemArray.fill("empty",0,9);
   
  };

  const checkIsWinner = () =>{
    var i=0,flag=true;
    for(i=0;i<9;i+=3){
      if(itemArray[i] === itemArray[i+1] && itemArray[i] === itemArray[i+2] && itemArray[i]!== "empty")
      {
        SetWinMessage(`${itemArray[i] } wins!`);
      }{/*Horizontal logic*/}
    }
    for(i=0;i<9;i+=1){
      if(itemArray[i] === itemArray[i+3] && itemArray[i] === itemArray[i+6] && itemArray[i]!== "empty")
      {
        SetWinMessage(`${itemArray[i] } wins!`);
      }{/*Vertical logic*/}
    }
     if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0]!== "empty")
      {
        SetWinMessage(`${itemArray[0] } wins!`);
      }          {/*Cross 1 logic*/}
      if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2]!== "empty")
      {
        SetWinMessage(`${itemArray[2] } wins!`);
      }                          {/*Cross 2 logic*/}
      itemArray.forEach(ele =>{
        if(ele=='empty'){
          flag=false;
        }
        
      });
      if(flag){
        //window.setTimeout(10);
        window.location.reload();
        return toast("All the places are filled.Reloading!",{type:"error"});
        
      }
    }
    
  

  const changeItem = itemNumber =>{
if(winMessage){
  
  return toast(winMessage,{type:"success"});
}
if(itemArray[itemNumber]==="empty"){
itemArray[itemNumber] = isCross ? "cross" : "circle";
setIsCross(!isCross);                                 {/*there are always  turns of two players*/}
}
else{
  return toast("Already filled",{type:"error"});          {/*If the place is already filled,then return toast */}
}
checkIsWinner();
  }
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center"/>
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-3">
              <h1 className="text-primary text-uppercase text-center">
                {winMessage} 
              </h1>
              <Button color="warning"
              block
              onClick={reloadGame} className="buttonn" >Reload Game</Button>{/*The work of this button is to reload all the stuff!*/}
              
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross\'" :  "Circle\'s"} turn
            </h1>
          )}
          <div className='grid'>
            {
            itemArray.map((item,index) =>(
              <Card id="clr" color="warning" onClick={() => {
                
                changeItem(index);
              } }>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
