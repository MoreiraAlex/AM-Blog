import Link from 'next/link';
import {
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaArrowRight,
} from 'react-icons/fa';

export const LateralBar = () => {
  return (
    <nav className='space-y-10 order-2 col-span-2 xl:col-span-1'>
      <section className='shadow-md w-full rounded-2xl bg-white flex items-center justify-center space-x-5 lg:space-x-0 px-4 py-8 lg:flex-col lg:space-y-3'>
        <div className='w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-stone-400 rounded-full border-4 border-ligth-primary-100'></div>
        <div className='lg:text-center lg:space-y-3'>
          <div>
            <span className='text-xs font-bold uppercase text-ligth-basic-200'>
              Seu anfitrião
            </span>
            <h2 className='text-2xl font-normal'>Alex Moreira</h2>
          </div>
          <hr className='hidden md:block' />
          <p className='hidden md:block text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            animi dolorem cum nisi eius illum esse culpa ut dolorum ipsum,
            aspernatur ipsam quos ab a rem inventore! Vero, odio consectetur?
          </p>
          <div className='flex items-center justify-center space-x-1 md:justify-start lg:justify-center'>
            <Link
              href='#'
              className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
            >
              <FaLinkedinIn className='text-xl' />
            </Link>
            <Link
              href='#'
              className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
            >
              <FaBehance className='text-xl' />
            </Link>
            <Link
              href='#'
              className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
            >
              <FaGithub className='text-xl' />
            </Link>
          </div>
        </div>
      </section>

      <section className='shadow-md w-full rounded-2xl bg-white mx-auto text-left px-4 py-8 space-y-5'>
        <h2 className='text-3xl font-bold'>Newsletter</h2>
        <hr></hr>
        <p className='text-sm '>Receba notificações de novas postagens!</p>
        <form className='space-y-3 flex flex-col'>
          <input
            type='text'
            placeholder='Email'
            className='h-10 border-2 border-ligth-basic-200 rounded-3xl px-5 outline-none'
          />
          <button className='rounded-3xl h-10 bg-ligth-primary-100 font-bold hover:text-white hover:bg-ligth-primary-200 duration-300'>
            Inscrever
          </button>
        </form>
      </section>

      <section className='shadow-md hidden lg:block w-full rounded-2xl bg-white px-4 py-8 space-y-5'>
        <h2 className='text-2xl font-bold'>Top views</h2>
        <div className='space-y-5'>
          <hr />
          <div className='grid grid-cols-3 gap-x-4 '>
            <div className='object-fill rounded-xl bg-stone-400'></div>
            <div className='col-span-2 flex flex-col space-y-1'>
              <h3 className='text-sm font-bold'>
                Por que a nuvem é essencial para o sucesso do seu negócio
              </h3>
              <Link href='#' className='group flex gap-4 items-center'>
                <FaArrowRight className='text-ligth-primary-100 group-hover:text-ligth-primary-200' />
                <span className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200'>
                  Leia Mais
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='space-y-5'>
          <hr />
          <div className='grid grid-cols-3 gap-x-4 '>
            <div className='object-fill rounded-xl bg-stone-400'></div>
            <div className='col-span-2 flex flex-col space-y-1'>
              <h3 className='text-sm font-bold'>
                Inteligência artificial: a nova fronteira da tecnologia
              </h3>
              <Link href='#' className='group flex gap-4 items-center'>
                <FaArrowRight className='text-ligth-primary-100 group-hover:text-ligth-primary-200' />
                <span className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200'>
                  Leia Mais
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='space-y-5'>
          <hr />
          <div className='grid grid-cols-3 gap-x-4 '>
            <div className='object-fill rounded-xl bg-stone-400'></div>
            <div className='col-span-2 flex flex-col space-y-1'>
              <h3 className='text-sm font-bold'>
                Como proteger seus dados em um mundo cada vez mais conectado
              </h3>
              <Link href='#' className='group flex gap-4 items-center'>
                <FaArrowRight className='text-ligth-primary-100 group-hover:text-ligth-primary-200' />
                <span className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200'>
                  Leia Mais
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className='space-y-5'>
          <hr />
          <div className='grid grid-cols-3 gap-x-4 '>
            <div className='object-fill rounded-xl bg-stone-400'></div>
            <div className='col-span-2 flex flex-col space-y-1'>
              <h3 className='text-sm font-bold'>
                Como utilizar o poder dos dados para impulsionar seu negócio
              </h3>
              <Link href='#' className='group flex gap-4 items-center'>
                <FaArrowRight className='text-ligth-primary-100 group-hover:text-ligth-primary-200' />
                <span className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200'>
                  Leia Mais
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='shadow-md hidden lg:block w-full rounded-2xl bg-white px-4 py-8 space-y-5'>
        <h2 className='text-2xl font-bold'>Top categorias</h2>
        <div className='space-y-5'>
          <hr />
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              CLOUD
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              2
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              REDES
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              5
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              INTELIGÊNCIA ARTIFICIAL
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              1
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              DADOS
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              6
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              VR
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              3
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <Link
              href='#'
              className='font-bold capitalize hover:text-ligth-primary-100'
            >
              SEGURANÇA DA INFORMAÇÃO
            </Link>
            <span className='text-xl bg-ligth-primary-100 font-bold rounded-full w-10 h-10 p-5 flex justify-center items-center'>
              3
            </span>
          </div>
        </div>
      </section>
    </nav>
  );
};
