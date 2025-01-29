import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/Header";
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
      <body className="min-h-screen w-screen overflow-x-hidden">
        <Header />
        <div className="mt-[51px] flex flex-col min-h-screen w-screen bg-background gap-[27px]">
          <main className="mx-8 py-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
