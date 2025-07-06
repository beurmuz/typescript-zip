/**
 * 서로소(공통 원소가 1개도 없는 집합) 유니온 타입
 *
 * 교집합이 없는 타입들(두 타입간에 공통적으로 포함되는 값이 하나도 없는 Type들)로만 만든 유니온 타입 (객체 타입을 정의하는 특별한 타입)
 */
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number; // 몇명을 강퇴했는지
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님이 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님이 현재까지 {point} 모았습니다.
// Guest -> {name}님이 현재까지 {visitCount}번 방문했습니다.

// 방법 1) 기존 방식은 다른 사람이 코드를 확인했을때, 이해까지 오랜 시간이 걸릴 수 있다.
// function login(user: User) {
//   if ("kickCount" in user) {
//     // adimin type
//     console.log(`${user.name}님이 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if ("point" in user) {
//     // member type
//     console.log(`${user.name}님이 현재까지 ${user.point} 모았습니다.`);
//   } else if ("visitCount" in user) {
//     // guest type
//     console.log(`${user.name}님이 현재까지 ${user.visitCount}번 방문했습니다.`);
//   }
// }

// 방법 2) tag를 활용한 방법
function login(user: User) {
  // 1. if-else if 구문 활용하기
  if (user.tag === "ADMIN") {
    // adimin type
    console.log(`${user.name}님이 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member type
    console.log(`${user.name}님이 현재까지 ${user.point} 모았습니다.`);
  } else if (user.tag === "GUEST") {
    // guest type
    console.log(`${user.name}님이 현재까지 ${user.visitCount}번 방문했습니다.`);
  }

  // 2. switch문 이용하기
  switch (user.tag) {
    case "ADMIN": {
      console.log(
        `${user.name}님이 현재까지 ${user.kickCount}명 강퇴했습니다.`
      );
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님이 현재까지 ${user.point} 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(
        `${user.name}님이 현재까지 ${user.visitCount}번 방문했습니다.`
      );
      break;
    }
  }
}

/**
 * tag의 효과
 *
 * 원래 Admin, Member, Guest type은 서로 교집합이 있는 상태였다.
 * 하지만 각각 tag의 type이 ADMIN, MEMBER, GUEST로 string 리터럴 타입으로 정의되어있기 때문에,
 * 각 타입의 교집합이 존재할 수 없는 서로소 집합 관계로 바뀌게 된다.
 *
 * 예를 들어 Admin과 Member type이 교집합이 있으려면 tag가 ADMIN이면서 동시에 MEMBER여야하는데,
 * 스트링 리터럴 타입은 오직 1개의 값만 포함하기 때문에 교집합이 존재할 수밖에 없는 것이다. (never, 공집합)
 *
 * 이 tag로 인해 User type은 '서로소 유니온 타입'이 된다.
 */

/**
 * 비동기 작업의 결과를 처리하는 객체 만들기 예제
 */

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메시지 출력
// 성공 -> 성공: 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중 ...");
      break;
    case "FAILED":
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 .. 찾아봐!",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data data data data data",
  },
};
