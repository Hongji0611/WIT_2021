# WIT_2021_Study

## 1. Fetch
- [https://jsonplaceholder.typicode.com/posts/](https://jsonplaceholder.typicode.com/posts/) 를 fetch해서 `userId`가 1인 post만 body 내에 작성
- 오늘 나온 내용을 활용해서 구현
    - 비동기적으로 fetch하기

```jsx
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => 으쌰으쌰);
```

![image](https://user-images.githubusercontent.com/63103070/111906016-f4fc5280-8a91-11eb-9803-ae1c0bc3afac.png)
<br>
