import './globals.css';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
