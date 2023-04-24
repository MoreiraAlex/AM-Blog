import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import SideBar from '@/components/layout/sideBar';
import Categories from '@/components/ui/categories';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='p-4 pb-0 space-y-10 bg-slate-100 text-ligth-basic-300 lg:space-y-20
              dark:bg-dark-basic-200 dark:text-dark-basic-300'
    >
      <Header />
      <main className='space-y-20'>
        <Categories />
        <div className='container mx-auto w-full space-y-10 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-5 xl:grid-cols-4'>
          <SideBar />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
