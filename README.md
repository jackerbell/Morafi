# Morafi

영화정보 조회 사이트 입니다. <br>
현재는 영화정보 조회만 가능하지만, 향후 지속적으로 기능들을 추가하면서 커뮤니티로 발전시킬 계획입니다.<br>
Morafi는 movie(영화)와 graffiti(낙서장)의 합성어로, 편안한 분위기의 영화 커뮤니티를 만들고자 지은 이름입니다.<br><br><br>

실행화면 <br>

https://user-images.githubusercontent.com/65724413/199396032-84bdea71-64bc-4a95-aece-b68ae548a75a.mp4

https://user-images.githubusercontent.com/65724413/199396096-7fa687fc-c666-47bc-826f-d272bb89489b.mp4

https://user-images.githubusercontent.com/65724413/199396140-a032fcd3-ee1b-46d0-b088-f30183cede9d.mp4

## 프로젝트 실행환경

운영체제 : window(Chrome,MS Edge)<br>

Code Editor: Visual Studio Code<br>

Client UI: HTML/CSS, JAVASCRIPT, REACT <br>

Server : NodeJS(express.js)<br>

DB : MySQL(8.0)<br>

실행방법 : 추후 AWS나 다른 온라인 서비스를 이용해 호스팅할 예정입니다. <br>
          본 프로젝트를 구동시키기 위해서는 위에서 언급한 실행환경에 대한 기본지식이 필요합니다. <br>
          MySQL에 넣을 DB는 입력문을 전환한 TXT 파일을 넣어놨으므로, CREATE TABLE 입력문부터 먼저 넣고 그 다음 INSERT 입력문으로 데이터를 넣어주시면 됩니다.<br>
          그 외에 필요한 라이브러리는 Package.JSON을 참고하시기 바랍니다.   <br><br>

## 프로젝트 설계

FE : UI를 구성하는데, 관련된 영화사이트들(네이버영화,라프텔,wwave,netflix.. etc)을 참조했습니다.
     복잡한 구조보다는 적절한 크기의 영화이미지를 주제별로 묶어서 나열하는 형식으로 영화에 집중이 되도록 화면을 구성했습니다. 

BE : NodeJs(express) 기반의 REST API 서버를 만들었고, MySQL과 연동해서 서버에 저장된 DB를 받아오는 형식으로 설계했습니다. 
     DB.js 에서 MySQL과 연동이 되도록 코드를 작성했고 server.js 파일에는 DB에 보낼 요청문 및 클라이언트로의 response 코드를 작성했습니다. 

DB : 본래 네이버API와 같은 외부 API를 사용하려 했으나, 데이터가 구체적이지 않거나, 전체조회가 되지 않는 등 한계점이 보였습니다. 
     그래서 'R'이라는 통계/분석/데이터처리 프로그램을 사용해 네이버 영화 홈페이지에 있는 데이터를 크롤링한 후 엑셀로 정리, MySQL에 입력하여 DB를 생성했습니다. <br><br>


## Contribute

기획,설계,FE,BE,DB 모두 본인이 직접 작업해서 만들었습니다. <br>


