# MYCOLOR PROJECT

react로 퍼스널 컬러 쇼핑몰 만들기

## 🖥️ 프로젝트 소개

react로 퍼스널 컬러 쇼핑몰 만들기

쇼핑몰의 주요 기능들을 구현해보는 것을 목표로 한다.
<br>

## 🕰️ 개발 기간

- 23.04.01 - 23.05.18

## 🛠 기술 스택
React

SCSS

JSON

FIREBASE

REDUX

## 📌 주요 기능

#### 회원가입

- 약관 전체 동의, 선택 동의 가능
- 필수 약관을 동의하지 않을 시 다음 페이지로 이동하지 못함, 선택 약관은 가능
- firebase를 사용하여 회원가입 기능 구현
- 유효성 검사

![CleanShot 2023-05-17 at 18 10 55](https://github.com/yellowbutter0327/my-color-project/assets/103365467/cd307256-2b7d-4399-a92d-d647b031aa4c)
![CleanShot 2023-05-17 at 18 15 50](https://github.com/yellowbutter0327/my-color-project/assets/103365467/06a8ecf8-205f-439a-b3c0-58057c6d4763)
![CleanShot 2023-05-17 at 20 52 23](https://github.com/yellowbutter0327/my-color-project/assets/103365467/58c03543-8efa-4393-beb5-7e08a9abb124)


#### 로그인

- firebase를 사용하여 로그인 기능 구현
- 유효성 검사 및 그에 따라 로그인 버튼 색상 변경
- 로그인 상태를 redux를 사용해 저장

![CleanShot 2023-05-17 at 18 29 02](https://github.com/yellowbutter0327/my-color-project/assets/103365467/7aebf237-2437-4191-b431-da479c93e217)


### **메인 페이지**
- 캐러샐
- 퍼스널 컬러 페이지와 연결된 UI구현
- 랜덤으로 상품을 추천하는 기능
 
![CleanShot 2023-05-17 at 16 39 28](https://github.com/yellowbutter0327/my-color-project/assets/103365467/03f97de3-4a90-4213-952c-228bb4b2e8fd)
![CleanShot 2023-05-17 at 16 43 40](https://github.com/yellowbutter0327/my-color-project/assets/103365467/2d405416-e07b-46d3-b0cf-352e5b392ed7)



### **퍼스널 컬러 페이지**
- 퍼스널 컬러에 대한 정보를 제공
- 하단에 background를 이용해 만든 퍼스널 컬러 테스트를 해 볼 수 있음

![CleanShot 2023-05-17 at 16 48 31](https://github.com/yellowbutter0327/my-color-project/assets/103365467/f14ef25f-0b05-4340-944b-ca9d177e5f0f)
![CleanShot 2023-05-17 at 16 50 06](https://github.com/yellowbutter0327/my-color-project/assets/103365467/6889e5b1-851b-433e-a90f-b65fbba84e66)


### **상품 리스트 페이지**
- 상품 데이터를 받아와 봄, 여름, 가을, 겨울 카테고리에 따른 상품 보여주기
- 카테고리 상품을 높은 가격, 낮은 가격, 최신 등록순으로 필터링 
- 상품의 총 개수 보여주기
- 상품을 클릭하면 해당 상품의 상세페이지로 이동하기

![CleanShot 2023-05-17 at 16 54 13](https://github.com/yellowbutter0327/my-color-project/assets/103365467/0899328c-0b6c-4b1f-832c-d10d96583b80)
![CleanShot 2023-05-17 at 16 55 29](https://github.com/yellowbutter0327/my-color-project/assets/103365467/ff0a6fe9-700c-4b6a-b782-d623f5d88e38)


### **상품 상세 페이지**

- 데이터를 받아와 각 상품에 대한 정보를 보여줌
- 상품 개수 조정해서 장바구니에 담기
![CleanShot 2023-05-18 at 01 07 00](https://github.com/yellowbutter0327/my-color-project/assets/103365467/180eadb1-f775-42ef-a70f-08e3a3681d04)




### **장바구니 페이지**

- 장바구니에 담은 상품들을 보여주기
- 상품 개수 변경
- 상품 삭제 기능

![CleanShot 2023-05-18 at 00 25 25](https://github.com/yellowbutter0327/my-color-project/assets/103365467/ea079fb2-ba43-4ba0-8d02-21f63795fc72)
![CleanShot 2023-05-18 at 00 26 22](https://github.com/yellowbutter0327/my-color-project/assets/103365467/451e2f24-ca44-4fe5-8d27-bbfffff00f39)



### **검색 페이지**
- nav에 검색어 입력시 해당 검색어를 포함한 상품을 보여준다.
- 검색한 상품이 없을 경우 검색결과가 없다고 보여준다.

![CleanShot 2023-05-18 at 00 28 00](https://github.com/yellowbutter0327/my-color-project/assets/103365467/50743d92-f44c-42cb-9d7e-ed8e30360a57)

![CleanShot 2023-05-18 at 01 23 43](https://github.com/yellowbutter0327/my-color-project/assets/103365467/5a5649f2-bd3c-425e-876e-a8356321bc27)


### **NAV**
- 검색 기능, 로그인 상태에 따라 보여지는 UI 다르게 구현

### **FOOTER**
- 카테고리 리스트, 로그인 링크, 개발자 소개 등 FOOTER 구현





### 회고록
회고록 : <a href="https://velog.io/@yellowbutter0327/mycolor%ED%9A%8C%EA%B3%A0%EB%A1%9D">myColor 회고록</a>




































