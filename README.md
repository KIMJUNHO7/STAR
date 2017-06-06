별글, 별말
===

#0. requirements

- python
- postrgesql
-node(npm), bower, gulp

# Front-end

## 1. 설명

- [Yeoman](http://yeoman.io)의 [generator-webapp](https://github.com/yeoman/generator-webapp) 기반으로 개발하였습니다.

## 2. 디렉토리 구조 설명

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

## 3. 기본 사용법

  1. `npm install`
  2. `bower install`
  3. `gulp serve`

## 4. 빌드

  1. `gulp serve` 미리보기 (브라우저 연동, 자동 수정)
  2. `gulp serve:build` 배포용 미리보기
  3. `gulp build` dist 디렉토리에 배포용 소스 생성
  4. `bower install --save <package>` 따로 html에 입력할 필요없이 자동으로 vendor 생성

# Back-end

## 1. 환경 설정

- postgresql DB, 유저 생성 및 권한 부여
- create .env file(django secret key, virtualenv, psql url)
- pip install -r requirements.txt (개발: -r requirements/development.txt)

## 2. 서버 실행

- python byul/manage.py runserver (django 테스트서버) 차후 nginx + gunicorn
