// 스토리지 업로드할파일을 불러온다
import {Test} from './Test'


// storybook에 올리기전 기본셋팅
// title : 카테고리/디렉토리이름
// component : 업로드할 컴포넌트 명칭
// argTypes : 자식에게 전달할 css 를 정의하며 사용자가 조작가능
export default{
    title: 'other/Test',
    component: Test,
    argTypes: {
        backgroundColor: {control : "color"},
        color: {control : "color"},
    },
};


// props: 부모가 자식에게 전달하여 자식이 반영하는기본 개념
// 정의해놓을 것을 변수에 담아 쓰는 것이 일반적!
const Template = (args)=> <Test {...args}/>;


// Template를 만들어놨기떄문에 export를 하여 여러개 사용가능하다
// .bind는 자바스크립트 메서드이다.
export const Test1 = Template.bind({});

// boolean값이나 라벨등 css가 아닌부분을 정의한다 ?
Test1.args={
    primary: true,
    lable:"Test"
}