const student = { name: '최초보', major: '물리학과', lesson: '양자역학', grade: 'B+' }

function getSummary({ name, lesson, grade }) {
  return `${name}님은 ${grade}의 성적으로 ${lesson}을 수강했습니다`
}


console.log(getSummary(student));