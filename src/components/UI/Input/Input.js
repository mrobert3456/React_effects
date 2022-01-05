import React, {  useRef, useImperativeHandle} from "react";
import classes from "./Input.module.css";

const Input =React.forwardRef ((props,ref)=> {
  const inputRef = useRef();
  
  const activate =()=>{ // it will be called outside, its rare usecase
      inputRef.current.focus();
  };
useImperativeHandle(ref,()=>{return {
    focus: activate
}});

// with React.forwardRef and ImperativeHandle we can expose functionalities from a React 
 //component to its parent component and use it from the parent component and trigger
  //functionalities
  // But we should avoid using this pattern, but is some cases, like focusing,scrolling it is fine

 //
 // useEffect(() => {
 //   inputRef.current.focus();
 // }, []); //if the dependency is [] array, then it will only run at the first render
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.inputHtmlFor}>{props.labelText}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
