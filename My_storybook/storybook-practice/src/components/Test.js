import React from "react";

// 부모의가 전달한 props와 자식의 데이터의 종류가 같은지 확인하는것!
// 만약 종류가 틀리다면 콘솔창에 에러가 뜬다!.
import PropTypes from 'prop-types';



// 부모에게 전달받값을 사용하려면 매개변수는 필수!
export const Test = (props)=>{
    return (<h1
    style={{
        backgroundColor: props.backgroundColor,
        color:props.color
    }}
    >Test</h1>)
}


// @@ 수정이 필요한부분
// import한 PropTypes는 이런식으로사용한다 재정의 필요!
// Button.propTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     backgroundColor: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     /**
//      * Button contents
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
  
//   };
  
//   Button.defaultProps = {
//     backgroundColor: null,
//     primary: false,
//     size: 'medium',
//     onClick: undefined,
//   };
  