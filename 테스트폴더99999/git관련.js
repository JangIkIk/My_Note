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

//특정 commit 시점으로부터 각기 다른 commit을 만들면, 기본적으로 다음과 같이 자동으로 merge가 됩니다. 이제 내 Remote Repository에도 Local의 내용을 반영합시다. // git push origin main 

//  초기브랜치명 // git config --global init.defaultBranch main 초기화 ???
// 래퍼진토리를 만들때 readme.md를 같이만들면 로컬에서 파일생성후 푸쉬했을때 오류가 난다. 그때 +로강제 push하면되긴하는데 좋지않은방법!
// 그때는 해당 래파진토리를 clone을 한후 사용하면된다. 이것도 아니면 readme.md파일을 래퍼진토리를 만들때 체크를 푼후에 만들면됨!!
// 브랜치는 그냥 다른책이라 생각하자 하나의책에서 글을쓰다가 다른 책에서 글을쓰는느낌



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const git = {
    "1": [
        {
            "chapter": "1. 혼자 작업",
            "title": "repository 가져오기",
            "number": 1,
            "description": "# 김코딩이는 fork한 codestates 깃헙 리파지토리를 본인의 local에서 작업하려고 합니다. 복사한 깃헙 리파지토리 주소는 https://github.com/kimcoding/test.git 입니다.",
            "terminal_guide": "Cloning into 'test'... \n remote: Enumerating objects: 3, done. \n remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3 Unpacking objects: 100% (3/3), done.",
            "hint": "clone 명령어를 사용할 수 있어요",
            "answer": [
                "git clone https://github.com/kimcoding/test.git",
                "git clone https://github.com/kimcoding/test"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "상태 확인",
            "number": 2,
            "description": "# local working directory에서 index.js 파일을 추가했습니다. 기존과 변경된 파일들이 어떤 것이 있는지 확인해 보려고 합니다.",
            "terminal_guide": "On branch main. \n Untracked files: \n (use 'git add <file>...' to include in what will be committed) \n index.js \n nothing added to commit but untracked files present (use 'git add' to track)",
            "hint": "status 명령어를 사용할 수 있어요",
            "answer": [
                "git status"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "Staging area: 버전 관리하에 둠 1",
            "number": 3,
            "description": "# local 의 index.js 파일을 staging area로 옮기려고 합니다.",
            "terminal_guide": "",
            "hint": "파일을 staging area로 더한다는 의미의 명령어를 입력해 보세요",
            "answer": [
                "git add index.js",
                "git add ./index.js",
                "git add .",
                "git add *"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "commit 1",
            "number": 4,
            "description": "# 내 깃헙 리파지토리에 'index.js 수정' 이라고 커밋 기록을 남기려고 합니다.",
            "terminal_guide": "[main 2a4535f] completed 1 files changed, \n 123 insertions(+) create mode 100644 index.js",
            "hint": "commit을 할 때, -m 옵션을 통해 코멘트를 남길 수 있어요",
            "answer": [
                "git commit -m 'index.js 수정'",
                "git commit -m \"index.js 수정\""
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "commit 취소",
            "number": 5,
            "description": "# 앗.. index.js 파일에서 오타를 발견했어요. 수정을 해야하는데 불필요한 커밋을 또 하고 싶지는 않습니다. 커밋한 기록을 되돌려서 이전으로 돌아가는 방법은 없을까요?",
            "terminal_guide": "Unstaged changes after reset: \n M   index.js",
            "hint": "reset 명령어를 활용해 최근 1개의 커밋만 삭제하세요\n여기서 soft/hard 는 사용하지 않습니다",
            "answer": [
                "git reset HEAD~1",
                "git reset HEAD^1",
                "git reset HEAD^"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "Staging area: 버전 관리하에 둠 2",
            "number": 6,
            "description": "# 수정을 완료했어요! 다시 index.js 파일을 staging area로 옮겨볼까요?",
            "terminal_guide": "",
            "hint": "파일을 staging area로 더한다는 의미의 명령어를 입력해 보세요",
            "answer": [
                "git add index.js",
                "git add ./index.js",
                "git add .",
                "git add *"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "commit 2",
            "number": 7,
            "description": "# 아까와 같이 'index.js 수정' 이라는 메시지로 커밋 기록을 남겨봅시다.",
            "terminal_guide": "[main 6b4395c] completed 1 files changed, \n 123 insertions(+) create mode 100644 index.js",
            "hint": "commit을 할 때, -m 옵션을 통해 코멘트를 남길 수 있어요",
            "answer": [
                "git commit -m 'index.js 수정'",
                "git commit -m \"index.js 수정\""
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "push",
            "number": 8,
            "description": "# 내 깃헙 origin 리파지토리의 main으로 푸쉬합니다.",
            "terminal_guide": "Enumerating objects: 1, done. \n Counting objects: 100% (1/1), done. \n Delta compression using up to 1 threads. \n Compressing objects: 100% (1/1), done. \n Writing objects: 100% (1/1), 212.65 KiB | 10.63 MiB/s, done. \n Total 1 (delta 0), reused 0 (delta 0). To https://github.com/codestates/test 9ec18c7..6b4395c  main -> main",
            "hint": "remote origin의 해당 branch에 push하세요",
            "answer": [
                "git push origin main",
                "git push"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "로그 보기",
            "number": 9,
            "description": "# 내 커밋 로그를 확인하는 명령어를 입력해보세요.",
            "terminal_guide": "commit 6b4395cec5934268a2bb5e41cd81a488891f02fb (HEAD -> main, origin/main, origin/HEAD) \n Author: kimcoding <kimcoding@gmail.com> \n Date:   Tue Feb 16 13:13:56 2021 +0900 \n\n index.js 수정",
            "hint": "log 명령어를 통해 터미널 창에서 커밋 로그를 확인할 수 있어요",
            "answer": [
                "git log"
            ]
        },
        {
            "chapter": "1. 혼자 작업",
            "title": "완료",
            "number": 10,
            "description": "# enter 버튼을 통해 'Chapter1. 혼자 작업' 퀴즈를 완료합니다.",
            "terminal_guide": "",
            "hint": "nice :)",
            "answer": [
                ""
            ]
        }
    ],
    "2": [
        {
            "chapter": "2. 함께 작업",
            "title": "Git 연결",
            "number": 1,
            "description": "# 김코딩은 local working directory를 Git의 관리 하에 들어가게 해 주려고 합니다.",
            "terminal_guide": "Initialized empty Git repository in /Users/kimcoding/Desktop/test/.git/",
            "hint": "초기 세팅을 뜻하는 명령어 입니다",
            "answer": [
                "git init"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "리모트 연결 (origin)",
            "number": 2,
            "description": "# 혼자 작업을 조금 진행하고 commit 기록을 남겼습니다. 내 Remote Repository와 연결해서 Remote 상에도 이 코드를 적용해야겠어요. origin이라는 이름으로 내 Remote Repository를 등록하세요. 내 Repository 링크는 https://github.com/kimcoding/test 입니다.",
            "terminal_guide": "",
            "hint": "git remote에 관련 명령어가 있습니다.",
            "answer": [
                "git remote add origin https://github.com/kimcoding/test",
                "git remote add origin https://github.com/kimcoding/test.git"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Push 1",
            "number": 3,
            "description": "# 페어와 함께 작업을 진행하려고 합니다. 지금까지 main 브랜치에 커밋한 기록을 방금 등록한 origin remote repository에 올려서, 페어에게 코드를 공유해야겠어요.",
            "terminal_guide": "Enumerating objects: 1, done. \n Counting objects: 100% (1/1), done. \n Delta compression using up to 1 threads. \n Compressing objects: 100% (1/1), done. \n Writing objects: 100% (1/1), 212.65 KiB | 10.63 MiB/s, done. \n Total 1 (delta 0), reused 0 (delta 0). To https://github.com/kimcoding/test 9ec18c7..6b4395c  main -> main",
            "hint": "내 Remote Repository에 Push 하세요",
            "answer": [
                "git push origin main"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "리모트 연결 (pair)",
            "number": 4,
            "description": "# 페어가 내 Remote Repository를 Fork 했다고 합니다. 페어의 Remote Repository를 내 Local에 pair라는 이름으로 등록해야겠어요. 페어의 리파지토리 링크는 https://github.com/pair/test 입니다.",
            "terminal_guide": "",
            "hint": "pair의 Remote Repository 주소를 pair라는 이름으로 등록하세요",
            "answer": [
                "git remote add pair https://github.com/pair/test",
                "git remote add pair https://github.com/pair/test.git"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "리모트 확인",
            "number": 5,
            "description": "# 리모트 리파지토리가 잘 연결된 것이 맞는지 모르겠어요. 연결된 리모트 리파지토리의 목록과 주소들을 확인해 볼까요?",
            "terminal_guide": "origin https://github.com/kimcoding/test (fetch) \n origin https://github.com/kimcoding/test (push) \n pair https://github.com/pair/test (fetch) \n pair https://github.com/pair/test (push)",
            "hint": "verbose 옵션으로 확인할 수 있어요",
            "answer": [
                "git remote -v",
                "git remote --verbose"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Pull 1",
            "number": 6,
            "description": "# 리모트 연결이 완료되었으니 페어와 나누어서 작업을 진행했습니다. 내 commit을 Push하기 전에 페어가 작업해서 본인의 Remote Repository에 올려 놓은 내용을 합치려고 합니다. 페어의 코드를 내 Local로 받아올 수 있을까요?",
            "terminal_guide": "remote: Enumerating objects: 5, done. \n remote: Counting objects: 100% (5/5), done. \n remote: Compressing objects: 100% (1/1), done. \n remote: Total 3 (delta 1), reused 3 (delta 1), pack-reused 0 \n Unpacking objects: 100% (3/3), 277 bytes | 277.00 KiB/s, done. \n From https://github.com/pair/test \n * branch            main     -> FETCH_HEAD \n    1de872b..1de872b  main     -> origin/master \n Auto-merging login.js \n Merge made by the 'recursive' strategy. \n login.js | 2 +- \n 1 file changed, 1 insertion(+), 1 deletion(-)",
            "hint": "pair의 Remote Repository를 내 Local Repository로 받아옵니다.",
            "answer": [
                "git pull pair main"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Push 2",
            "number": 7,
            "description": "# 특정 commit 시점으로부터 각기 다른 commit을 만들면, 기본적으로 다음과 같이 자동으로 merge가 됩니다. 이제 내 Remote Repository에도 Local의 내용을 반영합시다.",
            "terminal_guide": "Enumerating objects: 10, done. \n Counting objects: 100% (10/10), done. \n Compressing objects: 100% (4/4), done. \n Writing objects: 100% (6/6), 582 bytes | 582.00 KiB/s, done. \n Total 6 (delta 2), reused 0 (delta 0) \n remote: Resolving deltas: 100% (2/2), completed with 2 local objects. \n To https://github.com/kimcoding/test \n 5ec312f..5ec312f  main -> main",
            "hint": "내 Remote Repository에 Push 하세요",
            "answer": [
                "git push origin main"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Staging area: 버전 관리하에 둠 1",
            "number": 8,
            "description": "# 내가 footer.html 파일을 수정했습니다. 작업한 사항을 commit 하기 위해 먼저 staging area에 작업한 파일을 추가해주세요.",
            "terminal_guide": "",
            "hint": "파일을 staging area로 더한다는 의미의 명령어를 입력해 보세요",
            "answer": [
                "git add footer.html",
                "git add ./footer.html",
                "git add .",
                "git add *"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Commit 1",
            "number": 9,
            "description": "# staging area에 파일이 추가되었습니다. 'footer 수정' 이라는 메시지로 commit 을 진행해주세요.",
            "terminal_guide": "[main 6b4395c] completed 1 files changed, \n 123 insertions(+) create mode 100644 login.js",
            "hint": "commit을 할 때, -m 옵션을 통해 코멘트를 남길 수 있어요",
            "answer": [
                "git commit -m 'footer 수정'",
                "git commit -m \"footer 수정\""
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Pull 2",
            "number": 10,
            "description": "# 페어도 footer.html에 변경한 사항이 있다고 합니다. 내 커밋을 Remote에 푸시하기 전에 페어의 코드를 내 컴퓨터로 받아올 수 있을까요?",
            "terminal_guide": "remote: Enumerating objects: 5, done. \n remote: Counting objects: 100% (5/5) , done. \n remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0 \n Unpacking objects: 100% (3/3), done. \n From https://github.com/pair/test \n * branch        main     ->   FETCH_HEAD \n *[new branch]   master   ->   pair/main \n Auto-merging login.js \n Merge made by the 'recursive' strategy. \n login.js | 1 + \n 1 file changed, 1 insertion(+)",
            "hint": "pair의 Remote Repository를 내 Local Repository로 받아옵니다.",
            "answer": [
                "git pull pair main"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "충돌 해결하기",
            "number": 11,
            "description": "# 앗.. 하필 페어도 footer.html 파일의 동일한 라인을 수정했군요. 페어가 작성한 파일과의 충돌이 발생했습니다. 더 진행하기 전에 이 충돌을 해결해야만 합니다. 파일 내 충돌하는 부분은 다음과 같은 모양을 띄고 있습니다. \n(enter를 눌러 터미널 창에서 확인하세요. 터미널에 나오는 내용은 실제 터미널에는 나오지 않습니다. 여러분이 파일을 어떻게 수정할 지를 보여주는 예시입니다.)",
            "terminal_guide": "<<<< \n console.log('내 변경사항') \n ======= \n console.log('페어의 변경사항') \n >>>> \n 적용할 코드를 취사선택해야 합니다. 페어가 작성한 코드를 적용하려면 충돌 부분을 아래와 같이 만들어주시고, 저장하시면 됩니다. \n console.log('페어의 변경사항')",
            "hint": "enter를 눌러서 확인하세요",
            "answer": [
                ""
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Staging area: 버전 관리하에 둠 2",
            "number": 12,
            "description": "# 충돌이 생긴 부분의 수정을 완료했어요! 다시 Remote Repository에 Push 하기 위해서 수정한 파일을 staging area에 추가해주세요.",
            "terminal_guide": "",
            "hint": "파일을 staging area로 더한다는 의미의 명령어를 입력해 보세요",
            "answer": [
                "git add footer.html",
                "git add ./footer.html",
                "git add .",
                "git add *"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Commit 2",
            "number": 13,
            "description": "# 충돌이 해결된 후 staging area에 올라간 파일은 자동으로 commit 메시지가 생성됩니다. 자동 생성된 commit 메시지를 적용하는 명령어를 입력하세요.",
            "terminal_guide": "[main 2e6485b] Merge branch 'main' of https://github.com/kimcoding/test ",
            "hint": "자동으로 생성되는 commit 메시지를 사용하려면 따로 옵션 커맨드를 사용하지 않습니다",
            "answer": [
                "git commit"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "Push 3",
            "number": 14,
            "description": "# 다음과 같이 merge commit 메시지가 자동으로 생성됩니다. 이제 내 Remote Repository에도 Local Repository의 내용을 반영합시다.",
            "terminal_guide": "Enumerating objects: 1, done. \n Counting objects: 100% (1/1), done. \n Delta compression using up to 1 threads. \n Compressing objects: 100% (1/1), done. \n Writing objects: 100% (1/1), 212.65 KiB | 10.63 MiB/s, done. \n Total 1 (delta 0), reused 0 (delta 0). To https://github.com/kimcoding/test 9ec18c7..2e6485b  main -> main",
            "hint": "내 Remote Repository에 Push 하세요",
            "answer": [
                "git push origin main"
            ]
        },
        {
            "chapter": "2. 함께 작업",
            "title": "완료",
            "number": 15,
            "description": "# enter 버튼을 통해 퀴즈를 완료합니다.",
            "terminal_guide": "",
            "hint": "good job :)",
            "answer": [
                ""
            ]
        }
    ],
    "3": [
        {
            "chapter": "3. 브랜치",
            "title": "브랜치 생성 1",
            "number": 1,
            "description": "# Github 에서 공동 프로젝트 Repository를 생성했어요. 각자의 Repository로 Fork 하고 clone 을 받았습니다. 내가 맡은 회원가입 기능을 구현하기 위해서 feat/signup 이라는 브랜치를 생성하고 해당 브랜치로 이동해 볼까요?",
            "terminal_guide": "Switched to a new branch 'feat/signup'",
            "hint": "switch 혹은 checkout 커맨드와 함께 옵션을 입력해야 합니다",
            "answer": [
                "git switch -c feat/signup",
                "git checkout -b feat/signup"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "브랜치 목록",
            "number": 2,
            "description": "# feat/signup 브랜치를 만들었습니다. 생성한 브랜치 목록과 내가 현재 어떤 브랜치에 있는지 확인해 봅시다.",
            "terminal_guide": "  master\n* feat/signup\n (END)",
            "hint": "브랜치 기본 명령어를 입력하면 목록들을 확인할 수 있습니다",
            "answer": [
                "git branch"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "브랜치 생성 2",
            "number": 3,
            "description": "# 기본 회원가입 기능 구현을 완료했습니다! 여기에 추가로 페이스북으로 가입하기 기능을 만들고 싶어요. 구현해놓은 기본 회원가입 기능이 망가질 수도 있으니 feat/signup-oauth 브랜치를 하나 더 만들어서 작업해 볼까요?",
            "terminal_guide": "Switched to a new branch 'feat/signup-oauth'",
            "hint": "switch 혹은 checkout 커맨드와 함께 옵션을 입력해야 합니다",
            "answer": [
                "git switch -c feat/signup-oauth",
                "git checkout -b feat/signup-oauth"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "브랜치 이동",
            "number": 4,
            "description": "# 소셜 회원가입 기능까지 구현을 완료했습니다! 구현한 기능을 feat/signup 브랜치에 병합하려고 합니다. 먼저 feat/signup 브랜치로 이동하세요.",
            "terminal_guide": "Switched to branch 'feat/signup'",
            "hint": "switch 혹은 checkout 커맨드를 옵션 없이 입력해야 합니다",
            "answer": [
                "git switch feat/signup",
                "git checkout feat/signup"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "브랜치 병합",
            "number": 5,
            "description": "# feat/signup-oauth 브랜치의 내용을 feat/signup 브랜치로 병합하는 명령어를 입력하세요.",
            "terminal_guide": "Updating 3ce394d..2ca264i \n Fast-forward \n signup.js | 123 +++ \n 1 file changed, 123 insertions(+)\n create mode 100644 signup.js",
            "hint": "병합하다는 뜻을 가진 명령어입니다",
            "answer": [
                "git merge feat/signup-oauth"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "Push",
            "number": 6,
            "description": "# 회원가입 기능 구현이 완료된 feat/signup 브랜치를 Remote Repository로 업로드하세요.",
            "terminal_guide": "Enumerating objects: 5, done. \n Counting objects: 100% (5/5), done. \n Delta compression using up to 8 threads \n Compressing objects: 100% (2/2), done. \n Writing objects: 100% (3/3), 275 bytes | 275.00 KiB/s, done. \n Total 3 (delta 1), reused 0 (delta 0) \n remote: Resolving deltas: 100% (1/1), completed with 1 local object. \n To https://github.com/codestates/project.git \n 3ce394d..2ca264i  feat/signup -> feat/signup",
            "hint": "내 Remote Repository의 원하는 브랜치에 Push 하세요",
            "answer": [
                "git push origin feat/signup"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "작업 임시 저장",
            "number": 7,
            "description": "# 구글 로그인 기능도 추가를 해 보려고 시도하다가 어려워서 그만두었습니다. 작업하던 코드를 잠시 다른 공간에 저장해 둘 방법이 있을까요?",
            "terminal_guide": "Saved working directory and index state WIP on feat/signup: 2fd97a2 initial commit",
            "hint": "숨긴다는 뜻을 가진 명령어입니다",
            "answer": [
                "git stash"
            ]
        },
        {
            "chapter": "3. 브랜치",
            "title": "완료",
            "number": 8,
            "description": "# enter 버튼을 통해 퀴즈를 완료합니다.",
            "terminal_guide": "",
            "hint": "good job :)",
            "answer": [
                ""
            ]
        }
    ]
};








