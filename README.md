# 개인 맞춤형 아파트 실거래가 조회 서비스 (Frontend)

## 0. 목차

1. [프로젝트 소개](#1-프로젝트-소개) <br/>
   1.1. [프로젝트 설명](#11-프로젝트-설명)<br/>
   1.2. [팀원 소개](#12-팀원-소개)<br/>
   1.3. [개발 환경 및 API](#13-개발-환경-및-api)<br/>
2. [기능 소개](#2-기능-소개)<br/>
   2.1. [메인 화면](#21-메인-화면)<br/>
   2.2. [회원 가입 및 로그인 화면](#22-회원-가입-및-로그인-화면)<br/>
   2.3. [동별 아파트 검색 및 주변 상권 정보 화면](#23-동별-아파트-검색-및-주변-상권-정보-화면)<br/>
   2.4. [아파트 상세 검색 결과 화면](#24-아파트-상세-검색-결과-화면)<br/>
   2.5. [마이 페이지 화면](#25-마이-페이지-화면)<br/>
   2.6. [공지사항 화면](#26-공지사항-화면)<br/>
3. [후기](#3-후기)<br/>

## 1. 프로젝트 소개

- 프로젝트명: WHERE IS MY HOME (Frontend)
- 프로젝트 주제: 개인 맞춤형 아파트 실거래가 조회 서비스
- 개발 기간: 2022.11.16.~2022.11.25.(10일)
- 사용 기술 스택: Vue.js, Vite, JavaScript, Git

### 1.1. 프로젝트 설명

WHERE IS MY HOME은 개인 맞춤형 아파트 실거래가 조회 서비스로, 단순한 과거 아파트 실거래가 조회 기능 외에도 사용자의 관심사에 특화된 맞춤 정보 및 자세한 리뷰 시스템을 제공합니다.

최근 공급자 주도의 '대량 소비'가 저물고, 소비자 주도의 '개인 맞춤'이 트렌드로 떠오르고 있습니다 [[출처](https://blog.logi-spot.com/%EB%AC%BC%EB%A5%98-%EC%97%B0%EA%B5%AC%EC%86%8C-%E2%91%A6-mz-%EC%82%AC%EB%A1%9C%EC%9E%A1%EC%9C%BC%EB%A0%A4%EB%A9%B4-%EA%B0%9C%EC%9D%B8%EB%A7%9E%EC%B6%A4%ED%95%98%EB%9D%BC/)]. 하지만 기존의 실거래가 조회 서비스는 과거 기록 조회 기능에 충실해 소비자 맞춤 서비스가 부족합니다.

따라서 WHERE IS MY HOME은 급변하고 있는 가족 형태, 다양해진 관심사에 맞춰 개인화된 아파트 검색 서비스를 제공하며, 사전 지식 없이 누구나 한눈에 원하는 정보를 파악할 수 있도록 데이터 시각화 서비스 및 상세한 리뷰 시스템 또한 구현했습니다.

### 1.2. 팀원 소개

| 이름                                     | 역할                                 | 설명                           |
| ---------------------------------------- | ------------------------------------ | ------------------------------ |
| [teamzamong](https://github.com/teamzamong)  | 검색 결과, 메인/로그인/회원가입 화면 | UI 디자인 및 Vue 컴포넌트 구현 |
| [sujunghwang](https://github.com/sujunghwang) | 마이페이지, 공지사항 화면            | UI 디자인 및 Vue 컴포넌트 구현 |

### 1.3. 개발 환경 및 API

![node](https://img.shields.io/badge/node-14.20.0-brightgreen) ![vue](https://img.shields.io/badge/vue-3.2.36-blue) ![bootstrap](https://img.shields.io/badge/bootstrap-5.1.3-blueviolet)

- [카카오 지도 API](https://apis.map.kakao.com/web/): 지도 위에 검색 결과 및 주변 상권 표시, 사용자 맞춤 정보를 가져오기 위해 사용
- [네이버 뉴스 API](https://developers.naver.com/docs/serviceapi/search/news/news.md): 사용자 관심 지역 관련 뉴스를 가져오기 위해 사용

## 2. 기능 소개

### 2.1. 메인 화면

랜딩 페이지입니다. 다양한 가족 형태 및 관심사에 맞는 서비스라는 것을 강조했습니다.

부동산 실거래가 검색 버튼을 눌러 검색 페이지로 이동할 수 있습니다.

![landing](/resources/images/landing-page.gif)

### 2.2. 회원 가입 및 로그인 화면

회원 가입 및 로그인 페이지입니다.

회원 가입 시, 입력 정보에 대한 유효성 체크를 수행합니다.

![register](/resources/images/register.png)
![login](/resources/images/login.JPG)

### 2.3. 동별 아파트 검색 및 주변 상권 정보 화면

동별 아파트 목록 조회 페이지입니다. 원하는 동을 선택하고 검색하면 해당 동의 아파트 정보를 지도에 표시합니다.

카카오맵 API를 활용해 주변 상권 정보를 표시할 수 있도록 했습니다.

![search aparments by dong](/resources/images/search-apt-list.JPG)
![show nearby commercial info](/resources/images/search-apt-nearby.png)

### 2.4. 아파트 상세 검색 결과 화면

#### 2.4.1. 아파트 기본 정보 화면

리스트 또는 지도에서 아파트를 클릭하면 해당 아파트의 상세 정보를 사이드 바에 표시합니다.

로그인한 경우, 별 모양 버튼을 눌러 관심 아파트로 추가할 수 있습니다.

![apartment basic info](/resources/images/search-apt-detail-basic.JPG)

#### 2.4.2. 아파트 실거래가 정보 화면

아파트의 최근 실거래가 및 평형별 최근 3년간 월별 평균 실거래가(상한가, 하한가, 평균가)를 차트로 표시했습니다. 최근 매매 실거래가 또한 볼 수 있습니다.

![apartment past records](/resources/images/search-apt-detail-records.gif)

#### 2.4.3. 아파트 리뷰 화면

사용자들의 리뷰를 바탕으로 현재 보고 있는 아파트와 주변 지역의 평균을 차트로 비교했습니다. 상세한 별점 시스템과 차트를 활용해 많은 정보를 한눈에 볼 수 있도록 했습니다.
로그인 시, 리뷰 작성 및 삭제도 가능합니다.

![apartment reviews](/resources/images/search-apt-detail-reviews.gif)

#### 2.4.4. 아파트 맞춤 정보 화면

로그인하지 않고 맞춤 정보에 접근했을 때는 회원 가입을 유도합니다. 로그인한 경우, 해당 사용자가 기존에 설정한 관심사에 맞는 정보를 표시합니다.

- 로그인하지 않은 경우

  ![personalized info without login](/resources/images/search-apt-detail-interest-no-login.JPG)

- 로그인한 경우: 사용자에 따라 다른 결과 화면을 표시합니다.

  ![personalized info 1](/resources/images/search-apt-detail-interest-login.JPG)
  ![personalized info 2](/resources/images/search-apt-detail-interest-login-2.JPG)

### 2.5. 마이 페이지 화면

마이 페이지 화면입니다.

![mypage](/resources/images/mypage.JPG)

#### 2.5.1. 관심 지역 화면

사용자가 등록한 관심 지역 목록 및 해당 지역의 뉴스, 매매 가격 지수 추이를 한 곳에 모아 볼 수 있도록 했습니다.

![interest location](/resources/images/mypage-fav-loc.gif)

#### 2.5.2. 관심 아파트 화면

사용자가 등록한 관심 아파트 목록 및 위치를 지도로 볼 수 있도록 했습니다.

![interest apartment](/resources/images/mypage-fav-apt.png)

#### 2.5.2. 리뷰 관리 화면

사용자가 작성한 리뷰를 관리할 수 있는 페이지입니다.

![reviews](/resources/images/mypage-reviews.png)

#### 2.5.3. 1:1 문의 화면

사용자가 문의 사항을 남길 수 있는 페이지입니다.

![qna](/resources/images/mypage-qna.png)

#### 2.5.4. 회원 정보 관리 화면

사용자가 개인 정보를 관리할 수 있는 페이지입니다.
회원 정보를 보기 전 한 번 더 비밀번호 인증을 거칩니다.

![check pw](/resources/images/mypage-info-checkpw.png)
![info](/resources/images/mypage-info.png)

### 2.6. 공지사항 화면

공지사항 목록 조회 및 상세 게시물 조회를 할 수 있는 페이지입니다. 관리자 계정으로 로그인되어 있는 경우에만 공지사항 작성이 가능합니다.

- 일반 사용자의 경우

  ![notices](/resources/images/notice-list.JPG)
  ![notice detail](/resources/images/notice-detail.JPG)

- 관리자 계정으로 로그인되어 있는 경우: 공지사항 작성 버튼이 보입니다.

  ![notice admin](/resources/images/notice-admin.JPG)
  ![notice write](/resources/images/notice-write.JPG)

## 3. 후기
