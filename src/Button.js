import PropTypes from "prop-types";

function Button({text}){
    return (
        <button
            styles={{
                backgroundColor: "palevioletred",
                color: "white",
            }}
        >
            {text}
        </button>
    );
}

Button.PropTypes = {
    text: PropTypes.string.isRequired,
}

// export : 다른 파일에서 사용할 수 있도록 내보내는 키워드
// default : 이 모듈에서 기본적으로 내보내는 값을 지정 (하나의 값만 내보낼 수 있음)
// Button : 내보내는 값
export default Button;