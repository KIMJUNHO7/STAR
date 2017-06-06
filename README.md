별글, 별말
===
별글, 별말_학생부종합전형 관리를 위한 학생-강사 매칭 서비스 플랫폼 개발
![image](https://cloud.githubusercontent.com/assets/29164147/26825348/a11a48b0-4aef-11e7-94a0-339189f59c4f.png)

# requirements

- python 3.6.0+
- postrgesql 9.0+
- node(npm), bower, gulp

# Front-end

### 1. 설명

- [Yeoman](http://yeoman.io)의 [generator-webapp](https://github.com/yeoman/generator-webapp) 기반으로 개발하였습니다.

### 2. 디렉토리 구조 설명

- `fonts` 빈 디렉토리
- `images` 이미지 디렉토리
- `modals` 모달창 html
  - `detail.html` 강사 상세
  - `signin.html` 로그인
  - `signup-step1.html` 사용자 타입 선택
  - `signup-step2-student.html` 학생 가입
  - `signup-step2-teacher.html` 강사 가입
  - `signup-step3.html` 가입 완료
- `scripts` 스크립트 파일.. 어차피 한개..
- `styles` css파일
  - `font.css` Noto Sans 폰트
  - `grid.css` grid 참고용 (bootstrap)
  - `styles.css` 공통적인 부분
  - `main.css` 강사진 목록 부분
  - `modal-*.css` 각 모달창 별 스타일
- `index.html` 메인 html 페이지

### 3. 기본 사용법

  1. `npm install`
  2. `bower install`
  3. `gulp serve`

### 4. 빌드

  1. `gulp serve` 미리보기 (브라우저 연동, 자동 수정)
  2. `gulp serve:build` 배포용 미리보기
  3. `gulp build` dist 디렉토리에 배포용 소스 생성
  4. `bower install --save <package>` 따로 html에 입력할 필요없이 자동으로 vendor 생성

# Back-end

### 1. 환경 설정

- postgresql DB, 유저 생성 및 권한 부여
- create .env file(django secret key, virtualenv, psql url)
- pip install -r requirements.txt (개발: -r requirements/development.txt)

### 2. 서버 실행

- python back/manage.py runserver (django 테스트서버) 차후 nginx + gunicorn


# 기타 확인 사항 

### 1. 깃 브랜치 전략
- gitflow 전략(https://datasift.github.io/gitflow/IntroducingGitFlow.html)
- master(최종 배포), develop(개발), django-feature/{feature_info}, front-feature/{feature_info}, hitfix, bugfix ... relese 사용안하고 develop에 tag

### 2. 커밋 메시지 관련
- https://chris.beams.io/posts/git-commit/
- 첫글자는 대문자로(ex : Init, Fix, Update, etc...)
- how 보단, what and why 를 기록

### lint 관련
- flake8
