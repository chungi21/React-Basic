import { Link } from "react-router-dom"; // 🔥 추가 필요

export default function EmptyPage() {
    return (
        <>
            <h2>잘못된 접근입니다.</h2>
            <Link to="/">돌아가기</Link>
        </>
    )
}
