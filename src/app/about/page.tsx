import Header from "@/components/Header";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

export default function About() {
  return (
    <>
      <Header>
        <Link href={"/"} className="back-button" title="홈으로">
          <FiChevronLeft size={24} strokeWidth={3} />
        </Link>
        <h1 className="text-2xl font-bold">About</h1>
      </Header>
      <div className="p-10 py-8">
        <p>
          FE 인터뷰 Q&A 위키는 프론트엔드 개발자 인터뷰 과정 중 한 번이라도 받아봤던 질문과 그에 대한 답변을 모아둔 위키
          페이지 입니다.
        </p>
        <p>참고 자료들을 직접 수집하여 작성한 내용이기 때문에 정확한 내용이 기술되어 있지 않을 수 있습니다. 😉</p>

        <hr className="inline-divider" />
        <ul className="mt-4" style={{ listStyle: "disc", paddingLeft: "30px" }}>
          <li className="">
            Github :
            <Link className="px-1" target="_blank" href="https://github.com/Ji-hoon/fe-interview-qna-wiki">
              링크
            </Link>
          </li>
          <li className="">
            Linkedin :
            <Link className="px-1" target="_blank" href="https://kr.linkedin.com/in/jhkimux">
              링크
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
