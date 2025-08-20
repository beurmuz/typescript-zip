/**
 * NOTE: 인덱스드 엑세스 타입 (Indexed access type)
 * - 인덱스를 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입
 *
 * - 사용 시 복잡하고 큰 타입으로부터 잘게잘게 필요한 만큼만 타입을 추출할 수 있음
 */

// 1. 객체
// 객체 타입에서 특정 프로퍼티의 타입을 추출해내기
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// "author"를 인덱스라 부른다.
// 인덱스에 들어오는 것은 무조건 '타입'이다.
// const key = "author"; // 얘는 변수고 값이어서 Post[key]로 넣을 수 없다.
// 만약 author 프로퍼티의 id 프로퍼티의 타입만 가져오고싶다면, Post["author"]["id"] 하면 된다.

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 내용들",
  author: {
    id: 1,
    name: "minsik",
    age: 32,
  },
};

printAuthorInfo(post.author);

// 2. 배열
// 배열 타입에서 특정 요소의 타입을 추출해내기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

// []안(인덱스)에 어떤 숫자를 넣든 앞이 배열 타입이면, 배열의 요소를 추출해온다!
const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 내용들",
  author: {
    id: 1,
    name: "minsik",
    age: 32,
  },
};

// 3. 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

// type Tup3 = Tup[3]; // 길이가 고정되어 있어 없는걸 찾으니 error 발생

// number를 넣어주면 Tup 타입에 들어있는 모든 타입의 최적의 공통 타입을 뽑음
type TupNum = Tup[number]; // string | number | boolean
