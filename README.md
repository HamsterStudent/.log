Hello World!

20210531
서브 페이지 선택자 이름을 이런 식으로 만든다면, 다른 서브페이지에는 적용할 수가 없다는 문제점을 알아차렸다.
진작 알아차렸어야 했는데 ... 그래도 이번을 계기로 다음에는 실수하지 말아야겠다.
오늘부터 선택자 이름을 조금씩 고쳐보려고 한다.

그런데, '일괄 적용되어야 할 부분'과 각 '서브페이지마다 상이한 부분'을 분리하여 이중 클래스로 만들어서 공통적으로 적용되어야 할 설정을 가진 css와 가변적인 부분을 수정할 수 있는 css파일 두개를 만들어야 할지(만들게 된다면 sub_main.css 와 프로젝트명_sub.css처럼) 아니면 서브 페이지마다 전부 ... 일일히 수정할 수 있게 해 둘지 고민인데, 생각해보니 분리하는 편이 나은 것 같다. 서브페이지마다 "공통.css" 를 전부 새로 로딩되게 하는 건 낭비같이 느껴져서 하나 따로 만들어두고 페이지를 연결해야지. 당연한 걸 고민했네!