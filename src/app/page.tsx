import Button from '@/components/Button';

export default function Home() {
  return (
    <main className="m-20 h-full w-full">
      <section className="flex">
        <div className="h-96 w-96">애니메이션</div>
        <div className="">웹 사진 </div>
      </section>
      <Button>체험용 모달 | 로그인 </Button>
    </main>
  );
}
