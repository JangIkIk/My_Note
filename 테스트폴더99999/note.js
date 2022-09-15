// Git Reposutory => 저장소, 말그대로 파일이나 폴더를 저장해두는 곳

// Remote Repository
// 원격 온라인 서버 상의 저장소 여러 사람이 함께공유 가능

// Local Repository
// 내 컴퓨터의 저장소
// 내 개인 전용 저장소

// 코드를 저장할 디렉토리를 만들고 해당 디렉토리에 로컬 Git repository를 생성합니다. (git init)
// 코드를 작성하고 저장하는 공간, 작업 공간(work space)의 파일 및 디렉토리를 git의 관리 하에 있는 상태로 올려줄 수 있습니다. (git add) 이 영역이 staging area입니다.
// staging area의 파일은 commit이 가능합니다.
// commit으로 local Git repository에 내 코드를 기록할 수 있습니다. (git commit)


// git init => Git repository  추가하기

// # 디렉토리 생성
// mkdir ~/Desktop/codestates
// cd ~/Desktop/codestates
// # 디렉토리 생성
// mkdir my-app
// # 디렉토리 이동 (change directory)
// cd my-app
// # 파일 생성
// touch index.html style.css
// git init : 여기서 git init 을 입력하면 Git 리포지토리가 my-app 디렉토리에 생성됩니다. {작업 공간 디렉토리}/.git 폴더에 Git 활용을 위한 디렉토리가 생성된 것도 확인하실 수 있습니다.

//git add  : 여러분의 로컬 환경에 있는 디럭토리에 Git 리포지토리가 생성되었기 때문에, 이제 index.html, style.css의 변경사항을 Git으로 관리할 수 있습니다. 각각의 파일에 코드를 작성한 후, 이 코드를 하나로 모아두는 과정을 거치게 되는데 이 공간을 staging area라고 합니다.
//staging area에 코드를 옮기는 명령어는 git add <경로명>입니다. 여러분의 터미널의 현재 위치가 Git 리포지토리를 생성한 my-app 디렉토리라면, git add index.html , git add style.css 명령어를 사용하면 됩니다. 만약 현재 경로에서 변경이 감지된 모든 파일을 한 번에 추가하려면 git add . 을 입력합니다. (.은 현재 경로를 의미합니다.)

//git status :staging area로 잘 옮겨졌는지 확인하기 위해서는 git status 명령어를 입력합니다. 현재 디렉토리에 Git 리포지토리가 잘 설치되어 있다면, 아래와 같이 Git 리포지토리의 상태를 확인할 수 있습니다. 변경이 되었으나 staging area로 옮겨지지 않은 파일은 빨간색 글씨로 표시됩니다.

// git commit -m
// git commit : 
// git add <경로명> : 경로에 있는 파일을 staging area로 넣는 명령어
// staging area: 온전히 저장하고 싶은 코드를 모아놓은 묶음
// commit
// staging area의 코드 묶음을 저장하기로 결심하고 (git commit)
// staging area 코드의 용도를 적어두는 행위 (커밋 메시지 -m "commit message")
//추가로 사진 파일(code.svg, eat.svg, repeat.svg, sleep.svg)과 소개글(README.md)을 작성하고, commit합니다. 소개글 작성과 사진 파일 제작은 다른 작업으로 보는게 적절하기 때문에, 나눠서 commit합니다.

//staging area 란 ? commit하기전에 내용을 기록하는 장소.


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// repository 가져오기 // git clone 깃허브폴더링크

// 해당 디렉토리에서 추가된파일,변경된 파일들이 어떤것이 있는지 확인할때 // git status

// 로컬의 파일을 staging area로 옴길때는 // git add . (파일명.확장자)로도 가능

// 깃헙 리파지토리에 커밋기록을 남기려할때 // gid commit -m '내용'

// 바로이전에 commit한 기록으로 되돌리기 // git reset --hard HEAD^

// 내깃험 리파지토리에 푸쉬하기 // git push

// 내 커밋 로그를 확인하기 // git log

// 새로운저장소를만들거나 git관리하에 들어가게 해주기?(리모트 관련?) // git init

// 리모트에 연결하기 // gir remote add [단축이름] [리파지토리 링크]

// 내가 작업한 리파지토리를 리모트 리파지토리에 공유하기 // git push [리모트이름] [브랜치이름]

// 내local에 리파지토리 이름 등록하기 // git remote add [이름] url
