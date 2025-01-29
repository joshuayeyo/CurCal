import localFont from "next/font/local";
import "@/styles/globals.css";
const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  weight: '45 920',
  style: 'normal',
  display: 'swap',
})

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.className} antialiased`}>
      <body>
        <div className="flex flex-col min-h-screen w-screen bg-background gap-[27px]">
          <main className="mx-8 py-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
