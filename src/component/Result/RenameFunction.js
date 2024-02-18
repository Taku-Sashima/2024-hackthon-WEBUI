import React from 'react'
import '../../pages/Result/Result.css';

export default function RenameFunction(props){
  const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const modalContent = {
    background: "#faf291",
    border: "8px solid #62b6f5",
    padding: "120px",
    borderRadius: "20px",
  };

  const input={
    lineHeight: "50px",
    fontSize: "50px",
  };

  const button ={
    backgroundColor: '#62b6f5',
    width: '200px',
    height:'40px',
    textAlign: "center",
    position: "static",
    margin: "auto",
    marginTop: "20px",
    color: 'white',
    fontSize: "28px",
  };

  const closeModal = () => {
    props.setShowModal(false);
    if (props.text==""){
      ;//newNameを更新しない
    }else{
      props.setNewName(props.text);
      props.setText("");
    }
  };


  return(
    <>
      {props.showModal ? ( // showModalがtrueだったらModalを表示する
        <div className="overlay" style={overlay} >
          <div className="modalContent" style={modalContent}>
            <input style={input}
              size="20"
              value={props.text}
              onChange={(event) => props.Text(event.target.value)}
              type="text"
            />
            <div  style={button} onClick={closeModal}>
            名前を変更する
            </div>
          </div>
        </div>
      ):(
        <></>
      )}
    </>
  )
}