import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
}

const reducer=(state, { type, payload })=> {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currOperand === "0") {
        return state
      }
      if (payload.digit === "." && state.currOperand.includes(".")) {
        return state
      }

      return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currOperand == null && state.previousOperand == null) {
        return state
      }

      if (state.currOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currOperand,
          currOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOperand: null,
        }
      }
      if (state.currOperand == null) return state
      if (state.currOperand.length === 1) {
        return { 
            ...state, currOperand: null
         }
      }

      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1),
      }
    case ACTIONS.EVALUATE:
      if (
        state.operation == null||state.currOperand == null||state.previousOperand == null
      ) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currOperand: evaluate(state),
      }
      default:
          break
  }
}

const  evaluate= ({ currOperand, previousOperand, operation })=> {
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currOperand)
  let value = ""
  switch (operation) {
    case "+":
        value=prev+current
      break
    case "-":
        value=prev-current
      break
    case "*":
        value=prev*current
      break
    case "/":
        value=prev/current
      break
      default:
          break
  }

  return value.toString()
}


const Lcal=() =>{
  const [{ currOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div>
      <div>
        <div>
          {(previousOperand)} {operation} {(currOperand)}
        </div>
        
      </div>
      <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>C</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}> D</button>
      <button onClick={() => dispatch({ type: ACTIONS.EVALUATE })} > = </button>
      <br/>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <br/>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <br/>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <br/>
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <br/>
      <OperationButton operation="-" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <OperationButton operation="/" dispatch={dispatch} />

    </div>
  )
}

export default Lcal;